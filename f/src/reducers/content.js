function content(state={
    data:{
        title:'',
        create_time:'',
        content:'',
        tab:'',
        comments:0,
        visits:0
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
        case 'ADD_VISITS':
            return {
                visits:state.visits+1
            }
        default:
            return state
    }
}
export default content;