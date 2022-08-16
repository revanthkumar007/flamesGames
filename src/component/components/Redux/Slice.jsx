import { createSlice } from "@reduxjs/toolkit";

const Flames = createSlice({
    name:'flames',
    initialState:{
        relation:{
            firstName:'',
            secondName:''
        },
        flamesNames:{
            flameName:'',
            flameimg:''
        }
    },
    reducers:{
        addNames(state,action){
            const inputPayload = action.payload
            state.relation.firstName = inputPayload.firstName
            state.relation.secondName = inputPayload.secondName
        },
        addFlames(state,action){
            const inputPayload = action.payload
            state.flamesNames.flameName = inputPayload.flameName
            state.flamesNames.flameimg = inputPayload.flameimg
        }
    }

})

export const action  = Flames.actions

export default Flames;