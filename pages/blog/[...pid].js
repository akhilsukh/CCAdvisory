import Head from 'next/head'
import Layout from '../../components/structural/Layout'
import SubContainer from '../../components/common/SubContainer'
import Link from "next/link"
import React, { useState, useEffect } from 'react'
import Router, { useRouter } from 'next/router'
import ReactMarkdown from "react-markdown"
import matter from "gray-matter"
import BlogView from "../../components/blogpage/BlogView"


function Blog({ content, frontmatter }) {
  const { pid } = useRouter().query;

  const [article, setArticle] = useState({
    'metadata': {
      'title': '...'
    },
    'content': null,
    'author': null,
    'loading': true
  });

  var state = {};

  useEffect(() => {
    const preUrl = 'https://cca-cors.herokuapp.com/';
    const url1 = preUrl + 'https://cdn.statically.io/gh/akhilsukh01/CCAdvisory/assets/posts/';
    const url2 = preUrl + 'https://cdn.statically.io/gh/akhilsukh01/CCAdvisory/assets/data/data.json';

    if (pid) {
      var formattedpid = pid.toString().replace(",", "/");
      var path = (url1 + formattedpid + ".md");
      fetch(path, {
        headers: {
          'Content-Type': 'text/plain',
          'Accept': 'text/plain',
        }
      }).then(function (response) {
        if (response.status == 404) {
          Router.push('/blog');
        }
        return response.text();
      }).then(function (textData) {
        const { data, content } = matter(textData);
        state.content = content;

        return fetch((url2), {
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
          }
        });
      }).then(function (response) {
        return response.json();
      }).then(function (response) {       
        for (var i = 0; i < response.posts.length; i++) {
          if(response.posts[i].path == formattedpid){
            state.metadata = response.posts[i];
            break;
          }
        }

        return response;
      }).then(function (response) {
        for (var i = 0; i < response.team.length; i++) {
          if(response.team[i].id == state.metadata.author){
            state.author = response.team[i];
            state.loading = false;
            setArticle(state);
          }
        }
      })
    }
  }, [pid])

  return (
    <Layout id={article.metadata.title}>
      <div className="flex flex-col w-full max-w-7xl">
        <BlogView metadata={article.metadata} author={article.author} content={article.content} loading={article.loading}/>
      </div>
    </Layout>
  )
}

export default Blog;