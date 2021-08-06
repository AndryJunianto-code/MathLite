const exampleReducer = (state,action) => {
    switch(action.type) {
        case 'CHANGE_OPERATOR':{
            return{
                ...state,operator:action.payload
            }
        }
        case 'CHANGE_TYPE': {
            return {
                ...state,type:action.payload
            }
        }
        case 'CHANGE_FREQUENCY': {
            return {
                ...state,frequency:action.payload
            }
        }
        default:return state
    }
}
export default exampleReducer