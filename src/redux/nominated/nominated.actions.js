import SetNomineeTypes from "./nominated.types";

export const addNominee = (nominee) => ({
  type: SetNomineeTypes.SET_NOMINEE_LIST,
  payload: nominee,
});
