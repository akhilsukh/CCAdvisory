import Head from 'next/head'
import Layout from '../../components/Layout'
import SubContainer from '../../components/SubContainer'
import React,{useState, useEffect} from 'react';
import { useRouter } from 'next/router'
import { InlineWidget } from "react-calendly";

var calSettings={
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

  useEffect(()=>{
    fetch('https://api.npoint.io/58db17246e832b9b695b', {
      headers : {
        'Content-Type': 'application/json', 
        'Accept': 'application/json',}
    }).then(function(response){
        console.log("RES", response);
        return response.json();
      })
      .then(function(jsonData) {
        var aboutData = jsonData.team;
        console.log("ARRAY: ", aboutData);
        console.log("LENGTH: ", aboutData.length);
        for (var i = 0; i < aboutData.length; i++) {
          if(aboutData[i].id == pid) {
            console.log("FOUND:", aboutData[i])
            setProfile(aboutData[i]);
            break;
          }
          else{
            console.log("PID IS", pid ,"SO NOT FOUND:", aboutData[i])
          }
        }
      });
  },[pid])

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