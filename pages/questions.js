import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Layout from '../components/Layout'
import SubTitle from '../components/Subtitle'
import SubContainer from '../components/SubContainer'

function QA() {
  return (
    <Layout>
      <div className="flex flex-col w-4/6">
        <SubTitle text="Questions & Answers"/>
        <SubContainer>
          <p className="text-question">Justo est erat eos rebum duo stet at rebum diam kasd, elitr clita et et et, sit sed dolor magna.</p>
          <p className="text-answer">Dolores dolores eos dolor at aliquyam ipsum sanctus sit magna, invidunt dolore sed sed dolor. Sed invidunt duo eirmod tempor est, et sit no lorem aliquyam nonumy amet invidunt justo.</p>
          <p className="text-question">Justo est erat eos rebum duo stet at rebum diam kasd, elitr clita et et et, sit sed dolor magna.</p>
          <p className="text-answer">Dolores dolores eos dolor at aliquyam ipsum sanctus sit magna, invidunt dolore sed sed dolor. Sed invidunt duo eirmod tempor est, et sit no lorem aliquyam nonumy amet invidunt justo.</p>
          <p className="text-question">Justo est erat eos rebum duo stet at rebum diam kasd, elitr clita et et et, sit sed dolor magna.</p>
          <p className="text-answer">Dolores dolores eos dolor at aliquyam ipsum sanctus sit magna, invidunt dolore sed sed dolor. Sed invidunt duo eirmod tempor est, et sit no lorem aliquyam nonumy amet invidunt justo. Dolores dolores eos dolor at aliquyam ipsum sanctus sit magna, invidunt dolore sed sed dolor. Sed invidunt duo eirmod tempor est, et sit no lorem aliquyam nonumy amet invidunt justo. Dolores dolores eos dolor at aliquyam ipsum sanctus sit magna, invidunt dolore sed sed dolor. Sed invidunt duo eirmod tempor est, et sit no lorem aliquyam nonumy amet invidunt justo.</p>
        </SubContainer>
      </div>
    </Layout>

  )
}

export default QA;