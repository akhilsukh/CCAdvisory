import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Layout from '../components/Layout'
import SubTitle from '../components/Subtitle'
import SubContainer from '../components/SubContainer'

function Course() {
  return (
    <Layout id="_course">
      <div className="flex flex-col lg:w-1/2 xl:w-1/2">
        <SubTitle text="_course"/>
        <SubContainer>

        </SubContainer>
      </div>
    </Layout>

  )
}

export default Course;