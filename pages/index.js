import Layout from "../components/Layout";
import Link from "next/link";
import BlogCard from "../components/BlogCard";

function SideButton(props) {
  return (
    <div>
      <a href={props.link} target="_blank" rel="noreferrer">
        <button className="bg-teal-800 hover:bg-teal-900 hover:underline rounded-lg py-4 px-6 w-full focus:outline-none">
          <a className="text-white font-medium">{props.text}</a>
        </button>
      </a>
    </div>
  );
}

function Home() {
  return (
    <Layout id="Home" index="0">
      <div className="grid grid-cols-4 gap-4 flex-row-reverse mt-4 mb-12">

        <div className="bg-teal-600 p-3 rounded-lg col-span-4 text-center text-white text-sm">
          <span>🧰 Our website is undergoing some major changes as we upgrade from our old platform. Sorry for any broken links or missing articles!</span>
        </div>


        <div className="bg-teal-800 pt-4 rounded-lg col-span-4 xl:col-span-3 lg:col-span-3">
          <h3 className="subcontainer-text">Latest Headlines</h3>
          <div className="flex flex-col px-6 pb-2">
            <span className="headline flex flex-row"><p><p className="font-thin text-lg">Nov 1st</p>
              Prepare to send your official transcripts to your CommonApp colleges after Fall Term for Fall 2021 Applicants.
            </p></span>

            <span className="headline flex flex-row"><p><p className="font-thin text-lg">Sept 22nd</p>
              Deadline to drop classes without a 'W' at both De Anza and Foothill College is October 4th.
            </p></span>

            <span className="headline flex flex-row"><p><p className="font-thin text-lg">Sept 14th</p>
              <Link href="https://admission.universityofcalifornia.edu/admission-requirements/transfer-requirements/transfer-admission-guarantee-tag.html">
                <a target="_blank" className="headline-link hover:underline font-medium">TAG Application </a></Link>
              deadline for Fall term has now been extended to October 15th due to the recent wildfires and other circumstances. Make sure to review it with your community college advisor or UC TAG Advisor. </p></span>
          </div>
        </div>


        <div className="flex-col space-y-2 col-span-4 xl:col-span-1 lg:col-span-1">
          <SideButton text="🔗 Assist - Course Equivalencies" link="https://assist.org/" />
          <SideButton text="🔗 UC Application Portal" link="https://apply.universityofcalifornia.edu/" />
          <SideButton text="🔗 CommonApp Portal" link="https://www.commonapp.org/" />
          <SideButton text="🔗 Coalition Application Portal" link="https://www.mycoalition.org/" />
          <SideButton text="📑 UC Transfer Essay Prompts" link="https://admission.universityofcalifornia.edu/how-to-apply/applying-as-a-transfer/personal-insight-questions.html" />
          {/* <SideButton text="Have Questions? Contact Us 👋" link="/about/#contact"/> */}
        </div>

        <div className="bg-teal-800 pt-4 rounded-lg col-span-4">
          <h3 className="subcontainer-text">Latest Blog Posts</h3>
          <div className="px-2 lg:px-4 xl:px-6 pb-2 grid gap-2 grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-8 justify-items-center">
            <BlogCard
              title="Top 10"
              date="November 9 2020"
              wordcount="3"
              post="dad_topten"
              img={require("../public/blog/dad_topten.png")}
            />
            <BlogCard
              title="DegreeWorks"
              date="October 20 2020"
              wordcount="1"
              post="cca_degreeworks"
              img={require("../public/blog/cca_degreeworks.png")}
            />
            <BlogCard
              title="Middle College"
              date="October 16 2020"
              wordcount="2"
              post="dd_middlecollege"
              img={require("../public/blog/dd_middlecollege.png")}
            />
            <BlogCard
              title="UC Transfer Essay"
              date="October 12 2020"
              wordcount="350"
              post="dad_uctransferessay"
              img={require("../public/blog/dad_uctransferessay.png")}
            />
            <BlogCard
              title="Assist.org"
              date="October 4 2020"
              wordcount="350"
              post="cca_assist"
              img={require("../public/blog/cca_assist.png")}
            />
            <BlogCard
              title="Data Science @ Cal"
              date="November 27 2020"
              wordcount="350"
              post="ccv_dscal"
              img={require("../public/blog/ccv_dscal.png")}
            />
            <BlogCard
              title="UC TAG"
              date="November 31 2020"
              wordcount="350"
              post="dd_uctag"
              img={require("../public/blog/dd_uctag.png")}
            />
            <BlogCard
              title="Computer Science @ Davis"
              date="November 23 2020"
              wordcount="350"
              post="ccv_csdavis"
              img={require("../public/blog/ccv_csdavis.png")}
            />
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Home;
