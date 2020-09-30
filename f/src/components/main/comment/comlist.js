import React from 'react';
import {List,Modal,Form,Input,Button} from 'antd';
import Comitem from './comItem';

class ComList extends React.Component{
    constructor(){
        super();
        this.state={
            sec_reply:[],
            iseditor:false,
            e:null
        }
    }
    showeditor=(e)=>{
        this.setState({
            e:e.target.parentNode.parentNode.parentNode,
            iseditor:!this.state.iseditor
        })
    }
    render(){
        const {comments}=this.props;
        const {sec_reply,e,iseditor}=this.state;
        return (
            <>
            <List
            dataSource={comments}
            itemLayout='horizontal'
            renderItem={props=><Comitem 
                {...props}
                id={comments._id}
                showeditor={this.showeditor}
            />}
        >
            <div className="sec_com">
                {sec_reply.length>0&&<List
                dataSource={sec_reply}
                itemLayout='horizontal'
                renderItem={props=><Comitem 
                    {...props}
                    showeditor={this.showeditor}
                    />}
                />}
            </div>
        </List>
        {iseditor&&<Modal
            mask={false}
            destroyOnClose
            closable={false}
            visible
            getContainer={()=>e}
            width='95%'
            footer={null}
        >
            <Form preserve="false">
                <Form.Item>
                    <Input type='text' placeholder="输入评论..." row={1}/>
                </Form.Item>
                <Form.Item>
                    <Button type='primary'>评论</Button>
                </Form.Item>
            </Form>
        </Modal>}
        </>
        )
    }
}
export default ComList;