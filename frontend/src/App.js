import React from 'react';
import { connect } from 'react-redux';

import Card from './components/Card/card';
import styles from './App.module.css';
import FormWindow from './containers/formWindow/formWindow';
import Modal from './components/UI/Modal/Modal';
import ModalSummary from './components/UI/ModalSummary/ModalSummary';
import * as actionTypes from '../src/store/actions/actionTypes';
import axios from 'axios';


const App = (props) => {
  const myArray = [];
  if (props.myBigObject !== null) {
    for (let el in props.myBigObject) {
      if (props.myBigObject[el] !== null) {
        const name = props.myBigObject[el]["name"]
        const id = props.myBigObject[el]["id"];
        const level = props.myBigObject[el]["level"];
        const tasks = props.myBigObject[el]["tasks"];
        myArray.push(<Card name={name} id={id} level={level} tasks={tasks}/>)
      }
    }
  }

    let myBigObjectReplica = {
      ...props.myBigObject
    }

    for(let el in props.myBigObject){
      if(props.myBigObject[el] === null){
         delete myBigObjectReplica[el];
      }
    }

    const onClickPostHandler = () => {
      const objectToPost = {
        name: props.name,
        ...props.myBigObject
      };
      console.log(objectToPost);
      axios.post('https://assesment-tasks-backend.herokuapp.com/assesmentTasksFrontend/saveToMongoDB', objectToPost)
      .then(res => {
        console.log(res.myBigObject);
      })
      .catch( err => {
        console.log(err);
      })
    }

  return (

    <div className={styles.App}>
        {props.modalSummary ? <ModalSummary info={myBigObjectReplica} show={true} /> : null}
        {props.modalShow ? <Modal show={true}/> : null}
        <div className={styles.buttonDiv}>
        <button className={styles.appButton} onClick={() => props.showOrHideSummary()}>Summary</button>
        <button className={styles.appButton} onClick={() => onClickPostHandler()}>Send results!</button>
        </div>
       {props.formCompleted ? myArray.map(el => el) : <FormWindow />} 
    </div>

  );

}



const mapStateToProps = (state) => ({
  formCompleted: state.formCompleted,
  myBigObject: state.addedTechnologies,
  modalShow: state.modalShow,
  modalSummary: state.summary,
  name: state.name
})

const mapDispatchToProps = dispatch => {
  return {
      showOrHideSummary: () => dispatch({ type: actionTypes.SHOW_OR_HIDE_SUMMARY})
  }

}



export default connect(mapStateToProps, mapDispatchToProps)(App);