import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Layout from '../components/Layout'
import SubTitle from '../components/Subtitle'

function About() {
  return (
    <Layout>
      <SubTitle text="About" />
    </Layout>
  )
}

export default About;