import Link from "next/link";
import Layout from '../../components/Layout'
import SubContainer from '../../components/SubContainer'

function ProfileCard(props) {
  const { image, name, role, classes } = props;

  return (
    <li className="hover:bg-teal-800 text-center cursor-pointer rounded-lg flex-col p-4 mx-4 my-1 w-full">
      <Link href="/about/asd">
        <div>
          <img className="rounded-full mx-auto bg-teal-200 h-32 w-32 m-2 border border-r-1" src={image}></img>
          <h6 className="text-white text-lg font-medium mt-1 truncate w-full">{name}</h6>
          <p className="text-gray-100 text-xs w-full inline">{role}</p>
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
        <SubContainer title="Founders">
          <ul className="grid justify-items-center gap-2 grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3">
            <ProfileCard name="Akhil Sukhthankar" classes="De Anza - Computer Science" role="Director, Developer" image={require('../../public/images/akh.jpg')}/>
            <ProfileCard name="Barr Avrahamov" classes="De Anza - Computer Science" role="Director of Outreach" image={require('../../public/images/bar.jpg')}/>
            <ProfileCard name="Chris Hoeft" classes="De Anza - Political Science" role="Director of Content" image={require('../../public/images/chr.jpg')}/>
          </ul>
        </SubContainer>

        <SubContainer title="Writers">
          <ul className="grid justify-items-center gap-2 grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3">
            <ProfileCard name="Hassham Malik" classes="De Anza - Computer Science" image={require('../../public/images/has.jpg')}/>
            <ProfileCard name="Preethan Selva" classes="De Anza - Business" image={require('../../public/images/pre.jpg')}/>
            <ProfileCard name="Matthew Matulewicz" classes="De Anza - Communications" image={require('../../public/images/mat.jpg')}/>
          </ul>
        </SubContainer>

        <SubContainer title="Contact Us">
          
        </SubContainer>
      </div>
    </Layout>
  )
}

export default About;
