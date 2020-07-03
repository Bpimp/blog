let ininState={
    showMask:false,
    isLog:null
}

function user(state=ininState,action){
    switch (action.type){
        case "TO_LOG":
            return Object.assign({},state,{isLog:action.isLog})
        default:
            return state
    }
    
}
export default user;