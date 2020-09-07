import React from 'react';
import {withRouter} from 'react-router-dom';
import List from '../../components/admin/list';

class DataList extends React.Component{
    render(){
        const {id}=this.props.match.params;
        return (
                <List key={id} id={id}/>
        )
    }
}
export default withRouter(DataList);