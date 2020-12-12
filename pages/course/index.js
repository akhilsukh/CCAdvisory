import Head from 'next/head'
import Link from "next/link";
import Layout from '../../components/Layout'
import SubContainer from '../../components/SubContainer'

function ClassButton(props){
  return(
    <Link href="/course/2">
      <button className="hover:bg-teal-900 focus:bg-teal-900 rounded-lg py-2 px-4 w-full focus:outline-none">
        <a className="text-white">{props.text}</a>
      </button>
    </Link>
  )
}

function Tutor() {
  return (
    <Layout id="Tutoring" index="2">
      <div className="flex flex-col lg:w-3/5 xl:w-3/5">
        <SubContainer title="CS Classes">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-1 p-2">
            <ClassButton text="C++ Programming I"/>
            <ClassButton text="C++ Programming II"/>
            <ClassButton text="Data Structures in C++"/>
            <ClassButton text="Adv. C++ Programming"/>
            <ClassButton text="Java Programming"/>
            <ClassButton text="Adv. Java Programming"/>
            <ClassButton text="Python Programming"/>
            <ClassButton text="Adv. Python Programming"/>
            <ClassButton text="Intro to x86 Processor Assembly"/>
          </div>
        </SubContainer>

        <SubContainer title="Math Classes">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-1 p-2">
            <ClassButton text="Differential Calculus"/>
            <ClassButton text="Integral Calculus"/>
            <ClassButton text="Multivariable Calculus I"/>
            <ClassButton text="Multivariable Calculus II"/>
            <ClassButton text="Differential Equations"/>
            <ClassButton text="Linear Algebra"/>
            <ClassButton text="Introductory Statistics"/>
            <ClassButton text="Discrete Mathematics"/>
          </div>
        </SubContainer>

        <SubContainer title="Econ Classes">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-1 p-2">
            <ClassButton text="AP Econ"/>
            <ClassButton text="Intro to Microeconomics"/>
            <ClassButton text="Intro to Macroeconomics"/>
          </div>
        </SubContainer>
      </div>
    </Layout>
  )
}

export default Tutor;