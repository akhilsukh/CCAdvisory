import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Layout from '../components/Layout'
import SubTitle from '../components/Subtitle'
import SubContainer from '../components/SubContainer'

function Profile(props) {
  return (
    <Layout id="_name">
      <div className="flex flex-col lg:w-1/2 xl:w-1/2">
        <SubTitle text="_name"/>
        <SubContainer>

        </SubContainer>
      </div>
    </Layout>

  )
}

export default Profile;