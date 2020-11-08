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
              title="CCA Basics: DegreeWorks"
              date="October 20 2020"
              wordcount="1"
              post="cca_degreeworks"
              img={require("../../public/blog/cca_degreeworks.png")}
            />
            <BlogCard
              title="CCA Basics: Assist.org"
              date="October 20 2020"
              wordcount="1"
              post="cca_assist"
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
              post="dd_middlecollege"
              img={require("../../public/blog/dd_middlecollege.png")}
            />
            <BlogCard
              title="Deep Dive: IGETC vs CSU GE"
              date="October 8 2020"
              wordcount="3"
              post="dd_ges"
              img={require("../../public/blog/dd_ges.png")}
            />
            <BlogCard
              title="Deep Dive: UC TAG"
              date="November 31 2020"
              wordcount="350"
              post="dd_uctag"
              img={require("../../public/blog/dd_uctag.png")}
            />
          </div>
        </SubContainer>

        <SubContainer title="Do's & Don'ts Collection">
          <div className="grid gap-2 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 justify-items-center">
          <BlogCard
              title="Do's & Don'ts: UC Transfer Essay"
              date="October 12 2020"
              wordcount="350"
              post="dad_uctransferessay"
              img={require("../../public/blog/dad_uctransferessay.png")}
          />
          <BlogCard
              title="Do's & Don'ts: College List"
              date="October 12 2020"
              wordcount="350"
              post="dad_collegelist"
              img={require("../../public/blog/dad_collegelist.png")}
          />
          </div>
        </SubContainer>

        <SubContainer title="CCA Spotlight Collection">
          <div className="grid gap-2 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 justify-items-center">
          <BlogCard
              title="CCA Spotlight: Data Sci. @ Cal"
              date="October 12 2020"
              wordcount="350"
              post="ccv_dscal"
              img={require("../../public/blog/ccv_dscal.png")}
          />
          <BlogCard
              title="CCA Spotlight: CS @ Davis"
              date="October 12 2020"
              wordcount="350"
              post="ccv_csdavis"
              img={require("../../public/blog/ccv_csdavis.png")}
          />
          </div>
        </SubContainer>
      </div>
    </Layout>
  )
}

export default Transfer;