import Link from "next/link";
import SubContainer from '../components/SubContainer'
import ReactMarkdown from "react-markdown";

function BlogPage(props) {
  const { frontmatter, content, children } = props;

  var sectionLink = "/blog#" + frontmatter.section.replace(/ /g, "_");

  return (
    <SubContainer>
      <div className="m-0.5 md:mx-1 lg:mx-1.5 xl:mx-2.5">
        <div className="text-center">
          <Link href={sectionLink}>
            <a className="markdown-subtitle text-orange-300 hover:underline">{frontmatter.section}</a>
          </Link>
          <h2 className="markdown-title">{frontmatter.title}</h2>
          <h3 className="markdown-subtitle">By {frontmatter.author}</h3>
          <h4 className="markdown-subtitle text-pacific-800">{frontmatter.date}</h4>
        </div>

        {/* <div className="h-2 lg:h-4 xl:h-4"></div> */}
        <article className="markdown mt-2">
          <ReactMarkdown
            escapeHtml={false}
            source={content} />
        </article>
      </div>
    </SubContainer>
  )
}

export default BlogPage;