
  const initHomeReducer = (state = false, action) => {
    switch (action.type) {
      case "SELECT_HOME": 
          return state=true
      case "SELECT_HOME_N":
          return state=false
      default:
        return state;
    }
  };
  
  export default initHomeReducer;