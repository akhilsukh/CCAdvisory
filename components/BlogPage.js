import Link from "next/link";
import SubContainer from '../components/SubContainer'
import ReactMarkdown from "react-markdown";
import Typography from 'typography'
import kirkhamTheme from 'typography-theme-kirkham'

const typography = new Typography(kirkhamTheme)

function BlogPage(props) {
    const {title, author, date, wordcount, content , children} = props;
    
    return (
        <SubContainer>
            <div className="m-6">
                <h2 className="subcontainer-text">{title}</h2>
                <div className="h-4"></div>
                <h3 className="text-lg">{author}</h3>
                <div className="flex justify-between">
                    <h4 className="">{date}</h4>
                    <h4 className="">250 words</h4>
                </div>
                <div className="h-8"></div>
                <article className="markdown">
                    <ReactMarkdown 
                        escapeHtml={false} 
                        source={content} />
                </article>
            </div>
        </SubContainer>
    )
}

export default BlogPage;