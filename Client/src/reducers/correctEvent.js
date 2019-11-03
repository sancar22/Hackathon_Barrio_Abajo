
  const correctEventReducer = (state = false, action) => {
    switch (action.type) {
      case "SELECT_CORRECT": 
          return state=true
      case "SELECT_CORRECT_N":
          return state=false
      default:
        return state;
    }
  };
  
  export default correctEventReducer;
  