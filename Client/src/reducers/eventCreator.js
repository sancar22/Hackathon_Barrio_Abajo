const eventCreatorReducer = (state = false, action) => {
  switch (action.type) {
    case "SELECT_EVENT_CREATE":
      return (state = true);
    case "SELECT_CLOSE_EC":
      return (state = false);
    default:
      return state;
  }
};

export default eventCreatorReducer;
