import React from 'react';
import {Form,Input,Button,Select} from 'antd';
import Editor from 'for-editor';
import api from '../../api/api';

class MdEditor extends React.Component{
    constructor(){
        super();
        this.state={
            value:'',
            tab:[]
        }
    }
    handleChange=value=>{
        this.setState({value})
    }
    onFinish=values=>{
        api.checkArticleName({title:values.title})
        .then(res=>{
            if(res.code===2){
                api.addArticle({values})
            }
        })
        .catch(err=>{
            console.log(err)
        })
    }
    componentDidMount(){
        api.getTab()
        .then(res=>{
            console.log(res)
        })
    }
    render(){
        return (
            <div className="editor">
                <Form
                    onFinish={this.onFinish}
                >
                    <Form.Item className="select" name="tab">
                        <Select placeholder="分类" bordered={false}>
                            <Select.Option value="demo">Demo</Select.Option>
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
                            value={this.state.value}
                            onChange={this.handleChange}
                        />
                    </Form.Item>
                </Form>
            </div>
        )
    }
}
export default MdEditor;