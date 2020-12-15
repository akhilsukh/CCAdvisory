import Link from "next/link";

function BlogCard(props) {
    const { post, title, date, author, section } = props;

    // Convert post date to format: Month day, Year
    // const formattedDate = date.pa.toLocaleDateString("en-US", options);

    var formattedDate = new Date(date);
    const options = { year: "numeric", month: "short", day: "numeric" };

    return (
        <Link href={`/blog/${post}`}>
            <div className="bg-pacific-800 hover:bg-pacific-900 ring-2 ring-pacific-900 cursor-pointer rounded-lg flex-col p-3 my-1 w-full">
                {/* <img className="rounded-md bg-blue-200 border-2 border-gray-300 w-full" src={img}></img> */}
                <p className="text-yellow-300 hover:text-yellow-400 uppercase text-xs font-medium truncate w-full">{section}</p>
                <p className="text-white hover:text-gray-100 font-medium text-xl truncate w-full">{title}</p>
                <div className="flex justify-between">
                    <p className="text-xs text-gray-100 hover:text-gray-200 w-auto inline-block">{author}</p>
                    <p className="text-xs text-gray-100 hover:text-gray-200 w-auto inline-block">{formattedDate.toLocaleDateString("en-US", options)}</p>
                </div>
            </div>
        </Link>
    )
}

export default BlogCard;