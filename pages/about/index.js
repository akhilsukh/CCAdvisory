import Link from "next/link";
import Layout from '../../components/Layout'
import SubContainer from '../../components/SubContainer'
import Image from 'next/image'
import React, { useState, useEffect } from 'react';

function ProfileCard(props) {
  const { id, name, role, major, image } = props;

  return (
    <li className="hover:bg-gray-200 hover:border-2 rounded-xl text-center cursor-pointer flex-col py-3 w-full">
      <Link href={"/about/" + id}>
        <div>
          <img className="rounded-full mx-auto bg-blue-200 h-40 w-40 m-2 border-2 border-gray-300" src={image} />
          <h6 className="text-xl font-semibold text-pacific-900 mt-1 truncate w-full">{name}</h6>
          <p className="text-pacific-800 font-medium text-sm w-full inline">{role}</p>
          <p className="text-gray-800 font-medium text-sm w-full block">{major}</p>
        </div>
      </Link>
    </li>
  );
}

function About() {
  const [teams, setTeams] = useState([]);

  useEffect(() => {
    const preUrl = 'https://cors-anywhere.herokuapp.com/';
    const url = 'https://rawcdn.githack.com/akhilsukh01/CCAdvisory/3757305b537eb5a1e00934e0bda63341ba488e4b/data/about.json';
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
        var teamData = jsonData.team;
        setTeams(teamData);
      });
  }, [])

  const basePath = "https://raw.githubusercontent.com/akhilsukh01/CCAdvisory/assets/images/profiles";

  return (
    <Layout id="About" index="4">
      <div className="flex flex-col w-full max-w-7xl">
        <SubContainer title="About Us">
          <p>Dolores dolores eos dolor at aliquyam ipsum sanctus sit magna, invidunt dolore sed sed dolor. Sed invidunt duo eirmod tempor est, et sit no lorem aliquyam nonumy amet invidunt justo. Dolores dolores eos dolor at aliquyam ipsum sanctus sit magna, invidunt dolore sed sed dolor. Sed invidunt duo eirmod tempor est, et sit no lorem aliquyam nonumy amet invidunt justo. Dolores dolores eos dolor at aliquyam ipsum sanctus sit magna, invidunt dolore sed sed dolor. Sed invidunt duo eirmod tempor est, et sit no lorem aliquyam nonumy amet invidunt justo.</p>
        </SubContainer>

        <SubContainer title="Founders">
          <ul className="grid justify-items-center gap-1 grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3">
            {teams.map((person) => {
              if (person.res == "director") {
                return <ProfileCard
                  key={person.id}
                  id={person.id}
                  name={person.name}
                  role={person.role}
                  major={person.major}
                  image={`${basePath}/${person.id.substring(0, 3)}.jpg`} />
              }
            })}
          </ul>
        </SubContainer>

        <SubContainer title="Writers and Editors">
          <ul className="grid justify-items-center gap-1 grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3">
            {teams.map((person) => {
              if (person.res == "editor" || person.res == "writer") {
                return <ProfileCard
                  key={person.id}
                  id={person.id}
                  name={person.name}
                  role={person.role}
                  major={person.major}
                  image={`${basePath}/${person.id.substring(0, 3)}.jpg`} />
              }
            })}
          </ul>
        </SubContainer>

        <SubContainer title="Interested In Joining The Team?">

        </SubContainer>
      </div>
    </Layout>
  )
}

export default About;
