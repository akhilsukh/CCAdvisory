import Link from "next/link"
import SubContainer from '../common/SubContainer'
import ReactMarkdown from "react-markdown";
import Loader from "../../components/common/Loader";
import Markdown from 'markdown-to-jsx';

function BlogView(props) {
  const { metadata, author, content, loading} = props;

  // Convert post date to format: Month day, Year
  const options = { year: "numeric", month: "short", day: "numeric" };
  const formattedDate = new Date(metadata.date).toLocaleDateString("en-US", options);

  return (
    <SubContainer>
      {loading && <Loader loading={loading} />}
      {!loading && <div className="m-0.5 md:mx-1 lg:mx-1.5 xl:mx-2.5">
        <div className="text-center">
          <a className="markdown-subtitle text-orange-300 hover:underline">{metadata.section}</a>
          <h2 className="markdown-title">{metadata.title}</h2>
          <h3 className="markdown-subtitle">By {author.name}</h3>
          <h4 className="markdown-subtitle text-pacific-800">{formattedDate}</h4>
        </div>



        {/*<div dangerouslySetInnerHTML={md.render(content)} />*/}
        <article className="markdown mt-2">
          <Markdown>
            {content}
          </Markdown>
        </article>

      </div>}
    </SubContainer>
  )
}

export default BlogView;