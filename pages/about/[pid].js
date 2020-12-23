import Head from 'next/head'
import Layout from '../../components/structural/Layout'
import SubContainer from '../../components/common/SubContainer'
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router'
import Loader from '../../components/common/Loader'
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

  const [member, setMember] = useState({
    'profile': {
      'id': '...',
      'name': '...,'
    },
    'loading': true,
  });

  useEffect(() => {
    const preUrl = 'https://cca-cors.herokuapp.com/';
    const url = preUrl + 'https://cdn.statically.io/gh/akhilsukh01/CCAdvisory/assets/data/about.json'
    fetch((url), {
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      }
    }).then(function (response) {
      return response.json();
    })
      .then(function (jsonData) {
        var aboutData = jsonData.team;
        for (var i = 0; i < aboutData.length; i++) {
          if (aboutData[i].id == pid) {
            setMember({ 'profile': aboutData[i], 'loading': false });
            break;
          }
        }
      });
  }, [pid])

  return (
    <Layout id={member.profile.name}>
      <div className="flex flex-col w-full max-w-7xl">
        <SubContainer>
          {member.loading && <Loader loading={member.loading} />}
          {!member.loading &&
            <div>
              <h2 className="subcontainer-text">{`${member.profile.name}`}</h2>
              <p>Name: {member.profile.name}</p>
              <p>Role: {member.profile.role}</p>
              <p>Major: {member.profile.major}</p>
              <p>Bio: {member.profile.bio}</p>
              {member.profile.tutor == 1 &&
                <InlineWidget url={member.profile.calendar} />
              }
            </div>
          }
        </SubContainer>
      </div>
    </Layout>
  )
}

export default Profile;