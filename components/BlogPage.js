import Link from "next/link";
import SubContainer from '../components/SubContainer'
import ReactMarkdown from "react-markdown";

function BlogPage(props) {
    const { frontmatter, content, children } = props;

    var sectionLink = "/blog#" + frontmatter.section.replace(/ /g, "_");

    return (
        <div className="border-2 border-teal-700 rounded-lg block my-8 p-1 lg:p-4 xl:p-4">
            <div className="m-6">
                <div className="text-center">
                    <Link href={sectionLink}>
                        <a className="markdown-subtitle text-orange-300 hover:underline">{frontmatter.section}</a>
                    </Link>
                    <h2 className="markdown-title">{frontmatter.title}</h2>
                    <h3 className="markdown-subtitle">By {frontmatter.author}</h3>
                    <h4 className="markdown-subtitle text-gray-200">{frontmatter.date}</h4>
                </div>

                <div className="h-2 lg:h-4 xl:h-4"></div>
                <article className="markdown">
                    <ReactMarkdown
                        escapeHtml={false}
                        source={content} />
                </article>
            </div>
        </div>
    )
}

export default BlogPage;