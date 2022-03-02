export const ADD_TODO = 'ADD_TODO';

function addTodo(todo){
    return {
        type: ADD_TODO,
        todo //key와 value 이름이 같아서 하나만 작성
    }
}
