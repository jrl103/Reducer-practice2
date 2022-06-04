// action
const CHANGE_NAME = "cat/CHANGE_NAME"

const initial_state = {name : "펄이 고양이", age:5}

// action creator
export const changeName = (name) => {
    return{type:CHANGE_NAME, name};
};

// middlewares


// reducer --> 실질적으로 store에 있는 데이터를 변경하는 곳
export default function reducer(state=initial_state, action={}){
// state에 설령 아무값이 없어도 기본으로 initial_state를 가지고 있으라는 뜻
// action ={} 에는 action creator에서 리턴한 것이 들어감

    switch(action.type){
    // 액션의 타입별로 각각 알맞는 작업을 해줄 거임
    
        case "cat/CHANGE_NAME" : {
            return {...state, name : action.name}
            // 이름을 바꾸고 싶으면 action creator에 있는 name를 써줘야함
        }
        default :
        return state;

    }

}