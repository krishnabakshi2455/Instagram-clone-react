import { configureStore } from '@reduxjs/toolkit'
import StoreContainer from './StoreContainer'

export const store = configureStore({
    reducer: {
        Form: StoreContainer
    },
})