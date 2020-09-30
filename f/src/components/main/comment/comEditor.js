import React from 'react';
import {Comment,Form,Input,Button} from 'antd';

const Editor =({onChange,onSubmit,value})=>(
    <>
        <Form.Item>
            <Input type='text' placeholder="输入评论..." row={1} onChange={onChange} value={value}/>
        </Form.Item>
        <Form.Item>
            <Button onClick={onSubmit} type='primary'>评论</Button>
        </Form.Item>
    </>
)
class ComEditor extends React.Component{
    render(){
        const {value,handleChange,handleSubmit}=this.props
        return (
            <Comment
                className='comeditor'
                content={
                    <Editor
                        onChange={handleChange}
                        onSubmit={handleSubmit}
                        value={value}
                    />
                }
            />
        )
    }
}
export default ComEditor;