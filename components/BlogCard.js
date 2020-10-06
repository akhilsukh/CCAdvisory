import Link from "next/link";

function BlogCard(props) {
    return (
        <Link href="/blogview">
        <div className="hover:bg-teal-800 cursor-pointer rounded-lg flex-col p-4 mx-2 my-1 w-full md:w-64 lg:w-64 xl:w-64">
            <img className="rounded-md bg-green-200 h-48 w-full md:w-56 lg:w-56 xl:w-56"></img>
            <h6 className="text-white font-medium mb-1 mt-2 truncate w-full">{props.title}</h6>
            <div className="flex justify-between">
            <p className="text-xs text-gray-300 w-auto inline-block">
                {props.date}
            </p>
            <p className="text-xs text-gray-300 w-auto inline-block">
                {props.wordcount} words
            </p>
            </div>
        </div>
        </Link>
    )
}

export default BlogCard;