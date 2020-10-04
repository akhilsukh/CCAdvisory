import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Layout from '../components/Layout'
import SubTitle from '../components/Subtitle'
import BlogCard from "../components/BlogCard";

function Transfer() {
  return (
    <Layout id="Blog" index="1">
      <div className="flex flex-col">

        {/* <SubTitle text="Community College Collection" /> */}
        <div className="bg-teal-900 p-5 rounded-lg col-span-4 mt-4 mb-12">
          <h3 className="text-white text-center font-medium text-xl">Community College Collection</h3>
          <div className="flex flex-wrap justify-around items-stretch">
            <BlogCard
              title="BlogTitle1 BlogTitle1 BlogTitle1 BlogTitle1"
              date="January 1 2000"
              wordcount="350"
            />
            <BlogCard
              title="BlogTitle2"
              date="January 1 2000"
              wordcount="350"
            />
            <BlogCard
              title="BlogTitle3"
              date="January 1 2000"
              wordcount="350"
            />
            <BlogCard
              title="BlogTitle4"
              date="January 1 2000"
              wordcount="350"
            />
            <BlogCard
              title="BlogTitle5"
              date="January 1 2000"
              wordcount="350"
            />
            <BlogCard
              title="BlogTitle6"
              date="January 1 2000"
              wordcount="350"
            />
          </div>
        </div>
        
        {/* <SubTitle text="UC Transfer + Essay Collection" /> */}
        <div className="bg-teal-900 p-5 rounded-lg col-span-4 mt-4 mb-12">
          <h3 className="text-white text-center font-medium text-xl">UC Transfer + Essay Collection</h3>
          <div className="flex flex-wrap justify-around items-stretch">
            <BlogCard
              title="BlogTitle1 BlogTitle1 BlogTitle1 BlogTitle1"
              date="January 1 2000"
              wordcount="350"
            />
            <BlogCard
              title="BlogTitle2"
              date="January 1 2000"
              wordcount="350"
            />
            <BlogCard
              title="BlogTitle3"
              date="January 1 2000"
              wordcount="350"
            />
            <BlogCard
              title="BlogTitle4"
              date="January 1 2000"
              wordcount="350"
            />
            <BlogCard
              title="BlogTitle5"
              date="January 1 2000"
              wordcount="350"
            />
            <BlogCard
              title="BlogTitle6"
              date="January 1 2000"
              wordcount="350"
            />
          </div>
        </div>


        {/* <SubTitle text="SAT/ACT + AP Collection" /> */}
        <div className="bg-teal-900 p-5 rounded-lg col-span-4 mt-4 mb-12">
          <h3 className="text-white text-center font-medium text-xl">SAT/ACT + AP Collection</h3>
          <div className="flex flex-wrap justify-around items-stretch">
            <BlogCard
              title="BlogTitle1 BlogTitle1 BlogTitle1 BlogTitle1"
              date="January 1 2000"
              wordcount="350"
            />
            <BlogCard
              title="BlogTitle2"
              date="January 1 2000"
              wordcount="350"
            />
            <BlogCard
              title="BlogTitle3"
              date="January 1 2000"
              wordcount="350"
            />
            <BlogCard
              title="BlogTitle4"
              date="January 1 2000"
              wordcount="350"
            />
            <BlogCard
              title="BlogTitle5"
              date="January 1 2000"
              wordcount="350"
            />
            <BlogCard
              title="BlogTitle6"
              date="January 1 2000"
              wordcount="350"
            />
          </div>
        </div>
      
      </div>
    </Layout>
  )
}

export default Transfer;