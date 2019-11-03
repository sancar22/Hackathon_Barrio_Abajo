export const selectButton = info => {
  return {
    type: "SELECT_SIGNIN",
    payload: info
  };
};

export const selectHome = info => {
  return {
    type: "SELECT_HOME",
    payload: info
  };
};

export const deselectHome = info => {
  return {
    type: "SELECT_HOME_N",
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
export const correctButton = info => {
  return {
    type: "SELECT_CORRECT",
    payload: info
  };
};

export const deCorrectButton = info => {
  return {
    type: "SELECT_CORRECT_N",
    payload: info
  };
};

export const openEventsCreator = info => {
  return {
    type: "SELECT_EVENT_CREATE",
    payload: info
  };
};

export const closeEventsCreator = info => {
  return {
    type: "SELECT_CLOSE_EC",
    payload: info
  };
};
