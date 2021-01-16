import SetNomineeTypes from "./nominated.types";
import { addNomineeToList } from "./nominated.utils";

const INITIAL_STATE = {
  list: [],
};

const nomineeReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SetNomineeTypes.SET_NOMINEE_LIST:
      return {
        ...state,
        list: addNomineeToList(state.list, action.payload),
      };

    default:
      return state;
  }
};

export default nomineeReducer;
