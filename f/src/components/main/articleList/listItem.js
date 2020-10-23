import React from 'react';
import {Link} from 'react-router-dom';
import {List,Space, message} from 'antd';
import {MessageOutlined, LikeFilled,LikeOutlined} from '@ant-design/icons';
import api from '../../../api/api';

const IconText=({icon,text})=>(
    <Space>
        {React.createElement(icon)}
        {text}
    </Space>
)
class ListItem extends React.Component{
    constructor(){
        super();
        this.state={
            action:false,
            likes:0
        }
    }
    praise=(id)=>{
        const {action}=this.state;
        const userId=sessionStorage.getItem('userId');
        if(!userId){
            message.warning('请先登录');
            return ;
        }
        action?this.setState({action:false,likes:this.state.likes-1}):this.setState({action:true,likes:this.state.likes+1})
        if(this.timer) clearTimeout(this.timer)
        this.timer=setTimeout(()=>{
        api.addpraise({article_id:id,userId,action:!action})
            .then(res=>{
                console.log(res)
            })
        },1000) 
    }
    componentDidMount(){
        const userId=sessionStorage.getItem('userId');
        this.setState({
            action:this.props.item.praise.includes(userId),
            likes:this.props.item.praise.length
        })
    }
    render(){
        const {action,likes}=this.state;
        const {item,style}=this.props;
        return (
            <List.Item 
                key={item._id}
                style={style}
                actions={[
                    <span onClick={()=>this.praise(item._id)}>
                        <span style={{marginRight:'8px'}}><IconText icon={action?LikeFilled:LikeOutlined}/></span>
                        <span>{likes}</span>
                    </span>,
                    <Link to={`/content/${item._id}`}><IconText icon={MessageOutlined} text={`${item.comments}`} key='list-vertical-message'/></Link>
                ]}
            >
                <List.Item.Meta
                    title={<Link to={`/content/${item._id}`}>{item.title}</Link>}
                    description={
                        <ul>
                            <li>{item.author}</li>
                            <li>{`${item.create_time.split('T')[0]} ${item.create_time.split('T')[1].slice(0,8)}`}</li>
                            <li><Link to={`/index/${item.tab}`}>{item.tab}</Link></li>
                        </ul>
                    }
                >{item.content}</List.Item.Meta>
            </List.Item>
        )
    }
}
export default ListItem;