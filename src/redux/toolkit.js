// 1. 리덕스 툴킷 설치 : yarn add @reduxjs/toolkit

// 2. 툴킷 가져오기
import { configureStore } from "@reduxjs/toolkit";

// 3-1. 만든 툴킷 가져오기
import catReducer from "./modules/catSlice";

// // 3. store 만들기
// const toolkit = configureStore({reducder : {}});
//                     // 슬라이스 만들어준 다음 채워넣기

//4. store 채워주기
const toolkit = configureStore({
    reducder : {
        cat: catReducer,
}
});

export default toolkit;