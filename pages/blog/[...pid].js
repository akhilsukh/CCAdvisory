import Head from 'next/head'
import Layout from '../../components/structural/Layout'
import SubContainer from '../../components/common/SubContainer'
import Link from "next/link";
import React, { useState, useEffect } from 'react';
import { useRouter, Router } from 'next/router'
import ReactMarkdown from "react-markdown";
import matter from "gray-matter";
import Loader from "../../components/common/Loader";

function BlogView({ content, frontmatter }) {
  const { pid } = useRouter().query;

  const [post, setPost] = useState({
    'frontmatter': {
      'title': '...',
      // 'author': '...',
      // 'section': '...',
      // 'date': Date.now().toString()
    },
    'data': null,
    'loading': true
  });

  // const [post, setPost] = useState({});

  useEffect(() => {
    const preUrl = 'https://cca-cors.herokuapp.com/';
    const url = preUrl +'https://cdn.statically.io/gh/akhilsukh01/CCAdvisory/assets/posts/';
    // const basePath = 'https://raw.githubusercontent.com/akhilsukh01/CCAdvisory/assets/posts/'

    if (pid) {
      var path = (url + pid[0] + "/" + pid[1] + ".md");
      fetch(path, {
        headers: {
          'Content-Type': 'text/plain',
          'Accept': 'text/plain',
        }
      }).then(function (response) {
        // console.log("RES", response);
        // console.log("STATUS", response.status);
        if (response.status == 404) {
          Router.push('/blog');
        }
        return response.text();
      }).then(function (textData) {
        // console.log("MD", textData);
        const { data, content } = matter(textData);

        // Convert post date to format: Month day, Year
        const options = { year: "numeric", month: "long", day: "numeric" };
        const formattedDate = (data.date ? data.date.toLocaleDateString("en-US", options) : "...");

        const frontmatter = {
          ...data,
          title: `${data.title}`,
          author: `${data.author}`,
          section: `${data.section}`,
          date: `${formattedDate}`,
        };

        setPost({ frontmatter, content , 'loading': false });
      });
    }
  }, [pid])

  return (
    <Layout id={post.frontmatter.title}>
      <div className="flex flex-col w-full max-w-7xl">
        <SubContainer>
          {!post.loading && <div className="m-0.5 md:mx-1 lg:mx-1.5 xl:mx-2.5">
            <div className="text-center">
              {/* <Link href={post.frontmatter.section}> */}
              <a className="markdown-subtitle text-orange-300 hover:underline">{post.frontmatter.section}</a>
              {/* </Link> */}
              <h2 className="markdown-title">{post.frontmatter.title}</h2>
              <h3 className="markdown-subtitle">By {post.frontmatter.author}</h3>
              <h4 className="markdown-subtitle text-pacific-800">{post.frontmatter.date}</h4>
            </div>
            <article className="markdown mt-2">
              <ReactMarkdown
                escapeHtml={false}
                source={post.content} />
            </article>
          </div>}

          {post.loading && <Loader loading={post.loading}/>}

        </SubContainer>
      </div>
    </Layout>
  )
}

export default BlogView;


// export async function getStaticPaths() {
//   var glob = require('glob');
//   var options = {
//     cwd: 'posts',
//     matchBase: true,
//   }
//   const files = glob.sync("*.md", options);

//   for(var i = 0; i < files.length; i++) {
//     //removes all but the last '/'
//     while(files[i].split("/").length - 1 >= 2){
//       files[i] = files[i].substring(files[i].indexOf('/')+1);
//     }

//     //removes .md extention
//     files[i] = files[i].replace(".md", "");
//   }

//   const paths = files.map((filename) => ({
//     params: {
//       pid: [filename.split('/')[0], filename.split('/')[1]],
//     },
//   }));

//   return {
//     paths,
//     fallback: false,
//   };
// }

// export async function getStaticProps({ params: { pid } }) {
//   const markdownWithMetadata = fs
//     .readFileSync(path.join("posts/", pid[0], pid[1] + ".md"))
//     .toString();

//     const { data, content } = matter(markdownWithMetadata);

//   // Convert post date to format: Month day, Year
//   const options = { year: "numeric", month: "long", day: "numeric" };
//   const formattedDate = data.date.toLocaleDateString("en-US", options);

//   const frontmatter = {
//     ...data,
//     title: `${data.title}`,
//     author: `${data.author}`,
//     section: `${data.section}`,
//     date: `${formattedDate}`,
//   };

//   return {
//     props: {
//       frontmatter,
//       content: content,
//     },
//   };
// }