import Head from 'next/head'
import Layout from '../../components/structural/Layout'
import SubContainer from '../../components/common/SubContainer'
import BlogCard from "../../components/blogpage/BlogCard"
import Loader from '../../components/common/Loader'
import React, { useState, useEffect } from 'react'

function BlogGrid(props) {
  return (
    <div className="grid gap-3 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 justify-items-center">
      {props.children}
    </div>
  )
}

function BlogDirectory() {
  const [directory, setDirectory] = useState({
    'posts': [],
    'team': [],
    'loading': true,
  });
  const preUrl = 'https://cca-cors.herokuapp.com/';

  useEffect(() => {
    const url = preUrl + 'https://api.npoint.io/850e1c65335d4e8a0fe1';
    fetch((url), {
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'X-Requested-With': 'XMLHttpRequest'
      }
    }).then(function (response) {
      console.log("RES", response);
      return response.json();
    })
      .then(function (jsonData) {
        var postsData = jsonData.posts;
        var teamData = jsonData.team;
        setDirectory({ 'posts': postsData, 'team': teamData, 'loading': false });
      });
  }, [])

  function getNameFromID(ID) {
    for (var i = 0; i < directory.team.length; i++) {
      if (directory.team[i].id == ID) {
        return directory.team[i].name;
      }
    }
  }


  return (
    <Layout id="Blog" index="1">
      <div className="flex flex-col w-full max-w-7xl">

        <SubContainer title="CCA Basics Collection">
          {directory.loading && <Loader loading={directory.loading} />}
          {!directory.loading &&
            <BlogGrid>
              {directory.posts.map((post) => {
                if (post.section == "CCA Basics") {
                  return <BlogCard
                    title={post.title}
                    date={post.date}
                    post={post.path}
                    section={post.section}
                    author={getNameFromID(post.author)}
                  />
                }
              })}
            </BlogGrid>
          }
        </SubContainer>

        <SubContainer title="Deep Dive Collection">
          {directory.loading && <Loader loading={directory.loading} />}
          {!directory.loading &&
            <BlogGrid>
              {directory.posts.map((post) => {
                if (post.section == "Do's & Don'ts") {
                  return <BlogCard
                    title={post.title}
                    date={post.date}
                    post={post.path}
                    section={post.section}
                    author={getNameFromID(post.author)}
                  />
                }
              })}
            </BlogGrid>
          }
        </SubContainer>

        <SubContainer title="Do's & Don'ts Collection">
          {directory.loading && <Loader loading={directory.loading} />}
          {!directory.loading &&
            <BlogGrid>
              {directory.posts.map((post) => {
                if (post.section == "Do's & Don'ts") {
                  return <BlogCard
                    title={post.title}
                    date={post.date}
                    post={post.path}
                    section={post.section}
                    author={getNameFromID(post.author)}
                  />
                }
              })}
            </BlogGrid>
          }
        </SubContainer>

        <SubContainer title="CCA Spotlight Collection">
          {directory.loading && <Loader loading={directory.loading} />}
          {!directory.loading &&
            <BlogGrid>
              {directory.posts.map((post) => {
                if (post.section == "CCA Spotlight") {
                  return <BlogCard
                    title={post.title}
                    date={post.date}
                    post={post.path}
                    section={post.section}
                    author={getNameFromID(post.author)}
                  />
                }
              })}
            </BlogGrid>
          }
        </SubContainer>
      </div>
    </Layout>
  )
}

export default BlogDirectory;