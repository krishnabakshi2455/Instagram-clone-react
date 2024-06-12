import { configureStore } from '@reduxjs/toolkit'
import StoreContainer from './StoreContainer'
import ReelStore from './ReelStore'

export const store = configureStore({
    reducer: {
        Form: StoreContainer,
        Reels:ReelStore
    },
})