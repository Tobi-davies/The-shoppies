// import setNomineeList from './nominated.actions'

const INITIAL_STATE = {
  list: [],
};

const nomineeReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "SET_NOMINEE_LIST":
      return {
        ...state,
        list: action.payload,
      };

    default:
      return state;
  }
};

export default nomineeReducer;
