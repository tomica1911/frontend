import React from 'react';

import styles from './card.module.css';
import SubCard from '../Subcard/subcard';


const card = (props) => {
      return (
      <div className={styles.card}>
          <h2>{props.name}</h2>
          {
              props.tasks.map(el => <SubCard compiledCode={el.compiledCode} id={props.id} taskDescription={el.taskDescription} taskName={el.taskName} completed={el.completed} technology={el.technology} enteredCode={el.enteredCode} />)
          }
      </div>
      );

}



export default card;
