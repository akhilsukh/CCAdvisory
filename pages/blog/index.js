import Head from 'next/head'
import Layout from '../../components/Layout'
import SubContainer from '../../components/SubContainer'
import BlogCard from "../../components/BlogCard"

function Transfer() {
  return (
    <Layout id="Blog" index="1">
      <div className="flex flex-col lg:w-3/5 xl:w-3/5">

        <SubContainer>
          <h3 className="text-white text-center font-medium text-xl">CCA Basics Collection</h3>
          <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 justify-items-center">
          <BlogCard
              title="CCA Basics: WebAssign"
              date="October 20 2020"
              wordcount="1"
              post="./blog/test"
              img={require("../../public/blog/basics_webassign.png")}
            />
            <BlogCard
              title="CCA Basics: Assist.org"
              date="October 20 2020"
              wordcount="1"
              post="./blog/test"
              img={require("../../public/blog/basics_assist.png")}
            />
          <BlogCard
              title="CCA Basics: WebAssign"
              date="October 20 2020"
              wordcount="1"
              post="./blog/test"
              img={require("../../public/blog/basics_webassign.png")}
            />
            <BlogCard
              title="CCA Basics: Assist.org"
              date="October 20 2020"
              wordcount="1"
              post="./blog/test"
              img={require("../../public/blog/basics_assist.png")}
            />
          <BlogCard
              title="CCA Basics: WebAssign"
              date="October 20 2020"
              wordcount="1"
              post="./blog/test"
              img={require("../../public/blog/basics_webassign.png")}
            />
            <BlogCard
              title="CCA Basics: Assist.org"
              date="October 20 2020"
              wordcount="1"
              post="./blog/test"
              img={require("../../public/blog/basics_assist.png")}
            />
          </div>
        </SubContainer>
        
        <SubContainer>
          <h3 className="text-white text-center font-medium text-xl">Deep Dive Collection</h3>
          <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 justify-items-center">
          <BlogCard
              title="Deep Dive: Middle College"
              date="October 16 2020"
              wordcount="2"
              post="./blog/test.md"
              img={require("../../public/blog/dad_middlecollege.png")}
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
              img={require("../../public/blog/dad_tag.png")}
            />
          <BlogCard
              title="Deep Dive: Middle College"
              date="October 16 2020"
              wordcount="2"
              post="./blog/test.md"
              img={require("../../public/blog/dad_middlecollege.png")}
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
              img={require("../../public/blog/dad_tag.png")}
            />
          </div>
        </SubContainer>

        <SubContainer>
          <h3 className="text-white text-center font-medium text-xl">Do's & Dont's Collection</h3>
          <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 justify-items-center">
          <BlogCard
              title="Do's & Dont's: UC Transfer Essay"
              date="October 12 2020"
              wordcount="350"
              post="./blog/test.md"
              img={require("../../public/blog/dad_uctransferessays.png")}
          />
          <BlogCard
              title="Do's & Dont's: UC Transfer Essay"
              date="October 12 2020"
              wordcount="350"
              post="./blog/test.md"
              img={require("../../public/blog/dad_uctransferessays.png")}
          />
          <BlogCard
              title="Do's & Dont's: UC Transfer Essay"
              date="October 12 2020"
              wordcount="350"
              post="./blog/test.md"
              img={require("../../public/blog/dad_uctransferessays.png")}
          />
          <BlogCard
              title="Do's & Dont's: UC Transfer Essay"
              date="October 12 2020"
              wordcount="350"
              post="./blog/test.md"
              img={require("../../public/blog/dad_uctransferessays.png")}
          />
          <BlogCard
              title="Do's & Dont's: UC Transfer Essay"
              date="October 12 2020"
              wordcount="350"
              post="./blog/test.md"
              img={require("../../public/blog/dad_uctransferessays.png")}
          />
          <BlogCard
              title="Do's & Dont's: UC Transfer Essay"
              date="October 12 2020"
              wordcount="350"
              post="./blog/test.md"
              img={require("../../public/blog/dad_uctransferessays.png")}
          />
          </div>
        </SubContainer>
      
      </div>
    </Layout>
  )
}

export default Transfer;