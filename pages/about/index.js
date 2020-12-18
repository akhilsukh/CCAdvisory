import Link from "next/link";
import Layout from '../../components/Layout'
import SubContainer from '../../components/SubContainer'

function ProfileCard(props) {
  const {name, id, role, major, image} = props;

  return (
    <li className="hover:bg-gray-200 hover:border-2 rounded-xl text-center cursor-pointer flex-col py-3 w-full">
      <Link href={"/about/" + id}>
        <div>
          <img className="rounded-full mx-auto bg-blue-200 h-40 w-40 m-2 border-2 border-gray-300" src={image}></img>
          <h6 className="text-xl font-semibold text-pacific-900 mt-1 truncate w-full">{name}</h6>
          <p className="text-pacific-800 font-medium text-sm w-full inline">{role}</p>
          <p className="text-gray-800 font-medium text-sm w-full block">{major}</p>
        </div>
      </Link>
    </li>
  );
}

function About() {
  return (
    <Layout id="About" index="4">
      <div className="flex flex-col w-full max-w-7xl">
        <SubContainer title="About Us">
          <p>Dolores dolores eos dolor at aliquyam ipsum sanctus sit magna, invidunt dolore sed sed dolor. Sed invidunt duo eirmod tempor est, et sit no lorem aliquyam nonumy amet invidunt justo. Dolores dolores eos dolor at aliquyam ipsum sanctus sit magna, invidunt dolore sed sed dolor. Sed invidunt duo eirmod tempor est, et sit no lorem aliquyam nonumy amet invidunt justo. Dolores dolores eos dolor at aliquyam ipsum sanctus sit magna, invidunt dolore sed sed dolor. Sed invidunt duo eirmod tempor est, et sit no lorem aliquyam nonumy amet invidunt justo.</p>
        </SubContainer>

        <SubContainer title="Founders">
          <ul className="grid justify-items-center gap-1 grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3">
            <ProfileCard name="Akhil Sukhthankar" id="akhilsukhthankar" major="De Anza - Computer Science" role="Executive Director" image={require('../../public/images/profiles/akh.jpg')}/>
            <ProfileCard name="Barr Avrahamov" id="barravrahamov" major="De Anza - Computer Science" role="Director of Outreach" image={require('../../public/images/profiles/bar.jpg')}/>
            <ProfileCard name="Chris Hoeft" id="chrishoeft" major="De Anza - Political Science" role="Director of Content" image={require('../../public/images/profiles/chr.jpg')}/>
          </ul>
        </SubContainer>

        <SubContainer title="Writers">
          <ul className="grid justify-items-center gap-1 grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3">
            <ProfileCard name="Hassham Malik" id="hasshammalik" major="De Anza - Computer Science" image={require('../../public/images/profiles/has.jpg')}/>
            <ProfileCard name="Preethan Selva" id="preethanselva" major="De Anza - Business" image={require('../../public/images/profiles/pre.jpg')}/>
            <ProfileCard name="Vahni Tagirisa" id="vahnitagirisa" major="Drexel - Biomedical Engineering" image={require('../../public/images/profiles/vah.jpg')}/>
          </ul>
        </SubContainer>

        <SubContainer title="Interested In Joining The Team?">
          
        </SubContainer>
      </div>
    </Layout>
  )
}

export default About;
