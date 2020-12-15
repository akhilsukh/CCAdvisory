import Layout from "../components/Layout";
import Link from "next/link";
import BlogCard from "../components/BlogCard";
import { Container } from "postcss";
import SubContainer from "../components/SubContainer";

function QuickButton(props) {
  return (
    <div className="hover:cursor-pointer hover:underline hover:ring-pacific-800">
      <a href={props.link} target="_blank" rel="noreferrer">
        <button className="bg-blue-100 hover:bg-blue-200 hover:underline rounded-lg p-2 pt-3 ring-2 ring-pacific-800">
          <img className="w-3/5 m-auto" src={props.img}></img>
          <p className="mt-2 font-medium text-pacific-800 text-center text-xs">
            {props.title}
          </p>
        </button>
      </a>
    </div>
  );
}

function Home() {
  return (
    <Layout id="Home" index="0">
      <div className="grid grid-cols-3 gap-5 mb-2">

        {/* alert bar */}
        <div className="alert col-span-3">
          <span>Our website is undergoing some major changes as we upgrade from our old platform. Sorry for any broken links or missing articles!</span>
        </div>

        {/* blog bar */}
        <div className="col-span-3">
          <SubContainer title="Latest Blog Posts">
            <div className="grid gap-3 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-6 justify-items-center">
              <BlogCard
                title="Top Ten: 2020 Edition"
                date="2020-07-10"
                section="CCA Basics"
                post="dad_topten"
                author="Chris Hoeft"
              />
              <BlogCard
                title="All About DegreeWorks"
                date="2020-07-10"
                section="CCA Basics"
                post="cca_degreeworks"
                author="Barr Avrahamov"
              />
              <BlogCard
                title="Middle College"
                date="2020-07-10"
                section="Deep Dive"
                post="dd_middlecollege"
                author="Preethan Selva"
              />
              <BlogCard
                title="Data Science @ Cal"
                date="2020-07-10"
                section="CCA Spotlight"
                post="dad_datasciencecal"
                author="Akhil Sukhthankar"
              />
              <BlogCard
                title="Middle College"
                date="2020-07-10"
                section="Deep Dive"
                post="dd_middlecollege"
                author="Preethan Selva"
              />
              <BlogCard
                title="Data Science @ Cal"
                date="2020-07-10"
                section="CCA Spotlight"
                post="dad_datasciencecal"
                author="Akhil Sukhthankar"
              />
            </div>
          </SubContainer>
          {/* <h3 className="subcontainer-text">Latest Blog Posts</h3> */}
        </div>

        {/* headlines bar */}
        <div className="col-span-3 lg:col-span-2 xl:col-span-2">
          <div className="subcontainer h-full">
            <h2 className="subcontainer-text">Latest Headlines</h2>
            <div className="flex flex-col">
              <span className="headline flex flex-row"><p><p className="text-pacific-800 text-lg">Nov 1st</p>
                Prepare to send your official transcripts to your CommonApp colleges after Fall Term for Fall 2021 Applicants.
              </p></span>

              <span className="headline flex flex-row"><p><p className="text-pacific-800 text-lg">Sept 22nd</p>
                Deadline to drop classes without a 'W' at both De Anza and Foothill College is October 4th.
              </p></span>

              <span className="headline flex flex-row"><p><p className="text-pacific-800 text-lg">Sept 14th</p>
                <Link href="https://admission.universityofcalifornia.edu/admission-requirements/transfer-requirements/transfer-admission-guarantee-tag.html">
                  <a target="_blank" className="headline-link hover:underline font-medium">TAG Application </a></Link>
                deadline for Fall term has now been extended to October 15th due to the recent wildfires and other circumstances. Make sure to review it with your community college advisor or UC TAG Advisor. </p></span>
            </div>
          </div>
        </div>

        {/* quick links bar */}
        <div className="col-span-3 lg:col-span-1 xl:col-span-1">
          <div className="subcontainer h-full">
            <h2 className="subcontainer-text">Quick Links</h2>
            <div className="grid grid-cols-3 md:grid-cols-6 lg:grid-cols-2 xl:grid-cols-3 gap-5 ">
              <QuickButton title="Assist.org" link="https://www.assist.org" img={require("../public/images/shortcut-assist.png")}/>
              <QuickButton title="UC Application" link="https://admission.universityofcalifornia.edu/apply-now.html" img={require("../public/images/shortcut-uc.png")}/>
              <QuickButton title="Common App" link="https://www.commonapp.org/" img={require("../public/images/shortcut-common.png")}/>
              <QuickButton title="Assist.org" link="https://www.assist.org" img="https://assist.org/assets/images/assist-logo.svg"/>
              <QuickButton title="Assist.org" link="https://www.assist.org" img="https://assist.org/assets/images/assist-logo.svg"/>
              <QuickButton title="Assist.org" link="https://www.assist.org" img="https://assist.org/assets/images/assist-logo.svg"/>
            </div>
          </div>
        </div>

        {/* empty bar */}
        <div className="col-span-3 lg:col-span-2 xl:col-span-2">
            <div className="subcontainer h-full">
              <h2 className="subcontainer-text">Empty Box</h2>
              <p>box content</p>
            </div>
        </div>

        {/* newsletter and contact bar */}
        <div className="col-span-3 lg:col-span-1 xl:col-span-1">
          <div className="grid grid-col-1 gap-5">
            <SubContainer title="Subscribe to our Weekly Newsletter">
              <div className="grid grid-cols-3 gap-2">
                <input type="email"  placeholder="Email" className="px-3 py-2 rounded-lg ring-1 ring-gray-300 focus:ring-pacific-900 outline-none col-span-2 lg:col-span-3 xl:col-span-2"/>
                <button className=" text-white font-medium px-4 py-2 bg-pacific-800 hover:bg-pacific-900 rounded-lg focus:outline-none col-span-1 lg:col-span-3 xl:col-span-1">Subscribe</button>
              </div>
            </SubContainer>
            <SubContainer title="Contact Us">
              <div className="grid grid-cols-3 gap-2">
                  <input type="email" placeholder="Email" className="px-3 py-2 rounded-lg ring-1 ring-gray-300 focus:ring-pacific-900 outline-none col-span-2"/>
                  <button className="px-4 py-2 bg-pacific-800 text-white font-medium rounded-lg hover:bg-pacific-900 col-span-1 focus:outline-none">Send</button>
                  <textarea cols="50" rows="4" placeholder="Message" className="px-3 py-2 h-16 rounded-lg ring-1 ring-gray-300 focus:ring-pacific-900 outline-none col-span-3"/>
                </div>
            </SubContainer>
          </div>
        </div>

      </div>
    </Layout>
  );
}

export default Home;
