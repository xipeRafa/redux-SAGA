import { configureStore } from "@reduxjs/toolkit"
import createSagaMiddleware from "@redux-saga/core"
import {rootSaga} from './redux/sagas'

import user from "./redux/slice/user"
import users from "./redux/slice/usersSlice"

const sagaMiddleware = createSagaMiddleware()

const store = configureStore({
    reducer: {
        user,
        users
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({ thunk: false }).concat(sagaMiddleware)
})

sagaMiddleware.run(rootSaga)

export default store