import React, { useState } from 'react';
import { connect } from 'react-redux';

import styles from './subcard.module.css';
import AceEditor from "react-ace";
import "ace-builds/src-noconflict/mode-html";
import "ace-builds/src-noconflict/theme-tomorrow_night";
import * as actionTypes from '../../store/actions/actionTypes';
import { actionCreatorAsyncCode } from '../../store/actions/actionCreators';



const SubCard = (props) => {
    const [open, setOpen] = useState(false);
    const onClickHandler = (props) => {
            let b = open;
            setOpen(!b)
    }

    const threeFunctionsInOne = (object) => {                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        
        props.showModal()
        props.disableTask(object);
    }

    const onChangeHandler = (event) => {
        console.log('Entered code: ');
        console.log(props.compiledCode);
        props.retainEnteredCode(event, props.taskName, props.technology);
    }

    let toShow = (
        <div className={styles.toShowOnClick}>
        <div className={styles.taskDescription}>
                {props.taskDescription}
        </div>
        <div className={styles.AceEditor}>
                <AceEditor
                    value={props.enteredCode}
                    mode="java"
                    width="100%"
                    theme="tomorrow_night"
                    onChange={onChangeHandler}
                    name="UNIQUE_ID_OF_DIV"
                   editorProps={{ $blockScrolling: true }}
                />
        </div>
        <div className={styles.outputBox}>
            <button onClick={() => props.runAsyncCodeAndUpdateTheState({id: props.id, code:props.enteredCode, technology: props.technology, taskName: props.taskName })}>Compile</button>
            <div className={styles.outputBoxCode}>
              <h2>{props.compiledCode}</h2>
            </div>
        </div>
            <button onClick={() => threeFunctionsInOne({ val1: props.taskName, val2: props.technology})}>Submit task!</button>
        </div>
    )
     
    const checkToRender = (val1, val2) => {
        if(val1 && val2 == false){
            return true;
        }
        else {
            return false;
        }
    }

    return (
        <div>
            <div className={styles.subCard} style={{backgroundColor: props.completed ? '#EE9C29' : '#E7E1D9'}}>
                <h6 onClick={props.completed ? null : () => onClickHandler()}>{props.taskName + (props.completed ? " (Completed)" : " (Available)")}</h6>
            </div>
            {checkToRender(open, props.completed) ? toShow : null}
        </div>

    )

}

const mapDispatchToProps = dispatch => {
    return {
      runAsyncCodeAndUpdateTheState: (payload) => dispatch(actionCreatorAsyncCode(payload)),
      retainEnteredCode: (enteredCode, taskName, technology) => dispatch({ type: actionTypes.RETAIN_ENTERED_CODE, payload: {enteredCode, taskName, technology} }),
      showModal: (val) => dispatch({ type: actionTypes.SHOW_OR_HIDE_MODAL, payload: val}),
      disableTask: (val) => dispatch({ type: actionTypes.LOAD_TEMP_DATA, payload: val })
    }
  }

const mapStateToProps = state => {
    return {
        tempData: state.tempData,
        toContinueOrNot: state.actionModal
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(SubCard);
