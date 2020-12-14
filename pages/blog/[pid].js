import Head from 'next/head'
import Layout from '../../components/Layout'
import BlogPage from '../../components/BlogPage'
import React from 'react'
import fs from "fs";
import path from "path";
import matter from "gray-matter";

function BlogView({ content, frontmatter }) {

  return (
    <Layout>
      <div className="flex flex-col w-full max-w-7xl">
        <BlogPage frontmatter={frontmatter} content={content} />
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
    section: `${data.section}`,
    date: `${formattedDate}`,
  };

  return {
    props: {
      frontmatter,
      content: content,
    },
  };
}