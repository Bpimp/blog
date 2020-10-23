import React from 'react';
import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter';
import {javascript,jsx,typescript,css,scss} from 'react-syntax-highlighter/dist/esm/languages/prism';
import { a11yDark } from 'react-syntax-highlighter/dist/esm/styles/prism';

class CodeBlock extends React.Component{
    componentDidMount(){
        SyntaxHighlighter.registerLanguage('javascript',javascript);
        SyntaxHighlighter.registerLanguage('jsx',jsx);
        SyntaxHighlighter.registerLanguage('typescript',typescript);
        SyntaxHighlighter.registerLanguage('css',css);
        SyntaxHighlighter.registerLanguage('scss',scss);
    }
    render(){
        const {language,value}=this.props;
        return (
            <SyntaxHighlighter
                language={language}
                style={a11yDark  }
            >
                {value}
            </SyntaxHighlighter>
        )
    }
}
export default CodeBlock;