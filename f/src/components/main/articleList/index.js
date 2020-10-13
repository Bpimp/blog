import React from 'react';
import {connect} from 'react-redux';
import {List} from 'antd';
import api from '../../../api/api';
import ListItem from './listItem';


class ArtList extends React.Component{
    constructor(props){
        super(props)
        this.getList(this.props.tab)
    }
    getList(tab){
        this.props.dispatch(dispatch=>{
            dispatch({
                type:'ARTICLE_UPDATE'
            })
        })
        this.props.dispatch(dispatch=>{
            api.getArticle(tab)
            .then(res=>{
                dispatch({
                    type:'ARTICLE_UPDATE_SUCC',
                    data:res.data
                })
            })
            .catch(err=>{
                dispatch({
                    type:'ARTICLE_UPDATE_ERR',
                    data:err
                })
            })
        })
    }
    shouldComponentUpdate(nextProps,nextState){
        if(this.props.tab!==nextProps.tab){
            this.getList(nextProps.tab)
            return false
        }
        return true
    }
    render(){
        const {data,loading}=this.props;
        return (
            <List
                loading={loading}
                itemLayout='vertical'
                dataSource={data}
                renderItem={item=><ListItem item={item}/>}
            >
            </List>
        )
    }
}
export default connect(state=>state.article)(ArtList);