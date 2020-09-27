import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Link from "next/link";
import Layout from '../components/Layout'
import SubTitle from '../components/Subtitle'
import SubContainer from '../components/SubContainer'

function ClassButton(props){
  return(
    <Link href="#">
      <button className="bg-teal-900 hover:bg-teal-800 focus:bg-teal-800 rounded-lg py-2 px-8 w-full focus:outline-none">
        <a className="text-white">{props.text}</a>
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
          <div class="grid grid-cols-1 lg:grid-cols-2 xl:lg:grid-cols-2 gap-x-2 gap-y-1 p-2">
            <ClassButton text="CIS 22A: C++ Programming I"/>
            <ClassButton text="CIS 22B: C++ Programming II"/>
            <ClassButton text="CIS 22C: Data Structures in C++"/>
            <ClassButton text="CIS 29: Advanced C++ Programming"/>
            <ClassButton text="CIS 35A: Java Programming"/>
            <ClassButton text="CIS 35B: Advanced. Java Programming"/>
            <ClassButton text="CIS 41A: Python Programming"/>
            <ClassButton text="CIS 41B: Advanced Python Programming"/>
            <ClassButton text="CIS 21J: Intro to x86 Processor Assembly"/>
          </div>
        </SubContainer>

        <SubTitle text="Math Classes" />
        <SubContainer>
        <div class="grid grid-cols-1 lg:grid-cols-2 xl:lg:grid-cols-2 gap-x-2 gap-y-1 p-2">
            <ClassButton text="MATH 1A: Differential Calculus"/>
            <ClassButton text="MATH 1B: Integral Calculus"/>
            <ClassButton text="MATH 1C: Multivariable Calculus I"/>
            <ClassButton text="MATH 1D: Multivariable Calculus II"/>
            <ClassButton text="MATH 2A: Differential Equations"/>
            <ClassButton text="MATH 2B: Linear Algebra"/>
            <ClassButton text="MATH 10: Introductory Statistics"/>
            <ClassButton text="MATH 22: Discrete Mathematics"/>
          </div>
        </SubContainer>
      </div>
    </Layout>
  )
}

export default Tutor;