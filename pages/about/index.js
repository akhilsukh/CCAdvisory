import Link from "next/link";
import { unstable_batchedUpdates } from "react-dom";
import Layout from '../../components/Layout'
import SubContainer from '../../components/SubContainer'

function ProfileCard(props) {
  const { image, name, role, classes } = props;

  return (
    <li className="hover:bg-teal-800 text-center cursor-pointer rounded-lg flex-col p-4 mx-4 my-1 w-full">
      <Link href="/about/asd">
        <div>
          <img className="rounded-full mx-auto bg-green-200 h-32 w-32 border border-r-1" src={image}></img>
          <h6 className="text-gray-200 text-lg font-medium mb-1 mt-2 truncate w-full">{name}</h6>
          <p className="text-gray-200 w-full inline">{role}</p>
          <p className="text-xs text-gray-400 w-full block">{classes}</p>
        </div>
      </Link>
    </li>
  );
}

function About() {
  return (
    <Layout id="About" index="4">
      <div className="flex flex-col lg:w-3/5 xl:w-3/5">

        <SubContainer>
          <h3 className="text-white text-center mb-2 font-medium text-xl">Founders</h3>
          <ul className="grid justify-items-center gap-2 grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3">
            <ProfileCard name="Akhil Sukhthankar" classes="CIS 22A/B/C" role="Director, Developer" image={require('../../public/images/akh.jpg')}/>
            <ProfileCard name="Barr Avrahamov" classes="MATH 1A/B/C CIS 22A/B/C" role="Director of Tutoring, Tutor" image={require('../../public/images/bar.jpg')}/>
            <ProfileCard name="Chris Hoeft" classes="ECON" role="Director of Content, Tutor" image={require('../../public/images/chr.jpg')}/>
          </ul>
        </SubContainer>

        <SubContainer>
          <h3 className="text-white text-center mb-2 font-medium text-xl">Tutors</h3>
          <ul className="grid justify-items-center gap-2 grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4">
            <ProfileCard name="Lorem Ipsum Dolor" classes="CIS 22A/B/C"/>
            <ProfileCard name="Lorem Ipsum Dolor" classes="CIS 22A/B/C"/>
            <ProfileCard name="Lorem Ipsum Dolor" classes="CIS 22A/B/C"/>
            <ProfileCard name="Lorem Ipsum Dolor" classes="CIS 22A/B/C"/>
            <ProfileCard name="Lorem Ipsum Dolor" classes="CIS 22A/B/C"/>
            <ProfileCard name="Lorem Ipsum Dolor" classes="CIS 22A/B/C"/>
            <ProfileCard name="Lorem Ipsum Dolor" classes="CIS 22A/B/C"/>
            <ProfileCard name="Lorem Ipsum Dolor" classes="CIS 22A/B/C"/>
          </ul>
        </SubContainer>

        <SubContainer>
          <h3 className="text-white text-center mb-2 font-medium text-xl" id="contact">Contact Us</h3>
          
        </SubContainer>
      </div>
    </Layout>
  )
}

export default About;