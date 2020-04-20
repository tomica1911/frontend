import React from 'react';
import { connect } from 'react-redux';

import classes from './ModalSummary.module.css';
import Backdrop from '../BackdropSummary/BackdropSummary';
import * as actionTypes from '../../../store/actions/actionTypes';

//for of zahlen
//for in namen
const modal = ( props ) => {
    const numberOfAddedTechnologies = () => {
        let counter = 0;
        let technologiesChoosen = [];
        for(let el in props.info){
            if(props.info[el] != null){
                counter ++
                technologiesChoosen.push(el);
            }
        }
        return {counter, technologiesChoosen};
    }

    const getNumberOfCompletedTasks = (technologyname) => {
        let counter = 0;
        for(let i = 0; i < props.info[technologyname].tasks.length; i++){
            if(props.info[technologyname].tasks[i].completed == true){
                counter++
            }
        }
        return counter;
    }
    
    const addedTechnologies = numberOfAddedTechnologies(props.info);
    return (<React.Fragment>
        <Backdrop show={true} clicked={props.modalClosed} />
        <div
            className={classes.Modal}
            style={{
                transform: props.show ? 'translateY(0)' : 'translateY(-100vh)',
                opacity: props.show ? '1' : '0'
            }}>
            <h2>Number of chosen technologies: {Object.keys(props.info).length}</h2>
        <h2>Choosen technologies: {Object.keys(props.info).map(
            el =>
            <div>
             <h5>{el}</h5> 
             <h5>Level: {props.info[el].level}</h5>
             <h5>Number of tasks: {props.info[el].tasks.length}</h5>
             <h5>Number of completed tasks: {getNumberOfCompletedTasks(el)}</h5>
             </div>
             )}</h2>
            <button onClick={props.showOrHideSummary}>Ok!</button>
        </div>
    </React.Fragment>)
}


const mapDispatchToProps = dispatch => {
    return {
      showOrHideSummary: () => dispatch({ type: actionTypes.SHOW_OR_HIDE_SUMMARY})
    }
  }



export default connect(null, mapDispatchToProps)(modal);