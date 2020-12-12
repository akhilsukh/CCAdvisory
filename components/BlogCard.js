import Link from "next/link";

function BlogCard(props) {
    const { post, title, date, wordcount, img } = props;
    
    return (
        <Link href={`/blog/${post}`}>
            <div className="hover:bg-teal-900 cursor-pointer rounded-lg flex-col p-4 mx-4 my-1 w-full">
                <img className="rounded-md bg-teal-200 border-2 border-white w-full" src={img}></img>
                <h6 className="text-white font-medium mb-1 mt-2 truncate w-full">{title}</h6>
                <p className="text-xs text-gray-300 w-auto inline-block">
                    {date}
                </p>
            </div>
        </Link>
    )
}

export default BlogCard;