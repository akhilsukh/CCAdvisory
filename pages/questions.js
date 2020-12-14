import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Layout from '../components/Layout'
import SubContainer from '../components/SubContainer'

function QA() {
  return (
    <Layout id="Q&A" index="3">
      <div className="flex flex-col w-full max-w-7xl">
        <SubContainer title="TAG: Questions & Answers">
          <p className="text-question">Justo est erat eos rebum duo stet at rebum diam kasd, elitr clita et et et, sit sed dolor magna.</p>
          <p className="text-answer">Dolores dolores eos dolor at aliquyam ipsum sanctus sit magna, invidunt dolore sed sed dolor. Sed invidunt duo eirmod tempor est, et sit no lorem aliquyam nonumy amet invidunt justo.</p>
          <p className="text-question">Justo est erat eos rebum duo stet at rebum diam kasd, elitr clita et et et, sit sed dolor magna.</p>
          <p className="text-answer">Dolores dolores eos dolor at aliquyam ipsum sanctus sit magna, invidunt dolore sed sed dolor. Sed invidunt duo eirmod tempor est, et sit no lorem aliquyam nonumy amet invidunt justo.</p>
          <p className="text-question">Justo est erat eos rebum duo stet at rebum diam kasd, elitr clita et et et, sit sed dolor magna.</p>
          <p className="text-answer">Dolores dolores eos dolor at aliquyam ipsum sanctus sit magna, invidunt dolore sed sed dolor. Sed invidunt duo eirmod tempor est, et sit no lorem aliquyam nonumy amet invidunt justo. Dolores dolores eos dolor at aliquyam ipsum sanctus sit magna, invidunt dolore sed sed dolor. Sed invidunt duo eirmod tempor est, et sit no lorem aliquyam nonumy amet invidunt justo. Dolores dolores eos dolor at aliquyam ipsum sanctus sit magna, invidunt dolore sed sed dolor. Sed invidunt duo eirmod tempor est, et sit no lorem aliquyam nonumy amet invidunt justo.</p>
        </SubContainer>

        <SubContainer title="Middle College: Questions & Answers">
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