export const ADD_FEATURE = "ADD_FEATURE";

export const addFeat = (feature) => {
  return {
    type: ADD_FEATURE,
    payload: feature,
  };
};
