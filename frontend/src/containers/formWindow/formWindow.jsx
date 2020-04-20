import React, { Component } from 'react';
import styles from './formWindow.module.css';
import { connect } from 'react-redux';
import axios from 'axios';
import * as actionTypes from '../../store/actions/actionTypes';



class formWindow extends Component {
    state = {
        currentValueTechnologies: "Ruby",
        currentValueLevel: "Low",
        addedTechnologies: [],
        selectedElementNr: null,
        duplicates: false,
        tasks: null,
        myBigObject2: {
            Python: null,
            Ruby: null,
            Cplusplus: null,
            Csharp: null
        }
    }





    onChangeHandlerTechnology = (event) => {
        this.checkIfAdded();
        console.log(event.target.value);
        this.setState({ currentValueTechnologies: event.target.value })
        this.setState({ duplicates: false })
        console.log(this.state.myBigObject2);
    }



    onChangeHandlerLevel = (event) => {
        this.setState({ currentValueLevel: event.target.value })
        this.setState({ duplicates: false })
    }


    assignId = (val) => {
        switch (val) {
            case "Ruby":
                return 1
                break;
            case "Cplusplus":
                return 7
                break;
            case "Csharp":
                return 10
                break;
            case "Python":
                return 0
                break;
            default:
                return 5;
                break;
        }
    }



    onClickHandler = () => {
        const myArr = this.state.addedTechnologies;
        if (this.checkIfAdded() == false) {
            return false
        }

        else {
            myArr.push({technology: this.state.currentValueTechnologies, level: this.state.currentValueLevel});
            const idOfTechnology = this.assignId(this.state.currentValueTechnologies);
            const myFunc = {
                ...this.state,
                myBigObject2: {
                    ...this.state.myBigObject2,
                    [this.state.currentValueTechnologies]: {
                        name: this.state.currentValueTechnologies,
                        id: idOfTechnology,
                        level: this.state.currentValueLevel,
                        tasks: this.state.tasks[this.state.currentValueTechnologies][this.state.currentValueLevel]
                    }
                }
            }
            this.setState({...myFunc, addedTechnologies: myArr})
        }
    }



    onClickSecondHandler = (val) => {
        this.setState({ selectedElementNr: val })
    }



    onClickDeleteHandler = (name) => {
        const tempArr = this.state.addedTechnologies;
        console.log('name: ' + name);
        tempArr.forEach((el, index) => {
            if(el.technology == name){
                tempArr.splice(index, 1)
            }
            console.log('spliced: ' + el.name);
        });

        console.log(name);
        const tempObj = {...this.state.myBigObject2, [name]:null};
        console.log(tempObj);    
        this.setState({ ...tempObj }, () => console.log('yo' + this.state.myBigObject2));
    }



    compareTwoNumbers = (one, two) => {
        if (one == two) {
            return true
        }
        else {
            return false
        }
    }





    checkIfAdded = () => {
        let b = false;
        for (let i = 0; i < this.state.addedTechnologies.length; i++) {
            if (this.state.addedTechnologies[i].technology == this.state.currentValueTechnologies) {
                this.setState({ duplicates: true })
                b = true;
                return false
            }
        }
        if (b = false) {
            return true;
        }
    }

    componentDidMount() {
        let x = null;
        console.log('posting....');
        axios.get('https://assesment-tasks-backend.herokuapp.com/assesmentTasksFrontend/tasks')
            .then(res => {
                x = res.data;
                console.log(x);
                let y = Object.assign({}, x[0]);
                delete y["_id"];
                console.log(y);
                this.setState({ tasks: y});
            })
            .catch(err => {
                console.log(err);
                return null
            });
    }



    handleChange(event) {
        this.setState({ name: event.target.value });
        this.props.dispatchName(this.state.name);
    }

    returnToRender = () => {
        const myArr = [];
        for(let el in this.state.myBigObject2){
            if(this.state.myBigObject2[el] != null){
                myArr.push({ technology: this.state.myBigObject2[el], level: this.state.myBigObject2[el].level});
            }
        }
         console.log(myArr);
    }

    render() {
        return (
            <div className={styles.formWindow}>
                <div className={styles.formDiv}>
                    <form>
                        <label>Name: </label><br />
                        <input type="Text" onChange={(event) => this.handleChange(event)}></input><br />
                        <label>Mit welchen Technologien kennst du dich aus?</label><br />
                        <select onChange={(event) => this.onChangeHandlerTechnology(event)} name="Programmiersprachen">
                            <option value="Ruby">Ruby</option>
                            <option value="Cplusplus">C++</option>
                            <option value="Csharp">C#</option>
                            <option value="Python">Python</option>
                        </select><br />
                        <br />
                        <label >Wie gut kennst du dich mit dieser Technologie aus?</label><br />
                        <select name="Schwierigskeitgrad" onChange={(event) => this.onChangeHandlerLevel(event)}>
                            <option value="Low">Ein bisschen</option>
                            <option value="Medium">Gut</option>
                            <option value="Advanced">Fortgeschritten</option>
                        </select><br /><br /><br />
                        <button type='button' onClick={() => {this.onClickHandler(); this.returnToRender();}}>Hinzufügen</button><br />
                        {this.state.duplicates ? <h7 style={{ color: 'red' }}>Sie können nur einmal augewählte Technologie hinzufügen!</h7> : null}
                        <div className={styles.addedTechnologies}>
                            <div className={styles.addedTechnologiesBox}>
                                {this.state.addedTechnologies.map(el => { return <div style={{ background: this.compareTwoNumbers(el.key, this.state.selectedElementNr) ? 'rgb(122, 170, 189)' : null }} onClick={() => {this.onClickSecondHandler(el.key); this.onClickDeleteHandler(el.technology)}}> Technologie: {el.technology}, Schwierigskeitgrad: {el.level}</div> })}
                            </div>
                        </div>
                        <button type='button' onClick={() => { this.props.dispatchChoosed(this.state); this.props.dispatchName(this.state.name); }} className={styles.submitButton}>Fortfahren</button>
                    </form>
                </div>
            </div>
        );

    }

}







const mapDispatchToProps = dispatch => {
    return {
        dispatchChoosed: (value) => dispatch({ type: actionTypes.ADD_TASKS_AND_LEVELS, payload: value.myBigObject2 }),
        dispatchName: (name) => dispatch({ type: actionTypes.ADD_NAME, payload: name })
    }

}



export default connect(null, mapDispatchToProps)(formWindow);
