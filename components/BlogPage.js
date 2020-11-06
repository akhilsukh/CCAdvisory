import Link from "next/link";
import SubContainer from '../components/SubContainer'
import ReactMarkdown from "react-markdown/with-html";

function BlogPage(props) {
    const {title, author, date, wordcount, img , children} = props;
    
    return (
        <SubContainer>
            <div className="mx-8">
                <h2 className="subcontainer-text">{title}</h2>
                <div className="h-4 "></div>
                <h3 className="text-lg">{author}</h3>
                <div className="flex justify-between">
                    <h4 className="">{date}</h4>
                    <h4 className="">250 words</h4>
                </div>
                <div className="h-4 "></div>
                {props.children}
            </div>
        </SubContainer>
    )
}

export default BlogPage;