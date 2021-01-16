// import NomineeList from "../../components/nominee-list/nominee.component";

export const addNomineeToList = (nomineesList, nomineeToAdd) => {
  const existingNominee = nomineesList.find(
    (nominee) => nominee.imdbID === nomineeToAdd.imdbID
  );

  if (existingNominee) {
    return nomineesList.filter(
      (nominee) => nominee.imdbID !== nomineeToAdd.imdbID
    );
  }

  return [...nomineesList, nomineeToAdd];
};
