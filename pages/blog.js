import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Layout from '../components/Layout'
import SubTitle from '../components/Subtitle'

function Transfer() {
  return (
    <Layout>
      <div className="flex flex-col">
        <SubTitle text="Blog" />
      
      </div>
    </Layout>
  )
}

export default Transfer;