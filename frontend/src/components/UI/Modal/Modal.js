import React from 'react';
import { connect } from 'react-redux';

import classes from './Modal.module.css';
import Backdrop from '../Backdrop/Backdrop';
import * as actionTypes from '../../../store/actions/actionTypes';



const modal = ( props ) => {
    return (<React.Fragment>
        <Backdrop show={true} clicked={props.modalClosed} />
        <div
            className={classes.Modal}
            style={{
                transform: props.show ? 'translateY(0)' : 'translateY(-100vh)',
                opacity: props.show ? '1' : '0'
            }}>
            <h2>Are you sure you want to continue?</h2>
            <button onClick={() => { props.completeTask(); props.show_or_hide_modal() }}>Continue</button>
            <button onClick={() => { props.show_or_hide_modal() }}>Back</button>
        </div>
    </React.Fragment>)
}


const mapDispatchToProps = dispatch => {
    return {
      show_or_hide_modal: () => dispatch({ type: actionTypes.SHOW_OR_HIDE_MODAL}),
      completeTask: (value) => dispatch({ type: actionTypes.COMPLETE_TASK})
    }
  }



export default connect(null, mapDispatchToProps)(modal);