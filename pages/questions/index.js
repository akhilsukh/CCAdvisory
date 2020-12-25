import Head from 'next/head'
import Link from 'next/link'
import styles from '../../styles/Home.module.css'
import Layout from '../../components/structural/Layout'
import SubContainer from '../../components/common/SubContainer'

function QAButton(props) {
  return (
    <Link href={props.target}>
      <div className="flex rounded-lg relative bg-gray-100 hover:bg-gray-200 ring-1 ring-gray-500 cursor-pointer items-center">
        <img className="px-8 py-12 m-auto relative" src={props.image} />
      </div>
    </Link>
  )
}

function QA() {
  return (
    <Layout id="Q&A" index="3">
      <div className="flex flex-col w-full max-w-7xl">
        <SubContainer title="Questions & Answers">
          <div className="grid lg:grid-cols-3 space-y-3 lg:space-y-0 lg:space-x-3">
            <QAButton target="asd" image="https://i.imgur.com/X16vNj5.png" />
            <QAButton target="asd" image="https://i.imgur.com/3WtdV5A.png" />
            <QAButton target="asd" image="https://i.imgur.com/XO2Q1kQ.png" />

          </div>
        </SubContainer>
      </div>
    </Layout>

  )
}

export default QA;