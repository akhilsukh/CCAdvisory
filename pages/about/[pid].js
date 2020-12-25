import Head from 'next/head'
import Layout from '../../components/structural/Layout'
import SubContainer from '../../components/common/SubContainer'
import React, { useState, useEffect } from 'react';
import Router, { useRouter } from 'next/router'
import Loader from '../../components/common/Loader'
import { InlineWidget } from "react-calendly";


function Profile() {
  const { pid } = useRouter().query;

  const [member, setMember] = useState({
    'profile': {
      'id': '...',
      'name': '...',
      'tutor': 0
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
        var foundMember = false;
        for (var i = 0; i < aboutData.length; i++) {
          if (aboutData[i].id == pid) {
            setMember({ 'profile': aboutData[i], 'loading': false });
            foundMember = true;
            break;
          }
        }
        if (!foundMember && !member.loading) {
          Router.push('/about');
        }
      });
  }, [pid])

  const url = 'https://cdn.statically.io/gh/akhilsukh01/CCAdvisory/assets/images/profiles';

  return (
    <Layout id={member.profile.name}>
      <div className="flex flex-col w-full max-w-7xl">
        <SubContainer>
          {member.loading && <Loader loading={member.loading} />}
          {!member.loading &&
            <div>
              <div className="flex p-4">
                <img className="rounded-full bg-gray-200 h-48 w-48 m-2 border-2 border-gray-300" src={`${url}/${member.profile.id.substring(0, 3)}.jpg`} />
                <div className="flex-col py-2 px-6">
                  <h2 className="text-3xl font-medium">{member.profile.name}</h2>
                  <h3 className="text-lg font-medium text-pacific-900">{member.profile.role}</h3>
                  {/* <p>{member.profile.major}</p> */}
                  <p className="text-gray-600 mt-1">{member.profile.bio}</p>
                </div>
              </div>
            </div>
          }
        </SubContainer>

        {member.profile.tutor === 1 &&
          <div>
            {!member.loading &&
              <SubContainer>
                <InlineWidget url={member.profile.calendar} />
              </SubContainer>
            }
          </div>
        }
      </div>
    </Layout>
  )
}

export default Profile;