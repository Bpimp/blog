import React from 'react';
import ReactDOM from 'react-dom';

const mask=document.querySelector('#mask');

class Mask extends React.Component{
    constructor(){
        super();
        this.el=document.createElement('div')
    }
    componentDidMount(){
        mask.appendChild(this.el)
    }
    componentWillUnmount(){
        mask.removeChild(this.el)
    }
    render(){
        return ReactDOM.createPortal(
            this.props.children,
            this.el
        )
    }
}
export default Mask;