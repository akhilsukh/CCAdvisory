import Head from 'next/head'
import Link from "next/link"
import Layout from '../../components/structural/Layout'
import SubContainer from '../../components/common/SubContainer'

function ClassButton(props){
  return(
    <Link href="/course/2">
      <button className="hover:bg-gray-200 focus:bg-gray-200 auto-rows-auto py-2 px-4 w-full focus:outline-none text-left">
        {props.text}
      </button>
    </Link>
  )
}

function Tutor() {
  return (
    <Layout id="Tutoring" index="2">
      <div className="flex flex-col w-full max-w-7xl">
        <SubContainer title="Computer Science Courses">
          <div className="grid grid-flow-row divide-solid divide-y divide-gray-200">
            <ClassButton text="C++ Programming"/>
            <ClassButton text="Java Programming"/>
            <ClassButton text="Python Programming"/>
            <ClassButton text="Data Structures"/>
            <ClassButton text="Processor Assembly - x86"/>
          </div>
        </SubContainer>

        <SubContainer title="Math Courses">
          <div className="grid grid-flow-row divide-solid divide-y divide-gray-200">
            <ClassButton text="AP Statistics"/>
            <ClassButton text="Precalculus"/>
            <ClassButton text="Calculus Series"/>
            <ClassButton text="Differential Equations"/>
            <ClassButton text="Linear Algebra"/>
            <ClassButton text="Discrete Mathematics"/>
          </div>
        </SubContainer>

        <SubContainer title="Economics Courses">
          <div className="grid grid-flow-row divide-solid divide-y divide-gray-200">
            <ClassButton text="AP Econ"/>
            <ClassButton text="Microeconomics"/>
            <ClassButton text="Macroeconomics"/>
          </div>
        </SubContainer>
      </div>
    </Layout>
  )
}

export default Tutor;