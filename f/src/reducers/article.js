function article(state={
    data:[],
    loading:true
},action){
    switch (action.type){
        case 'ARTICLE_UPDATE':
            return{
                data:state.data,
                loading:true
            }
        case 'ARTICLE_UPDATE_SUCC':
            return {
                data:action.data,
                loading:false
            }
        case 'ARTICLE_UPDATE_ERR':
            return {
                data:action.data,
                loading:false
            }
        default:
            return state
    }
}
export default article;