import React from "react";
import {useSelector, useDispatch} from "react-redux"
// 컴포넌트에서 redux-hook 사용
// useSelect : 데이터 구독, 참조
// useDispatch : 액션 호출

import { changeName } from "./redux/modules/cat";

function App() {
  const cat = useSelector(state => state.cat);
  // console.log(cat);

  const dispatch = useDispatch();
  return (
    <div>
      <p>name:::: {cat.name}</p>
      <button onClick={() => {
        // dispatch(어떤 액션을 해!) --> 액션함수 임포트하기
        dispatch(changeName("루비"));
      }}>이름 바꾸기</button>
    </div>
  );
}

export default App;
