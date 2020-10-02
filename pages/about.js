import Link from "next/link";
import Layout from '../components/Layout'
import SubTitle from '../components/Subtitle'
import SubContainer from '../components/SubContainer'

function ProfileCard(props) {
  return (
    <Link href="#">
      <div className="hover:bg-teal-800 text-center cursor-pointer rounded-lg flex-col p-4 mx-2 my-1 w-full md:w-56 lg:w-56 xl:w-56">
        <img className="rounded-full mx-auto bg-green-200 h-32 w-32 border border-r-1" src={props.image}></img>
        <h6 className="text-white text-lg font-medium mb-1 mt-2 truncate w-full">{props.name}</h6>
          <p className="text-gray-200 w-auto inline-block">
            {props.role}
          </p>
          <p className="text-xs text-gray-400 w-auto inline-block">
            Tutors: {props.classes}
          </p>
      </div>
    </Link>
  );
}

function About() {
  return (
    <Layout id="About" index="4">
      <div className="flex flex-col">
        <SubTitle text="Founders" />
        <SubContainer>
          <div className="flex flex-wrap justify-around">
            <ProfileCard name="Akhil Sukhthankar" classes="CIS 22A/B/C" role="Co-Founder, Developer" image={require('../public/images/akh.jpg')}/>
            <ProfileCard name="Barr Avrahamov" classes="MATH 1A/B/C CIS 21JA" role="Co-Founder, Dev/Tutor?" image={require('../public/images/bar.jpg')}/>
            <ProfileCard name="Chris Hoeft" classes="MATH 2A/B" role="Co-Founder, Blogger?" image={require('../public/images/chr.jpg')}/>
          </div>
        </SubContainer>
          <SubTitle text="Tutors"/>
        <SubContainer>
          <div className="flex flex-wrap justify-around">
            <ProfileCard name="Lorem Ipsum Dolor" classes="CIS 22A/B/C"/>
            <ProfileCard name="Lorem Ipsum Dolor" classes="CIS 22A/B/C"/>
            <ProfileCard name="Lorem Ipsum Dolor" classes="CIS 22A/B/C"/>
          </div>
        </SubContainer>
      </div>
    </Layout>
  )
}

export default About;