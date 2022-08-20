import { configureStore } from '@reduxjs/toolkit';
import CounterReducer from '../features/Counter/Counter.slice'

export const store = configureStore({reducer:CounterReducer})