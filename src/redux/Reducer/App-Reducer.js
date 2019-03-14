import types from "../Actions/Types";

const defaultState = {
  collapsed: false
};

const appReducer = (state = defaultState, action) => {
  switch (action.type) {
    case types.COLLAPSED:
      return { ...state, collapsed: action.data.collapsed };

    default:
      return { ...state };
  } // end switch
}; // end reducer

export default appReducer;
