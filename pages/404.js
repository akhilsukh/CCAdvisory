import Layout from "../components/structural/Layout";
import Link from "next/link";
import BlogCard from "../components/blogpage/BlogView";
import { Container } from "postcss";
import SubContainer from "../components/common/SubContainer";

function Error() {
  return (
    <Layout id="404 Error" index="0">
        <div className="alert col-span-3">
          <span>404 Error. Page not found!!</span>
        </div>
    </Layout>
  );
}

export default Error;
