import { all } from "redux-saga/effects"
import { watchUsersAsync } from "./userSaga"

export function* rootSaga() {
    yield all([
        watchUsersAsync()
    ])
}