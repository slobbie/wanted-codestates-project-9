import { ADD_REVIEW } from './../action';
const initialState: any = {
  reviews: [],
  options: {},
  details: [],
};

export const review = (state = initialState, action: any) => {
  switch (action.type) {
    case ADD_REVIEW: {
      console.log(action);
      return {
        ...state,
        review: [action.payload, ...state.reviews],
      };
    }
    default:
      return state;
  }
};
