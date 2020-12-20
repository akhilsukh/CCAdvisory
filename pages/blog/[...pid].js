import Head from 'next/head'
import Layout from '../../components/Layout'
import BlogPage from '../../components/BlogPage'
import React from 'react'
import fs from "fs";
import path from "path";
import matter from "gray-matter";

function BlogView({ content, frontmatter }) {

  return (
    <Layout id={frontmatter.title}>
      <div className="flex flex-col w-full max-w-7xl">
        <BlogPage frontmatter={frontmatter} content={content} />
      </div>
    </Layout>
  )
}

export default BlogView;


export async function getStaticPaths() {
  var glob = require('glob');
  var options = {
    cwd: 'posts',
    matchBase: true,
  }
  const files = glob.sync("*.md", options);

  for(var i = 0; i < files.length; i++) {
    //removes all but the last '/'
    while(files[i].split("/").length - 1 >= 2){
      files[i] = files[i].substring(files[i].indexOf('/')+1);
    }

    //removes .md extention
    files[i] = files[i].replace(".md", "");
  }

  const paths = files.map((filename) => ({
    params: {
      pid: [filename.split('/')[0], filename.split('/')[1]],
    },
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params: { pid } }) {
  const markdownWithMetadata = fs
    .readFileSync(path.join("posts/", pid[0], pid[1] + ".md"))
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