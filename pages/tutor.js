import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Link from "next/link";
import Layout from '../components/Layout'
import SubTitle from '../components/Subtitle'
import SubContainer from '../components/SubContainer'

function ClassButton(props){
  return(
    <Link href="#">
      <button className="bg-teal-900 hover:bg-teal-800 focus:bg-teal-800 rounded-lg py-2 px-12 w-full focus:outline-none">
        <a className="text-white font-medium">{props.text}</a>
      </button>
    </Link>
  )
}

function Tutor() {
  return (
    <Layout>
      <div className="flex flex-col">
        <SubTitle text="CS Classes" />
        <SubContainer>
          <div class="grid grid-cols-1 lg:grid-cols-2 xl:lg:grid-cols-2 gap-4 p-2">
            <ClassButton text="Class 1: Course Description"/>
            <ClassButton text="Class 2: Description"/>
            <ClassButton text="Class 3: Description"/>
            <ClassButton text="Class 4: Description"/>
            <ClassButton text="Class 5: Description"/>
            <ClassButton text="Class 6: Description"/>
            <ClassButton text="Class 7: Description"/>
            <ClassButton text="Class 8: Description"/>
          </div>
        </SubContainer>

        <SubTitle text="Math Classes" />
        <SubContainer>
          <div class="grid grid-cols-1 lg:grid-cols-2 xl:lg:grid-cols-2 gap-4 p-2">
            <ClassButton text="Class 1: Course Description"/>
            <ClassButton text="Class 2: Description"/>
            <ClassButton text="Class 3: Description"/>
            <ClassButton text="Class 4: Description"/>
            <ClassButton text="Class 5: Description"/>
            <ClassButton text="Class 6: Description"/>
            <ClassButton text="Class 7: Description"/>
            <ClassButton text="Class 8: Description"/>
          </div>
        </SubContainer>
      </div>
    </Layout>
  )
}

export default Tutor;