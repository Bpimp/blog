import React from 'react';
import {Form,Input,Button} from 'antd';
import Editor from 'for-editor';
import api from '../../api/api';

class MdEditor extends React.Component{
    constructor(){
        super();
        this.state={
            value:''
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
                .then(res=>{
                    
                })
            }
        })
        .catch(err=>{
            console.log(err)
        })
    }
    render(){
        return (
            <div className="editor">
                <Form
                    onFinish={this.onFinish}
                >
                    <Form.Item 
                        name='title'
                        rules={[{
                            required:true,
                            message:"标题不能为空"
                        }]}    
                    >
                        <Input className='title' type='text' placeholder='请输入标题...'/>
                    </Form.Item>
                    <Form.Item name='content'>
                        <Editor
                            value={this.state.value}
                            onChange={this.handleChange}
                        />
                    </Form.Item>
                    <Form.Item>
                        <Button htmlType='submit'>
                            Submit
                        </Button>
                    </Form.Item>
                </Form>
            </div>
        )
    }
}
export default MdEditor;