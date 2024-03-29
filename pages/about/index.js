import Link from "next/link"
import Layout from '../../components/structural/Layout'
import SubContainer from '../../components/common/SubContainer'
import Loader from '../../components/common/Loader'
import React, { useState, useEffect } from 'react';

function ProfileCard(props) {
  const { id, name, role, major, image } = props;

  return (
    <li className="hover:bg-gray-100 hover:border-2 rounded-xl text-center cursor-pointer flex-col py-3 w-full">
      <Link href={"/about/" + id}>
        <div>
          <img className="rounded-full mx-auto bg-gray-200 h-40 w-40 m-2 border-2 border-gray-300" src={image} />
          <h6 className="text-xl font-medium mt-1 truncate w-full">{name}</h6>
          <p className="text-pacific-800 font-medium text-sm w-full inline">{role}</p>
          <p className="text-gray-800 font-medium text-sm w-full block">{major}</p>
        </div>
      </Link>
    </li>
  );
}

function About() {
  const [teams, setTeams] = useState({
    'members': [],
    'loading': true,
  });
  const preUrl = 'https://cca-cors.herokuapp.com/';

  useEffect(() => {
    // const url = preUrl + 'https://cdn.statically.io/gh/akhilsukh01/CCAdvisory/assets/data/about.json';
    const url = preUrl + 'https://akhilsukh01.github.io/CCAdvisory/data/data.json';

    fetch((url), {
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'X-Requested-With': 'XMLHttpRequest'
      }
    }).then(function (response) {
      // console.log("RES", response);
      return response.json();
    })
      .then(function (jsonData) {
        var teamData = jsonData.team;
        setTeams({'members': teamData, 'loading': false});
      });
  }, [])

  //preUrl not needed for image requests
  // const url = "https://cdn.statically.io/gh/akhilsukh01/CCAdvisory/assets/images/profiles";
  const url = "https://akhilsukh01.github.io/CCAdvisory/images/profiles";

  return (
    <Layout id="About" index="4">
      <div className="flex flex-col w-full max-w-7xl">
        <SubContainer title="About Us">
          <p>CCAdvisory was created by community college students for community college students. In 2020, we all found ourselves at community college, whether it was straight from high school or after exploring opportunities at other institutions. While preparing to take the next step in our respective journeys, we came together to share our experiences with you because we truly believe that is the most valuable thing to offer the next generation of students.</p>
        </SubContainer>

        <SubContainer title="Founders">
          {teams.loading && <Loader loading={teams.loading} />}
          {!teams.loading && 
            <ul className="grid justify-items-center gap-1 grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3">
              {teams.members.map((person) => {
                if (person.res == "director") {
                  return <ProfileCard
                    key={person.id}
                    id={person.id}
                    name={person.name}
                    role={person.role}
                    // major={person.major}
                    image={`${url}/${person.id.substring(0, 3)}.jpg`} />
                }
              })}
            </ul>
          }
        </SubContainer>

        <SubContainer title="Writers and Editors">
          {teams.loading && <Loader loading={teams.loading} />}
          {!teams.loading && 
            <ul className="grid justify-items-center gap-1 grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3">
              {teams.members.map((person) => {
                if (person.res == "editor" || person.res == "writer") {
                  return <ProfileCard
                    key={person.id}
                    id={person.id}
                    name={person.name}
                    role={person.role}
                    // major={person.major}
                    image={`${url}/${person.id.substring(0, 3)}.jpg`} />
                }
              })}
            </ul>
          }
        </SubContainer>

        <SubContainer title="Interested In Joining The Team?">
          
        </SubContainer>
      </div>
    </Layout>
  )
}

export default About;
