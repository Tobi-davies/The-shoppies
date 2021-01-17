// import NomineeList from "../../components/nominee-list/nominee.component";

export const addNomineeToList = (nomineesList, nomineeToAdd) => {
  const existingNominee = nomineesList.find(
    (nominee) => nominee.imdbID === nomineeToAdd.imdbID
  );

  if (existingNominee) {
    return nomineesList.map((nominee) =>
      nominee.imdbID === nomineeToAdd.imdbID
        ? { ...nominee, quantity: nominee.quantity + 1 }
        : nominee
    );
  }

  return [...nomineesList, { ...nomineeToAdd, quantity: 1 }];
};
