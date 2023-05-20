const initialState = {
    hourlyWage: null,
  };
  
  export const reducer = (state = initialState, action) => {
    switch (action.type) {
      case 'SET_HOURLY_WAGE':
        return {
          ...state,
          hourlyWage: action.payload,
        };
      default:
        return state;
    }
  };
  