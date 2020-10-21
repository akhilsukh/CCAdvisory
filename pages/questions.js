import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Layout from '../components/Layout'
import SubContainer from '../components/SubContainer'

function QA() {
  return (
    <Layout id="Q&A" index="3">
      <div className="flex flex-col lg:w-1/2 xl:w-1/2">
        <SubContainer>
          <h3 className="text-white text-center mb-2 font-medium text-xl">TAG: Questions & Answers</h3>
          <p className="text-question">Justo est erat eos rebum duo stet at rebum diam kasd, elitr clita et et et, sit sed dolor magna.</p>
          <p className="text-answer">Dolores dolores eos dolor at aliquyam ipsum sanctus sit magna, invidunt dolore sed sed dolor. Sed invidunt duo eirmod tempor est, et sit no lorem aliquyam nonumy amet invidunt justo.</p>
          <p className="text-question">Justo est erat eos rebum duo stet at rebum diam kasd, elitr clita et et et, sit sed dolor magna.</p>
          <p className="text-answer">Dolores dolores eos dolor at aliquyam ipsum sanctus sit magna, invidunt dolore sed sed dolor. Sed invidunt duo eirmod tempor est, et sit no lorem aliquyam nonumy amet invidunt justo.</p>
          <p className="text-question">Justo est erat eos rebum duo stet at rebum diam kasd, elitr clita et et et, sit sed dolor magna.</p>
          <p className="text-answer">Dolores dolores eos dolor at aliquyam ipsum sanctus sit magna, invidunt dolore sed sed dolor. Sed invidunt duo eirmod tempor est, et sit no lorem aliquyam nonumy amet invidunt justo. Dolores dolores eos dolor at aliquyam ipsum sanctus sit magna, invidunt dolore sed sed dolor. Sed invidunt duo eirmod tempor est, et sit no lorem aliquyam nonumy amet invidunt justo. Dolores dolores eos dolor at aliquyam ipsum sanctus sit magna, invidunt dolore sed sed dolor. Sed invidunt duo eirmod tempor est, et sit no lorem aliquyam nonumy amet invidunt justo.</p>
        </SubContainer>

        <SubContainer>
          <h3 className="text-white text-center mb-2 font-medium text-xl">Middle College: Questions & Answers</h3>
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