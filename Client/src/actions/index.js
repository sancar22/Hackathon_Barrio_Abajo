
export const selectButton = info => {
  return {
    type: "SELECT_SIGNIN",
    payload: info
  };
};

export const selectButtonSign = info => {
  return {
    type: "SELECT_SIGNUP",
    payload: info
  };
};


export const closeButton = info => {
  return {
    type: "SELECT_CLOSE",
    payload: info
  };
};


export const closeButtonSP = info => {
  return {
    type: "SELECT_CLOSE_SP",
    payload: info
  };
};