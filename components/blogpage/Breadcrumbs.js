import Link from "next/link";

function Breadcrumbs(props) {
  const { pid } = props;

  return (
    <div className="bg-gray-50 p-3 mb-4 rounded-lg text-center text-sm font-medium  ring-1 ring-gray-200 flex justify-between">
        <p className="text-gray-500">{pid}</p>
        <Link href={"/blog"}><p className="hover:underline cursor-pointer text-pacific-800">Read other posts -> </p></Link>
    </div>
  )
}

export default Breadcrumbs;