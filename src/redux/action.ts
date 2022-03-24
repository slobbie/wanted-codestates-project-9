/* 액션 타입 선언 */
export const ADD_REVIEW = 'review/ADD_REVIEW';

/* 액션 생성함수 선언 */
export const addReview = (reviews: any) => ({
  type: ADD_REVIEW,
  payload: reviews,
});
