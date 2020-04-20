import * as actionTypes from '../actions/actionTypes';

const initialState = {
  name: null,
  formCompleted: false,
  modalShow: false,
  addedTechnologies: null,
  actionModal: null,
  tempData: null,
  summary: false
}



const reducer = (state = initialState, action) => {
  switch (action.type) {


    case actionTypes.ADD_NAME:
      return {
        ...state,
        name: action.payload
      }


    case actionTypes.SHOW_OR_HIDE_SUMMARY:
      return {
        ...state,
        summary: !state.summary
      }


    case actionTypes.CHECK_IF_SURE_MODAL:
      return {
        ...state,
        actionModal: action.payload
      }


    case actionTypes.ASYNC_CODE:
      console.log(action.payload.response.data);
      let output = action.payload.response.data.output;
      if(output.length == 0){
        output = action.payload.response.data.errors
      }
      const extractedArrayThunk = state.addedTechnologies[action.payload.technology].tasks;
      for (let i = 0; i < extractedArrayThunk.length; i++) {
        if (extractedArrayThunk[i].taskName == action.payload.taskName) {
            extractedArrayThunk[i].compiledCode = output;
        }
      }
      const tempData3 = {
        ...state,
        tempData: null,
        addedTechnologies: {
          ...state.addedTechnologies,
          [action.payload.technology]: {
            ...state.addedTechnologies[action.payload.technology],
            tasks: extractedArrayThunk
          }
        }
      }
      return {
        ...tempData3
      }

    case actionTypes.RETAIN_ENTERED_CODE:
      const extractedTaskArray = state.addedTechnologies[action.payload.technology].tasks;
      for (let el of extractedTaskArray) {
        if (el.taskName == action.payload.taskName) {
          el.enteredCode = action.payload.enteredCode;
        }
      }
      let tempData2 = {
        ...state,
        addedTechnologies: {
          ...state.addedTechnologies,
          [action.payload.technology]: {
            ...state.addedTechnologies[action.payload.technology],
            tasks: extractedTaskArray
          }
        }
      }
      return {
        ...tempData2
      }

    case actionTypes.SHOW_OR_HIDE_MODAL:
      return {
        ...state,
        modalShow: !state.modalShow,
        actionModal: action.payload
      }


    case actionTypes.LOAD_TEMP_DATA:
      console.log("tempData");
      console.log(action.payload);
      return {
        ...state,
        tempData: action.payload
      }



    case actionTypes.ADD_TASKS_AND_LEVELS:
      console.log(action.payload);
      return {
        ...state,
        formCompleted: true,
        addedTechnologies: action.payload
      }



    case actionTypes.COMPLETE_TASK:
      const extractedArray = state.addedTechnologies[state.tempData.val2].tasks;
      for (let i = 0; i < extractedArray.length; i++) {
        if (extractedArray[i].taskName == state.tempData.val1) {
          extractedArray[i].completed = true;
          console.log(extractedArray[i]);
        }
      }
      let tempData = {
        ...state,
        tempData: null,
        addedTechnologies: {
          ...state.addedTechnologies,
          [state.tempData.val2]: {
            ...state.addedTechnologies[state.tempData.val2],
            tasks: extractedArray
          }
        }
      }
      return { ...tempData }

    default:
      return initialState
  }
};



export default reducer;
