
  const buttonSignUpReducer = (state = false, action) => {
    switch (action.type) {
      case "SELECT_SIGNUP": 
          return state=true
      case "SELECT_CLOSE_SP":
          return state=false
      default:
        return state;
    }
  };
  
  export default buttonSignUpReducer;
  