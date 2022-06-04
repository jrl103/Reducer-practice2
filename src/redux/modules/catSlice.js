// 임포트 해주기
import { createSlice } from "@reduxjs/toolkit"; 
// redux toolkit = slice
// : action type, action creators, reducer, initial state를 한번에 묶어서 사용


const catslice = createSlice({
    // 이 안에 모든걸 넣기
    name : "cat",
    initialState: {
        name : "펄이 고양이",
        age: 5,
    },
    reducers : {
        // 액션 타입 넣어주기

        // 기존의 액션 타입
        // : 어떤 데이터 넘겨줄지, 액션타입은 뭔지

        // 슬라이스에 넣어줄 액션 타입 
        // : 어떤 데이터 넘겨줄지, 액션타입은 뭔지, + 여기서 뭘 해야할지 !
        changeName: (state, action) => {
            state.name = action.payload;
            // 스프레드 문법으로 새 객체 만들지 않고 바로 넘겨줌
            // 이유 : toolkit은 immer라고 부르는 불변성 유지 패키지를 이미 가지고 있음

            // immer ?
            // 자동으로 불변성 유지를 해주는 패키지
            // 자바스크립트의 proxy 라는 객체를 사용함

            // proxy 객체 ?
            // 접근 or 할당 or 순회 or 열거 or 함수 호출 등처럼
            // 기본적인 동작으로 새로운 행동을 만들어 낼 때 사용
            // ---> immer 는 이것을 활용해 불변성 유지를 함
        },
    },
});

// 액션생성함수, 리듀서 export 해주기
export const {changeName} = catslice.actions;
export default catslice.reducer;