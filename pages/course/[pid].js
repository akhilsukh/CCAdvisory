import Head from 'next/head'
import Layout from '../../components/Layout'
import SubContainer from '../../components/SubContainer'
import { useRouter } from 'next/router'

function Course() {
  const router = useRouter()
  const { pid } = router.query
  
  return (
    <Layout id={pid}>
      <div className="flex flex-col w-full max-w-7xl">
        <SubContainer title={pid}>

        </SubContainer>
      </div>
    </Layout>

  )
}

export default Course;