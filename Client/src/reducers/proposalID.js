const proposalIDReducer = (state = "", action) => {
  switch (action.type) {
    case "SET_PROPOSAL_ID":
      return (state = action.payload);
    default:
      return state;
  }
};

export default proposalIDReducer;
