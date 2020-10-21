import Layout from "../components/Layout";
import Link from "next/link";
import BlogCard from "../components/BlogCard";

function SideButton(props) {
  return (
    <Link href={props.link} >
      <button className="bg-teal-900 hover:bg-teal-800 hover:underline focus:bg-teal-800 rounded-lg py-4 px-6 w-full focus:outline-none">
        <a className="text-white font-medium">{props.text}</a>
      </button>
    </Link>
  );
}

function Home() {
  return (
    <Layout id="Home" index="0">
      <div className="grid grid-cols-4 gap-4 flex-row-reverse">
        <div className="bg-teal-900 p-5 rounded-lg col-span-4 xl:col-span-3 lg:col-span-3">
          <h3 className="text-white text-center font-medium text-xl">Latest Headlines</h3>
          <div className="flex flex-col mx-6">
            <span className="headline flex flex-row"><p><p className="font-thin text-lg">Sept 22nd</p>Deadline to drop classes without a 'W' at both De Anza and Foothill College is October 4th.</p></span>
            <span className="headline flex flex-row"><p><p className="font-thin text-lg">Sept 14th</p><Link href="https://admission.universityofcalifornia.edu/admission-requirements/transfer-requirements/transfer-admission-guarantee-tag.html"><a target="_blank" className="headline-link hover:underline font-medium">TAG Application</a></Link> deadline for Fall term is September 30th. Make sure to review it with your community college advisor or corresponding UC TAG Advisor. Make sure to review it with your community college advisor or corresponding UC TAG Advisor. Make sure to review it with your community college advisor or corresponding UC TAG Advisor.</p></span>
            <span className="headline flex flex-row"><p><p className="font-thin text-lg">Sept 11th</p><Link href="https://admission.universityofcalifornia.edu/admission-requirements/transfer-requirements/transfer-admission-guarantee-tag.html"><a target="_blank" className="headline-link hover:underline font-medium">TAG Application</a></Link> deadline for Fall term is September 30th. Make sure to review it with your community college advisor or corresponding UC TAG Advisor.</p></span>
          </div>
        </div>

        <div className="flex-col space-y-2 col-span-4 xl:col-span-1 lg:col-span-1">
          <SideButton text="Visit Assist for A-G Course Equivalencies" link="https://assist.org/"/>
          <SideButton text="Button2" link=""/>
          <SideButton text="Button3" link=""/>
          <SideButton text="UC Transfer Essay Prompts" link="https://admission.universityofcalifornia.edu/how-to-apply/applying-as-a-transfer/personal-insight-questions.html"/>
          <SideButton text="Have Questions? Contact Us" link="/about/#contact"/>
        </div>

        <div className="bg-teal-900 p-5 rounded-lg col-span-4">
          <h3 className="text-white text-center font-medium text-xl">Latest Blog Posts</h3>
          <div className="flex flex-wrap justify-around items-stretch">
            <BlogCard
              title="CCA Basics: WebAssign"
              date="October 20 2020"
              wordcount="1"
              post="./blog/test"
              img={require("../public/blog/basics_webassign.png")}
            />
            <BlogCard
              title="Deep Dive: Middle College"
              date="October 16 2020"
              wordcount="2"
              post="./blog/test.md"
              img={require("../public/blog/dad_middlecollege.png")}
            />
            <BlogCard
              title="Do's & Dont's: UC Transfer Essay"
              date="October 12 2020"
              wordcount="350"
              post="./blog/test.md"
              img={require("../public/blog/dad_uctransferessays.png")}
            />
            <BlogCard
              title="Deep Dive: IGETC vs CSU GE"
              date="October 8 2020"
              wordcount="3"
              post="./blog/test.md"
              img={require("../public/blog/dd_ges.png")}
            />
            <BlogCard
              title="CCA Basics: Assist.org"
              date="October 4 2020"
              wordcount="350"
              post="./blog/test.md"
              img={require("../public/blog/basics_assist.png")}
            />
            <BlogCard
              title="Deep Dive: UC TAG"
              date="November 31 2020"
              wordcount="350"
              post="./blog/test"
              img={require("../public/blog/dad_tag.png")}
            />
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Home;
