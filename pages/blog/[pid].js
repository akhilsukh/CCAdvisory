import Head from 'next/head'
import Layout from '../../components/Layout'
import SubContainer from '../../components/SubContainer'
import React from 'react'
import ReactMarkdown from 'react-markdown'
import { useRouter } from 'next/router'


function BlogView({ postData }) {
  const router = useRouter()
  const { pid } = router.query
  
  return (
    <Layout>
      <div className="flex flex-col lg:w-3/5 xl:w-3/5">
        <SubContainer>
          <h3 className="text-white text-center font-medium text-xl">{pid}</h3>

        </SubContainer>
      </div>
    </Layout>
  )
}


export default BlogView;