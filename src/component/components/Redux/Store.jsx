import {configureStore} from '@reduxjs/toolkit'
import Flames from './Slice'

const Store = configureStore({
    reducer:Flames.reducer
})

export default Store;