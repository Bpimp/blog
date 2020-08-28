function content(state={
    data:{
        title:'',
        create_time:'',
        content:'',
        tab:''
    },
    loading:true
},action){
    switch(action.type){
        case 'CONTENT_UPDATE':
            return {
                data:state.data,
                loading:true
            }
        case 'CONTENT_UPDATE_SUCC':
            return {
                data:action.data,
                loading:false
            }
        default:
            return state
    }
}
export default content;