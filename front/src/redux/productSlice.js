import {createSlice} from "@reduxjs/toolkit"

const productSlice = createSlice({
    name: "product",
    initialState:[
         {
            name:'redux',
            postUrl:'reduxUrl',
            rating:"3.5",
            price:'963'
         }],
    

reducers:{
    setproduct:(state,action)=>{
        return action.payload
    }
}
})
export const {setproduct} = productSlice.actions
export default productSlice.reducer 