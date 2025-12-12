// Store bnane k liye sbse pahle configure Store lekr aana h redux-toolkit se
// next step we will build reducer(we say slices in redux toolkit)
import {configureStore} from '@reduxjs/toolkit'
import todoReducer from '../features/todo/todoSlice'

export const store = configureStore({
    reducer: todoReducer
})