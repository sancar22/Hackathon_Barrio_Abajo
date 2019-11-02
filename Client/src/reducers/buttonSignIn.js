

  const buttonSignInReducer = (state = false, action) => {
    switch (action.type) {
      case "SELECT_SIGNIN": 
          return state=true
      case "SELECT_CLOSE":
          return state=false
      default:
        return state;
    }
  };
  
  export default buttonSignInReducer;
  