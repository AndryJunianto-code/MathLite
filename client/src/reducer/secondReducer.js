const secondReducer = (state,action) => {
    switch(action.type) {
        case 'ADDITION':{
            return {
                open:true,
                type:'Pertambahan'
            }
        }
        case 'SUBTRACTION': {
            return {
                open:true,
                type:'Perkurangan'
            }
        }
        case 'MULTIPLICATION': {
            return {
                open:true,
                type:'Perkalian'
            }
        }
        case 'DIVISION': {
            return {
                open:true,
                type:'Pembagian'
            }
        }
        case 'CLOSEMODAL':{
            return {
                type:null,
                open:false
            }
        }
        default: return state
    }
}

export default secondReducer