import Layout from '../components/Layout'
import Link from 'next/link'

function SideButton(props){
  return (
    <Link href="#">
      <button className="bg-gray-900 hover:bg-gray-800 focus:bg-gray-800 border-gray-900 rounded-lg p-6 w-full focus:outline-none">
        <a className="text-white font-medium">{props.text}</a>
      </button>
    </Link>
  )
}

function BlogCard(props){
  return (
    <Link href="#">
      <div className="hover:bg-gray-800 cursor-pointer rounded-lg flex-col p-4 m-2 inline-flex w-56">
        <div className="rounded-md bg-gray-500 h-48 w-48"></div>
        <h6 className="text-white font-medium my-1">{props.title}</h6>
        <div className="flex justify-between">
          <p className="text-xs text-gray-400 w-auto inline-block">{props.date}</p>
          <p className="text-xs text-gray-400 w-auto inline-block">{props.wordcount} words</p>
        </div>
      </div>
    </Link>
  )
}

function Home() {
  return (
    <Layout>
      <div className="flex-col flex-1 my-20 mx-32">
        <div className="grid grid-cols-4 gap-4">
          <div className="col-span-3 bg-gray-900 p-8 rounded-lg">
            <a className="text-white">Box1</a>
          </div>
          <div className="col-span-1 flex-col space-y-2">
            <SideButton text="Button1"/>
            <SideButton text="Button2"/>
            <SideButton text="Button3"/>
            <SideButton text="Button4"/>
            <SideButton text="Button5"/>
          </div>
          <div className="col-span-4 bg-gray-900 p-2 rounded-lg">
            <div className="flex flex-wrap">
              <BlogCard title="BlogTitle1" date="January 1 2000" wordcount="350"/>
              <BlogCard title="BlogTitle2" date="January 1 2000" wordcount="350"/>
              <BlogCard title="BlogTitle3" date="January 1 2000" wordcount="350"/>
              <BlogCard title="BlogTitle4" date="January 1 2000" wordcount="350"/>
              <BlogCard title="BlogTitle5" date="January 1 2000" wordcount="350"/>
              <BlogCard title="BlogTitle6" date="January 1 2000" wordcount="350"/>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Home;
