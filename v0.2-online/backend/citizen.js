// HYBOUCLIER™ — Module citoyen v0.3-dev

export function createCitizen(id) {
  return {
    id,
    createdAt: Date.now(),
    localData: {},
    status: "citizen-initialized"
  };
}

export function updateCitizen(citizen, data) {
  return {
    ...citizen,
    localData: {
      ...citizen.localData,
      ...data
    }
  };
}
