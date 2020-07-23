import React from 'react';
import {Timeline} from 'antd';
import Aside from '../../components/main/sidebar/index';

class TimeLine extends React.Component{
    render(){
        return (
                <main className="clear">
                    <Aside/>
                    <div className="content">
                        <Timeline mode={'left'}>
                            <Timeline.Item label="2015-09-01">创建博客</Timeline.Item>
                            <Timeline.Item label="2015-09-01 09:12:11">Solve initial network problems</Timeline.Item>
                            <Timeline.Item>Technical testing</Timeline.Item>
                            <Timeline.Item label="2015-09-01 09:12:11">Network problems being solved</Timeline.Item>
                        </Timeline>
                    </div>
                </main>
        )
    }
}
export default TimeLine;