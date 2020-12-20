import Head from 'next/head'
import Layout from '../../components/Layout'
import SubContainer from '../../components/SubContainer'
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router'
import { InlineWidget } from "react-calendly";

var calSettings = {
  backgroundColor: '0C4A6E',
  hideEventTypeDetails: false,
  hideLandingPageDetails: false,
  primaryColor: 'fcd34d',
  textColor: 'f3f4f6'
}

function Profile() {
  const { pid } = useRouter().query;

  const [profile, setProfile] = useState({
    'id': null,
    'name': null,
  });

  useEffect(() => {
    const preUrl = 'https://cors-anywhere.herokuapp.com/'
    const url = 'https://raw.githubusercontent.com/akhilsukh01/CCAdvisory/assets/data/about.json'
    fetch((preUrl + url), {
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      }
    }).then(function (response) {
      // console.log("RES", response);
      return response.json();
    })
      .then(function (jsonData) {
        var aboutData = jsonData.team;
        for (var i = 0; i < aboutData.length; i++) {
          if (aboutData[i].id == pid) {
            setProfile(aboutData[i]);
            break;
          }
        }
      });
  }, [pid])

  return (
    <Layout id={profile.name}>
      <div className="flex flex-col w-full max-w-7xl">
        <SubContainer title={`${profile.name}`}>
          <p>Name: {profile.name}</p>
          <p>Role: {profile.role}</p>
          <p>Major: {profile.major}</p>
          <p>Bio: {profile.bio}</p>
          {profile.tutor == 1 &&
            <InlineWidget url={profile.calendar} />
          }
        </SubContainer>
      </div>
    </Layout>
  )
}

export default Profile;