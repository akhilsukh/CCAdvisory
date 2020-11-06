import Head from 'next/head'
import Layout from '../../components/Layout'
import SubContainer from '../../components/SubContainer'
import BlogPage from '../../components/BlogPage'
import React from 'react'
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { useRouter } from 'next/router'
import ReactMarkdown from "react-markdown/with-html";

function BlogView({ content, frontmatter }) {
 
  return (
    <Layout>
      <div className="flex flex-col lg:w-3/5 xl:w-3/5 text-white">
        <BlogPage title={frontmatter.title} author={frontmatter.author} date={frontmatter.date} content={content} />
      </div>
    </Layout>
  )
}

export default BlogView;


export async function getStaticPaths() {
  const files = fs.readdirSync("posts/");

  const paths = files.map((filename) => ({
    params: {
      pid: filename.replace(".md", ""),
    },
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params: { pid } }) {
   const markdownWithMetadata = fs
    .readFileSync(path.join("posts/", pid + ".md"))
    .toString();

  const { data, content } = matter(markdownWithMetadata);

  // Convert post date to format: Month day, Year
  const options = { year: "numeric", month: "long", day: "numeric" };
  const formattedDate = data.date.toLocaleDateString("en-US", options);

  const frontmatter = {
    ...data,
    title: `${data.title}`,
    author: `${data.author}`,
    date: `${formattedDate}`,
  };

  return {
    props: {
      frontmatter,
      content: content,
    },
  };
}