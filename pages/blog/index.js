import Head from 'next/head'
// import styles from '../styles/Home.module.css'
import Layout from '../../components/Layout'
import SubContainer from '../../components/SubContainer'
import BlogCard from "../../components/BlogCard"

function Transfer() {
  return (
    <Layout id="Blog" index="1">
      <div className="flex flex-col lg:w-1/2 xl:w-1/2">

        <SubContainer>
          <h3 className="text-white text-center font-medium text-xl">CCA Basics Collection</h3>
          <div className="flex flex-wrap justify-around items-stretch">
            <BlogCard
              title="BlogTitle1 BlogTitle1 BlogTitle1 BlogTitle1"
              date="January 1 2000"
              wordcount="350"
              post="./blog/test.md"
            />
            <BlogCard
              title="BlogTitle2"
              date="January 1 2000"
              wordcount="350"
              post="./blog/test.md"
            />
            <BlogCard
              title="BlogTitle3"
              date="January 1 2000"
              wordcount="350"
              post="./blog/test.md"
            />
            <BlogCard
              title="BlogTitle4"
              date="January 1 2000"
              wordcount="350"
              post="./blog/test.md"
            />
            <BlogCard
              title="BlogTitle5"
              date="January 1 2000"
              wordcount="350"
              post="./blog/test.md"
            />
            <BlogCard
              title="BlogTitle6"
              date="January 1 2000"
              wordcount="350"
              post="./blog/test.md"
            />
          </div>
        </SubContainer>
        
        <SubContainer>
          <h3 className="text-white text-center font-medium text-xl">Deep Dive Collection</h3>
          <div className="flex flex-wrap justify-around items-stretch">
            <BlogCard
              title="BlogTitle1 BlogTitle1 BlogTitle1 BlogTitle1"
              date="January 1 2000"
              wordcount="350"
              post="./blog/test.md"
            />
            <BlogCard
              title="BlogTitle2"
              date="January 1 2000"
              wordcount="350"
              post="./blog/test.md"
            />
            <BlogCard
              title="BlogTitle3"
              date="January 1 2000"
              wordcount="350"
              post="./blog/test.md"
            />
            <BlogCard
              title="BlogTitle4"
              date="January 1 2000"
              wordcount="350"
              post="./blog/test.md"
            />
            <BlogCard
              title="BlogTitle5"
              date="January 1 2000"
              wordcount="350"
              post="./blog/test.md"
            />
            <BlogCard
              title="BlogTitle6"
              date="January 1 2000"
              wordcount="350"
              post="./blog/test.md"
            />
          </div>
        </SubContainer>

        <SubContainer>
          <h3 className="text-white text-center font-medium text-xl">Do's & Don'ts Collection</h3>
          <div className="flex flex-wrap justify-around items-stretch">
            <BlogCard
              title="BlogTitle1 BlogTitle1 BlogTitle1 BlogTitle1"
              date="January 1 2000"
              wordcount="350"
              post="./blog/test.md"
            />
            <BlogCard
              title="BlogTitle2"
              date="January 1 2000"
              wordcount="350"
              post="./blog/test.md"
            />
            <BlogCard
              title="BlogTitle3"
              date="January 1 2000"
              wordcount="350"
              post="./blog/test.md"
            />
            <BlogCard
              title="BlogTitle4"
              date="January 1 2000"
              wordcount="350"
              post="./blog/test.md"
            />
            <BlogCard
              title="BlogTitle5"
              date="January 1 2000"
              wordcount="350"
              post="./blog/test.md"
            />
            <BlogCard
              title="BlogTitle6"
              date="January 1 2000"
              wordcount="350"
              post="./blog/test.md"
            />
          </div>
        </SubContainer>
      
      </div>
    </Layout>
  )
}

export default Transfer;