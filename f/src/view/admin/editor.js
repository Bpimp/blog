import React,{createRef} from 'react';
import {withRouter} from 'react-router-dom';
import {Form,Input,Button,Select,Divider,message } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import api from '../../api/api';
import Editor from 'for-editor';

const {Option}=Select;
class MdEditor extends React.Component{
    constructor(props){
        super(props);
        this.form=createRef()
        this.state={
            content:'',
            name:'',
            tabs:[],
            id:'',
            title:'',
            tab:'分类'
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
        this.setState({content:value})
    }
    onFinish=values=>{
        const {id}=this.state;
        if(id){
            values._id=id;
            api.edit({values})
            .then(res=>{
                if(res.code===2){
                    message.success('修改成功',2).then(()=>{
                        this.props.history.push('/admin/list/article')
                    })
                }
            })
            return ;
        }
        api.checkArticleName({title:values.title})
        .then(res=>{
            const author=sessionStorage.getItem('author');
            values=Object.assign({},values,{author})
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
        if(state){
            this.form.current.setFieldsValue({
                title:state.title,
                tab:state.tab,
                content:state.content,
                id:state._id
            })
            this.setState({
                title:state.title,
                tab:state.tab,
                content:state.content,
                id:state._id
            })
        }
        api.getCategory()
        .then(res=>{
            this.setState({
                tabs:res.data
            })
        })
    }
    render(){
        const {state}=this.props.location;
        const {tabs}=this.state;
        const {name,content,title,tab}=state?state:this.state;
        return (
                <Form
                    ref={this.form}
                    className="editor"
                    onFinish={this.onFinish}
                >
                    <Form.Item className="select" name="tab">
                        <Select 
                            placeholder={tab} 
                            bordered={false}
                            dropdownClassName="drop"
                            dropdownRender={menu=>{
                                return (
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
                            )}}
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
                        <Input type='text' value={title} placeholder='请输入标题...'/>
                    </Form.Item>
                    <Form.Item 
                        name='content'
                        className='mdEditor' 
                    >
                        <Editor
                            style={{borderRadius:0,height:'706px'}}
                            value={content}
                            onChange={this.handleChange}
                        />                  
                    </Form.Item>
                </Form>
        )
    }
}
export default withRouter(MdEditor);