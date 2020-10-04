import Layout from "../components/Layout";
import Link from "next/link";
import BlogCard from "../components/BlogCard";

function SideButton(props) {
  return (
    <Link href="#">
      <button className="bg-teal-900 hover:bg-teal-800 focus:bg-teal-800 rounded-lg py-4 px-6 w-full focus:outline-none">
        <a className="text-white font-medium">{props.text}</a>
      </button>
    </Link>
  );
}

function Home() {
  return (
    <Layout id="Home" index="0">
      <div className="grid grid-cols-4 gap-4">
        <div className="bg-teal-900 p-5 rounded-lg col-span-4 xl:col-span-3 lg:col-span-3">
          <h3 className="text-white text-center font-medium text-xl">Latest Headlines</h3>
          <div className="flex flex-col mx-6">
            <span className="headline flex flex-row"><p><p className="font-thin text-lg">Sept 14th</p><Link href="https://admission.universityofcalifornia.edu/admission-requirements/transfer-requirements/transfer-admission-guarantee-tag.html"><a target="_blank" className="headline-link hover:underline font-medium">TAG Application</a></Link> deadline for Fall term is September 30th. Make sure to review it with your community college advisor or corresponding UC TAG Advisor. Make sure to review it with your community college advisor or corresponding UC TAG Advisor. Make sure to review it with your community college advisor or corresponding UC TAG Advisor.</p></span>
            <span className="headline flex flex-row"><p><p className="font-thin text-lg">Sept 13th</p><Link href="https://admission.universityofcalifornia.edu/admission-requirements/transfer-requirements/transfer-admission-guarantee-tag.html"><a target="_blank" className="headline-link hover:underline font-medium">TAG Application</a></Link> deadline for Fall term is September 30th. Make sure to review it with your community college advisor or corresponding UC TAG Advisor.</p></span>
            <span className="headline flex flex-row"><p><p className="font-thin text-lg">Sept 11th</p><Link href="https://admission.universityofcalifornia.edu/admission-requirements/transfer-requirements/transfer-admission-guarantee-tag.html"><a target="_blank" className="headline-link hover:underline font-medium">TAG Application</a></Link> deadline for Fall term is September 30th. Make sure to review it with your community college advisor or corresponding UC TAG Advisor.</p></span>
          </div>
        </div>

        <div className="flex-col space-y-2 col-span-4 xl:col-span-1 lg:col-span-1">
          <SideButton text="Button1" />
          <SideButton text="Button2" />
          <SideButton text="Button3" />
          <SideButton text="Button4" />
          <SideButton text="Button5" />
        </div>

        <div className="bg-teal-900 p-5 rounded-lg col-span-4">
          <h3 className="text-white text-center font-medium text-xl">Latest Blog Posts</h3>
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
  );
}

export default Home;
