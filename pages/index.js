import Layout from "../components/Layout";
import Link from "next/link";
import BlogCard from "../components/BlogCard";
import { Container } from "postcss";
import SubContainer from "../components/SubContainer";
import React, { useState, useEffect } from 'react';
import Loader from '../components/Loader'

function QuickButton(props) {
  return (
    <div className="hover:cursor-pointer hover:underline hover:ring-pacific-800">
      <a href={props.link} target="_blank" rel="noreferrer">
        <button className="bg-blue-100 hover:bg-blue-200 hover:underline rounded-lg p-2 pt-3 ring-2 ring-pacific-800">
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
    const url = 'https://cdn.statically.io/gh/akhilsukh01/CCAdvisory/assets/data/headlines.json'
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
  const url = 'https://cdn.statically.io/gh/akhilsukh01/CCAdvisory/assets/images/shortcuts/';
  const shortcutAssist = "shortcut-assist.png";
  const shortcutUCApp = "shortcut-uc.png";
  const shortcutCommonApp = "shortcut-common.png";

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
            <h2 className="subcontainer-text">Latest Blog Posts</h2>
            <div className="grid gap-3 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-6 justify-items-center">
              <BlogCard
                title="Top Ten: 2020 Edition"
                date="2020-07-10"
                section="CCA Basics"
                post="basics/topten-2020"
                author="Chris Hoeft"
              />
              <BlogCard
                title="DegreeWorks in 5 Minutes"
                date="2020-07-10"
                section="CCA Basics"
                post="basics/degreeworks"
                author="Barr Avrahamov"
              />
              <BlogCard
                title="Data Science @ Cal"
                date="2020-07-10"
                section="CCA Spotlight"
                post="spotlight/datascience-cal"
                author="Chris Hoeft"
              />
              <BlogCard
                title="All About Middle College"
                date="2020-07-10"
                section="Deep Dive"
                post="deepdives/middlecollege"
                author="Preethan Selva"
              />
              <BlogCard
                title="All About UC TAG"
                date="2020-07-10"
                section="Deep Dive"
                post="deepdives/uctag"
                author="Akhil Sukhthankar"
              />
              <BlogCard
                title="Computer Science @ Davis"
                date="2020-07-10"
                section="CCA Spotlight"
                post="spotlight/cs-davis"
                author="Chris Hoeft"
              />
            </div>
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
              <QuickButton title="Assist.org" link="https://www.assist.org" img={url + shortcutAssist} />
              <QuickButton title="UC Application" link="https://admission.universityofcalifornia.edu/apply-now.html" img={url + shortcutUCApp} />
              <QuickButton title="Common App" link="https://www.commonapp.org/" img={url + shortcutCommonApp} />
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
                <input type="email" placeholder="Email" className="px-3 py-2 rounded-lg ring-1 ring-gray-300 focus:ring-pacific-900 outline-none col-span-2 lg:col-span-3 xl:col-span-2" />
                <button className=" text-white font-medium px-4 py-2 bg-pacific-800 hover:bg-pacific-900 rounded-lg focus:outline-none col-span-1 lg:col-span-3 xl:col-span-1">Subscribe</button>
              </div>
            </SubContainer>
            <div className="subcontainer">
              <h2 className="subcontainer-text">Contact Us</h2>
              <div className="grid grid-cols-3 gap-2">
                <input type="email" placeholder="Email" className="px-3 py-2 rounded-lg ring-1 ring-gray-300 focus:ring-pacific-900 outline-none col-span-2" />
                <button className="px-4 py-2 bg-pacific-800 text-white font-medium rounded-lg hover:bg-pacific-900 col-span-1 focus:outline-none">Send</button>
                <textarea cols="50" rows="4" placeholder="Message" className="px-3 py-2 h-16 rounded-lg ring-1 ring-gray-300 focus:ring-pacific-900 outline-none col-span-3" />
              </div>
            </div>
          </div>
        </div>

        <script defer src='https://static.cloudflareinsights.com/beacon.min.js' data-cf-beacon='{"token": "16f83f98f5d94f5b8f1e563dd9641161"}'></script>

      </div>
    </Layout>
  );
}

export default Home;
