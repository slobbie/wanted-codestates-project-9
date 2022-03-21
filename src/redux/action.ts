/* 액션 타입 선언 */
export const GET_DATA = "GET_DATA";

/* 액션 생성함수 선언 */
export const getData = (id: number) => {
  return {
    type: id,
  };
};
