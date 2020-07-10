let ininState={
    data:{
        showMask:false,
        isLog:null,
        isAdmin:false
    }
}
function user(state=ininState,action){
    switch (action.type){
        case "TO_LOG":
            return Object.assign({},state,action.data);
        case "CLOSE_MASK":
            return Object.assign({},state,{showMask:action.showMask});
        default:
            return state
    }
    
}
export default user;