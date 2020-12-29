import Layout from "../components/structural/Layout"
import Link from "next/link"
import BlogCard from "../components/blogpage/BlogCard"
import { Container } from "postcss"
import SubContainer from "../components/common/SubContainer"
import React, { useState, useEffect } from 'react'
import Loader from '../components/common/Loader'

function QuickButton(props) {
  return (
    <div className="hover:cursor-pointer hover:underline hover:ring-pacific-800">
      <a href={props.link} target="_blank" rel="noreferrer">
        <button className="bg-gray-150 hover:bg-gray-200 hover:underline rounded-lg p-2 pt-3 ring-1 ring-gray-200 hover:ring-gray-800">
          <img className="w-7/12 m-auto" src={props.img}></img>
          <p className="mt-2 font-medium text-pacific-800 text-center text-xs">
            {props.title}
          </p>
        </button>
      </a>
    </div>
  );
}

function HeadlineSection() {
  const [headlines, setHeadlines] = useState({
    'entries': [],
    'loading': true
  });

  useEffect(() => {
    const preUrl = 'https://cca-cors.herokuapp.com/';
    // const url = 'https://cdn.statically.io/gh/akhilsukh01/CCAdvisory/assets/data/headlines.json'
    const url = 'https://raw.githubusercontent.com/akhilsukh01/CCAdvisory/assets/data/headlines.json'
    fetch((preUrl + url), {
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      }
    }).then(function (response) {
      return response.json();
    })
      .then(function (jsonData) {
        var headlineData = jsonData.headlines;
        setHeadlines({ 'entries': headlineData, 'loading': false });
      });
  }, [])

  return (
    <div className="flex flex-col">
      {headlines.loading && <Loader loading={headlines.loading} />}
      {!headlines.loading &&
        headlines.entries.map((hl, index) => {
          return <span className="headline flex flex-row" key={index}>
            <span> <p className="text-pacific-800 text-lg">{hl.date}</p>
              {hl.message}
            </span>
          </span>
        })}
    </div>
  )
}

function Home() {
  //preUrl not needed for image request
  // const url = 'https://cdn.statically.io/gh/akhilsukh01/CCAdvisory/assets/images/shortcuts/';
  const url = 'https://raw.githubusercontent.com/akhilsukh01/CCAdvisory/assets/images/shortcuts/'
  const shortcutAssist = "shortcut-assist.png";
  const shortcutUCApp = "shortcut-uc.png";
  const shortcutCommonApp = "shortcut-common.png";
  const shortcutMyCoalition = "shortcut-coalition.png";

  const [directory, setDirectory] = useState({
    'posts': [],
    'team': [],
    'loading': true,
  });
  const preUrl = 'https://cca-cors.herokuapp.com/';

  useEffect(() => {
    // const url = preUrl + 'https://cdn.statically.io/gh/akhilsukh01/CCAdvisory/assets/data/data.json';
    const url = preUrl + 'https://raw.githubusercontent.com/akhilsukh01/CCAdvisory/assets/data/data.json';

    fetch((url), {
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'X-Requested-With': 'XMLHttpRequest'
      }
    }).then(function (response) {
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
    <Layout id="Home" index="0">
      <div className="grid grid-cols-3 gap-5 mb-2">

        {/* alert bar */}
        <div className="alert col-span-3">
          <span>Our website is undergoing some major changes as we upgrade from our old platform. Sorry for any broken links or missing articles!</span>
        </div>

        {/* blog bar */}
        <div className="col-span-3">
          <div className="subcontainer">
            <h2 className="subcontainer-text">Featured Posts</h2>
            {directory.loading && <Loader loading={directory.loading} />}
            {!directory.loading &&
              <div className="grid gap-3 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-6 justify-items-center">
                {directory.posts.map((post, index) => {
                  if (post.frontpage == 1) {
                    return <BlogCard
                      key={index}
                      title={post.title}
                      date={post.date}
                      post={post.path}
                      section={post.section}
                      author={getNameFromID(post.author)}
                    />
                  }
                })}
              </div>
            }
          </div>
        </div>

        {/* headlines bar */}
        <div className="col-span-3 lg:col-span-2 xl:col-span-2">
          <div className="subcontainer h-full">
            <h2 className="subcontainer-text">Latest Headlines</h2>
            <HeadlineSection />
          </div>
        </div>

        {/* quick links bar */}
        <div className="col-span-3 lg:col-span-1 xl:col-span-1">
          <div className="subcontainer h-full">
            <h2 className="subcontainer-text">Quick Links</h2>
            <div className="grid grid-cols-3 md:grid-cols-6 lg:grid-cols-2 xl:grid-cols-3 gap-5 ">
              <QuickButton title="UC App" link="https://admission.universityofcalifornia.edu/apply-now.html" img={url + shortcutUCApp} />
              <QuickButton title="Common App" link="https://www.commonapp.org/" img={url + shortcutCommonApp} />
              <QuickButton title="MyCoalition" link="https://mycoalition.org" img={url + shortcutMyCoalition} />
              <QuickButton title="Assist.org" link="https://www.assist.org" img={url + shortcutAssist} />
              <QuickButton title="Assist.org" link="https://www.assist.org" img={url + shortcutAssist} />
              <QuickButton title="Assist.org" link="https://www.assist.org" img={url + shortcutAssist} />
            </div>
          </div>
        </div>

        {/* timeline bar */}
        <div className="col-span-3 lg:col-span-2 xl:col-span-2">
          <div className="subcontainer h-full">
            <h2 className="subcontainer-text">Steps to Success Timeline</h2>
            <p className="font-mono m-auto w-full text-center">[feature coming soon]</p>
          </div>
        </div>

        {/* newsletter and contact bar */}
        <div className="col-span-3 lg:col-span-1 xl:col-span-1">
          <div className="grid grid-col-1">
            <SubContainer title="Subscribe to our Weekly Newsletter">
              <div className="grid grid-cols-3 gap-2">
                <input type="email" placeholder="Email" className="px-3 py-2 rounded-md ring-1 ring-gray-300 focus:ring-pacific-900 outline-none col-span-2 lg:col-span-3 xl:col-span-2" />
                <button className="font-medium px-4 py-2 bg-gray-150 hover:bg-gray-200 ring-1 ring-gray-200 hover:ring-gray-800 text-sm text-pacific-800 rounded-md focus:outline-none col-span-1 lg:col-span-3 xl:col-span-1">Subscribe</button>
              </div>
            </SubContainer>
            <div className="subcontainer">
              <h2 className="subcontainer-text">Contact Us</h2>
              <div className="grid grid-cols-3 gap-2">
                <input type="email" placeholder="Email" className="px-3 py-2 rounded-md ring-1 ring-gray-300 focus:ring-pacific-900 outline-none col-span-2" />
                <button className="px-4 py-2 bg-gray-150 hover:bg-gray-200 ring-1 ring-gray-200 hover:ring-gray-800 text-sm font-medium text-pacific-800 rounded-md col-span-1 focus:outline-none">Send</button>
                <textarea cols="50" rows="4" placeholder="Message" className="px-3 py-2 h-16 rounded-md ring-1 ring-gray-300 focus:ring-pacific-900 outline-none col-span-3" />
              </div>
            </div>
          </div>
        </div>

        {/* <script defer src='https://static.cloudflareinsights.com/beacon.min.js' data-cf-beacon='{"token": "16f83f98f5d94f5b8f1e563dd9641161"}'></script> */}

      </div>
    </Layout>
  );
}

export default Home;
