import React from 'react';
import {connect} from 'react-redux';
import {List} from 'antd';
import api from '../../../api/api';
import ListItem from './listitem';
import WindowScroller from 'react-virtualized/dist/commonjs/WindowScroller';
import AutoSizer from 'react-virtualized/dist/commonjs/AutoSizer';
import VList from 'react-virtualized/dist/commonjs/List';
import InfiniteLoader from 'react-virtualized/dist/commonjs/InfiniteLoader';

class ArtList extends React.Component{
    constructor(props){
        super(props)
        this.getList(this.props.tab)
    }
    loadedRowsMap={};
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
    handleInfiniteOnLoad=({startIndex,stopIndex})=>{
        for(let i=startIndex;i<=stopIndex;i++){
            this.loadedRowsMap[i]=1;
        }
        this.getList(this.props.tab)
    }
    shouldComponentUpdate(nextProps,nextState){
        if(this.props.tab!==nextProps.tab){
            this.getList(nextProps.tab)
            return false
        }
        return true
    }
    isRowLoaded=({index})=>!!this.loadedRowsMap[index];
    renderItem=({index,key,style})=>{
        const item=this.props.data[index]
        return (
            <ListItem
                item={item}
                key={key}
                style={style}
            />
        )
    }
    render(){
        const {data,loading}=this.props;
        const vlist=({height,isScrolling,scrollTop,onRowsRendered,width})=>(
            <VList
                autoHeight
                height={height}
                isScrolling={isScrolling}
                overscanRowCount={2}
                rowCount={data.length}
                rowHeight={130}
                rowRenderer={this.renderItem}
                onRowsRendered={onRowsRendered}
                scrollTop={scrollTop}
                width={width}
            />
        )
        const autoSize=({height,isScrolling,scrollTop,onRowsRendered})=>(
            <AutoSizer disableHeight>
                {({width})=>
                vlist({height,isScrolling,scrollTop,onRowsRendered,width})
                }
            </AutoSizer>
        )
        const infiniteLoader=({height,isScrolling,scrollTop})=>(
            <InfiniteLoader
                isRowLoaded={this.isRowLoaded}
                loadMoreRows={this.handleInfiniteOnLoad}
                rowCount={data.length}
            >
                {({onRowsRendered})=>
                    autoSize({
                        height,isScrolling,scrollTop,onRowsRendered
                    })
                }
            </InfiniteLoader>
        )
        return (
            <List 
                loading={loading}
            >
                {data.length>0&&<WindowScroller>{infiniteLoader}</WindowScroller>}
            </List>
        )
    }
}
export default connect(state=>state.article)(ArtList);