// Redux  사용 순서 짚기 !
// -- 보일러 플레이트 : 파일, 코드, 구조 많음 ..

// 1. Store 만들기 - 데이터를 저장할 공간

// 2. 모듈 안에 들어가야 할 것(한 파일에 들어가 있는 형국 : Ducks 구조)
//  : initial state, action type, action creators, 리듀서

// 3. 루트 리듀서(root reducer) 만들기 - 리듀서들 묶기

// 4. 인핸서(enhancer) 만들기 - 미들웨어들 묶기

// 5. 찐 Store 만들기 = root reducer + enhancer

// 6. 찐 Store 구독해서 안에 있는 데이터 꺼내고(useSelect),
//    수정/실행하기(dispatch)




import {createStore, combindeRedicers, combineReducers} from "redux";
// 줄 그어지는것 : deprecated
// = 오래된 것이라 추천하지 않는다. 다른 것 사용 권장.

import cat from "./modules/cat"
// modules 임포트 해오기

const rootReducer = combineReducers({cat});

const store = createStore(rootReducer);
// 원래 rootReducer + enhancer 인데 미들웨어 안쓸거라 루트리듀서만 해놓음!

export default store;