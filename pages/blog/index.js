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

        <SubContainer title="CCA Basics Collection" id="CCA_BASICS">
          <BlogGrid>
            <BlogCard
                title="All About DegreeWorks"
                date="October 20 2020"
                post="cca_degreeworks"
                section="CCA Basics"
                author="Barr Avrahamov"
              />
              <BlogCard
                title="Assist.org"
                date="October 20 2020"
                post="cca_assist"
                section="CCA Basics"
                author="Hassham Malik"
              />
          </BlogGrid>
        </SubContainer>
        
        <SubContainer title="Deep Dive Collection" id="DEEP_DIVE">
          <BlogGrid>
            <BlogCard
                title="Middle College"
                date="October 16 2020"
                post="dd_middlecollege"
                section="Deep Dive"
                author="Preethan Selva"
              />
              <BlogCard
                title="IGETC vs CSU GE"
                date="October 8 2020"
                wordcount="3"
                post="dd_ges"
                section="Deep Dive"
                author="Akhil Sukhthankar"
              />
              <BlogCard
                title="UC TAG"
                date="November 31 2020"
                post="dd_uctag"
                section="Deep Dive"
                author="Chris Hoeft"
              />
          </BlogGrid>
        </SubContainer>

        <SubContainer title="Do's & Don'ts Collection" id="DO'S_&_DON'TS">
          <BlogGrid>
            <BlogCard
                title="Top Ten: 2020 Edition"
                date="November 9 2020"
                post="dad_topten"
                section="Do's & Don'ts"
                author="Chris Hoeft"
              />
            <BlogCard
                title="UC Transfer Essay"
                date="October 12 2020"
                post="dad_uctransferessay"
                section="Do's & Don'ts"
                author="Akhil Sukhthankar"
            />
            <BlogCard
                title="College List"
                date="October 12 2020"
                post="dad_collegelist"
                section="Do's & Don'ts"
                author="Hassham Malik"
            />
          </BlogGrid>
        </SubContainer>

        <SubContainer title="CCA Spotlight Collection" id="CCA_SPOTLIGHT">
          <BlogGrid>
            <BlogCard
                title="Data Science @ Cal"
                date="October 12 2020"
                wordcount="350"
                post="ccv_dscal"
                section="CCA Spotlight"
                author="Chris Hoeft"
            />
            <BlogCard
                title="Computer Science @ Davis"
                date="October 12 2020"
                wordcount="350"
                post="ccv_csdavis"
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