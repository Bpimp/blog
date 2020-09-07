import React from 'react';
import {withRouter} from 'react-router-dom';
import {Form,Input,Button,Select,Divider,message } from 'antd';
import Editor from 'for-editor';
import { PlusOutlined } from '@ant-design/icons';
import api from '../../api/api';

const {Option}=Select;
class MdEditor extends React.Component{
    constructor(){
        super();
        this.state={
            value:'',
            name:'',
            tabs:[]
        }
    }
    onNameChange=event=>{
        this.setState({
            name:event.target.value
        })
    }
    addTab=()=>{
        const{name,tabs}=this.state;
        this.setState({
            tabs:[...tabs,{tab:name}],
            name:''
        })
    }
    handleChange=value=>{
        this.setState({value})
    }
    onFinish=values=>{
        api.checkArticleName({title:values.title})
        .then(res=>{
            const author=sessionStorage.getItem('author');
            values=Object.assign({},values,{author})
            console.log(values)
            if(res.code===2){
                api.addArticle({values})
                .then(res=>{
                   if(res.code===2){
                    message.success('添加成功',2).then(()=>{
                        this.props.history.push('/admin')
                    })
                   }
                })
            }
            else{
                alert('标题重复')
            }
        })
        .catch(err=>{
            console.log(err)
        })
    }
    componentDidMount(){
        const {state}=this.props.location;
        console.log(state)
        api.getCategory()
        .then(res=>{
            this.setState({
                tabs:res.data
            })
        })
        state&&api.getDetails(state)
        .then(res=>{
            this.setState({
                name:res.data.tab,
                value:res.data.content
            })
        })
    }
    render(){
        let {name,tabs,value}=this.state;
        return (
            <div className="editor">
                <Form
                    onFinish={this.onFinish}
                >
                    <Form.Item className="select" name="tab">
                    <Select 
                        placeholder="分类" 
                        bordered={false}
                        dropdownClassName="drop"
                        dropdownRender={menu=>(
                            <div>
                                {menu}
                                <Divider style={{margin:'4px 0'}}/>
                                <div style={{display:'flex',padding:8}}>
                                    <Input style={{flex:'auto'}} value={name} onChange={this.onNameChange}/>
                                    <span style={{flex:'none',padding:'8px',display:'block',cursor:'pointer',color:'#007FFF'}} onClick={this.addTab}>
                                        <PlusOutlined/>Add item
                                    </span>    
                                </div>
                            </div>
                        )}
                    >
                        {tabs.map(item=>(
                            <Option value={item.tab} key={item.tab}>{item.tab}</Option>
                        ))}
                    </Select>
                    </Form.Item>
                    <Form.Item className="submit">
                        <Button htmlType="Submit">发布</Button>
                    </Form.Item>
                    <Form.Item 
                        className='title'
                        name='title'
                        rules={[{
                            required:true,
                            message:"标题不能为空"
                        }]}    
                    >
                        <Input type='text' placeholder='请输入标题...'/>
                    </Form.Item>
                    <Form.Item 
                        name='content'
                        className='mdEditor'    
                    >
                        <Editor
                            style={{borderRadius:0,height:'706px'}}
                            value={value}
                            onChange={this.handleChange}
                        /> 
                    </Form.Item>
                </Form>
            </div>
        )
    }
}
export default withRouter(MdEditor);