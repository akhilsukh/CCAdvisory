import Head from 'next/head'
import Layout from '../../components/Layout'
import SubContainer from '../../components/SubContainer'
import BlogCard from "../../components/BlogCard"

function BlogGrid(props){
  return (
    <div className="grid gap-3 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 justify-items-center">
      {props.children}
    </div>
  )
}

function Transfer() {
  return (
    <Layout id="Blog" index="1">
      <div className="flex flex-col w-full max-w-7xl">

        <SubContainer title="CCA Basics Collection">
          <BlogGrid>
            <BlogCard
                title="DegreeWorks in 5 Minutes"
                date="October 20 2020"
                post="basics/degreeworks"
                section="CCA Basics"
                author="Barr Avrahamov"
              />
              <BlogCard
                title="Top Ten: 2020 Edition"
                date="2020-07-10"
                section="CCA Basics"
                post="basics/topten-2020"
                author="Chris Hoeft"
              />
              <BlogCard
                title="Assist in 5 Minutes"
                date="October 20 2020"
                post="basics/assist"
                section="CCA Basics"
                author="Hassham Malik"
              />
          </BlogGrid>
        </SubContainer>
        
        <SubContainer title="Deep Dive Collection">
          <BlogGrid>
              <BlogCard
                title="All About Middle College"
                date="2020-07-10"
                section="Deep Dive"
                post="deepdives/middlecollege"
                author="Preethan Selva"
              />
              <BlogCard
                title="All About UC TAG"
                date="2020-07-10"
                section="Deep Dive"
                post="deepdives/uctag"
                author="Akhil Sukhthankar"
              />
              <BlogCard
                title="IGETC vs CSU GE"
                date="October 8 2020"
                wordcount="3"
                post="deepdives/cc-ges"
                section="Deep Dive"
                author="Akhil Sukhthankar"
              />
          </BlogGrid>
        </SubContainer>

        <SubContainer title="Do's & Don'ts Collection">
          <BlogGrid>
            <BlogCard
                title="College List"
                date="October 12 2020"
                post="dosanddonts/collegelist"
                section="Do's & Don'ts"
                author="Akhil Sukhthankar"
            />
            <BlogCard
                title="UC Transfer Essay"
                date="October 12 2020"
                post="dosanddonts/uc-transferessay"
                section="Do's & Don'ts"
                author="Hassham Malik"
            />
          </BlogGrid>
        </SubContainer>

        <SubContainer title="CCA Spotlight Collection">
          <BlogGrid>
            <BlogCard
                title="Data Science @ Cal"
                date="October 12 2020"
                wordcount="350"
                post="spotlight/datascience-cal"
                section="CCA Spotlight"
                author="Chris Hoeft"
            />
            <BlogCard
                title="Computer Science @ Davis"
                date="October 12 2020"
                wordcount="350"
                post="spotlight/cs-davis"
                section="CCA Spotlight"
                author="Chris Hoeft"
            />
          </BlogGrid>
        </SubContainer>
      </div>
    </Layout>
  )
}

export default Transfer;