import { FETCH_SUCCEEDED, FETCH_FAILED } from '../actions/TaskListActions'

import { put, takeLatest,call } from 'redux-saga/effects';
import { Api } from './Api';
function* fetchData() {
    try {
        const receivedData = yield Api.getDataFromApi();
        yield put({ type: FETCH_SUCCEEDED, receivedData: receivedData });
    } catch (error) {
        yield put({ type: FETCH_FAILED, error });
    }
}

function* mySaga() {
    yield call(fetchData);
  }
  
export default mySaga;