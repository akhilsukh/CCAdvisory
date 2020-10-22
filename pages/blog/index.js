import Head from 'next/head'
import Layout from '../../components/Layout'
import SubContainer from '../../components/SubContainer'
import BlogCard from "../../components/BlogCard"

function Transfer() {
  return (
    <Layout id="Blog" index="1">
      <div className="flex flex-col lg:w-3/5 xl:w-3/5">

        <SubContainer title="CCA Basics Collection">
          <div className="grid gap-2 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 justify-items-center">
          <BlogCard
              title="CCA Basics: WebAssign"
              date="October 20 2020"
              wordcount="1"
              post="./blog/test"
              img={require("../../public/blog/cca_webassign.png")}
            />
            <BlogCard
              title="CCA Basics: Assist.org"
              date="October 20 2020"
              wordcount="1"
              post="./blog/test"
              img={require("../../public/blog/cca_assist.png")}
            />
          </div>
        </SubContainer>
        
        <SubContainer title="Deep Dive Collection">
          <div className="grid gap-2 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 justify-items-center">
          <BlogCard
              title="Deep Dive: Middle College"
              date="October 16 2020"
              wordcount="2"
              post="./blog/test.md"
              img={require("../../public/blog/dd_middlecollege.png")}
            />
            <BlogCard
              title="Deep Dive: IGETC vs CSU GE"
              date="October 8 2020"
              wordcount="3"
              post="./blog/test.md"
              img={require("../../public/blog/dd_ges.png")}
            />
            <BlogCard
              title="Deep Dive: UC TAG"
              date="November 31 2020"
              wordcount="350"
              post="./blog/test"
              img={require("../../public/blog/dd_uctag.png")}
            />
          </div>
        </SubContainer>

        <SubContainer title="Do's & Dont's Collection">
          <div className="grid gap-2 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 justify-items-center">
          <BlogCard
              title="Do's & Dont's: UC Transfer Essay"
              date="October 12 2020"
              wordcount="350"
              post="./blog/test.md"
              img={require("../../public/blog/dad_uctransferessay.png")}
          />
          <BlogCard
              title="Do's & Dont's: College List"
              date="October 12 2020"
              wordcount="350"
              post="./blog/test.md"
              img={require("../../public/blog/dad_collegelist.png")}
          />
          </div>
        </SubContainer>
      </div>
    </Layout>
  )
}

export default Transfer;