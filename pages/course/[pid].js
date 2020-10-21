import Head from 'next/head'
import Layout from '../../components/Layout'
import SubContainer from '../../components/SubContainer'
import { useRouter } from 'next/router'

function Course() {
  const router = useRouter()
  const { pid } = router.query
  
  return (
    <Layout id={pid}>
      <div className="flex flex-col lg:w-3/5 xl:w-3/5">
        <SubContainer>
          <h3 className="text-white text-center font-medium text-xl">{pid}</h3>

        </SubContainer>
      </div>
    </Layout>

  )
}

export default Course;