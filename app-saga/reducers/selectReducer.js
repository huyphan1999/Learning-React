
import { FETCH_SUCCEEDED, FETCH_FAILED } from "../actions/TaskListActions";

const selectReducer = (state = { data: [] }, action) => {

    let newTaskList = state.data;
    switch (action.type) {
        case 'SELECT':
            {
                if (newTaskList[action.atIndex].isSelected = !newTaskList[action.atIndex].isSelected) {
                    newTaskList[action.atIndex].isSelected = 1;
                    return { ...state, data: [...newTaskList] };
                }
                else {
                    newTaskList[action.atIndex].isSelected = 0;
                    return { ...state, data: [...newTaskList] };
                }
            }
        case FETCH_SUCCEEDED:
            console.log("Fetch succed")
            let newdata = action.receivedData;
            console.log(newdata)
            return { ...state, data: newdata };
        case FETCH_FAILED:
            return state;
    }
    return state;
}

export default selectReducer;