
import * as api from '../../apis/index'
import * as sliceUsers from '../slice/usersSlice'

import { setUserSlice } from '../slice/user'
import { put, takeEvery } from 'redux-saga/effects'

import TYPES from "../types"



export function* getUsersSaga() {
    const users = yield api.getUsersAPI()
    yield put(sliceUsers.getUsersSlice(users.data))
}

export function* getUserByIdSaga(action) {
    yield api.getUserByIdAPI(action.id)
    yield put(setUserSlice(action.id))
}
export function* createUserSaga(action) {
    yield api.createUserAPI(action.user)
    yield put(sliceUsers.addUserSlice(action.user))
}

export function* updateUserSaga(action) {
    yield api.updateUserAPI(action.user)
    yield put(sliceUsers.editUserSlice(action.user))
}

export function* deleteUserByIdSaga(action) {
    yield api.deleteUserByIdAPI(action.id)
    yield put(sliceUsers.deleteUserSlice(action.id))
}

export function* watchUsersAsync() {
    yield takeEvery(TYPES.GET_USERS,         getUsersSaga)
    yield takeEvery(TYPES.GET_USER_BY_ID, getUserByIdSaga)

    yield takeEvery(TYPES.CREATE_USER,       createUserSaga)
    yield takeEvery(TYPES.UPDATE_USER_BY_ID, updateUserSaga)

    yield takeEvery(TYPES.DELETE_USER_BY_ID, deleteUserByIdSaga)
}