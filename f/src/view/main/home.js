import React from 'react';
import Aside from '../../components/main/sidebar/index';
import ArtList from '../../components/main/list';

class Home extends React.Component{
    render(){
        const tab=this.props.match.params.id;
        return (
            <main className="clear">
                <Aside/>
                <div className="content">
                    <ArtList
                        tab={tab}
                    />
                </div>
            </main>
        )
    }
}
export default Home;