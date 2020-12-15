import Link from "next/link";

function BlogCard(props) {
    const { post, title, date, author, section } = props;

    var formattedDate = new Date(date);
    const options = { year: "numeric", month: "short", day: "numeric" };

    var band_color = "band-default";
    if(section.toUpperCase() === "CCA BASICS"){
        band_color = "band-basics"
    }
    else if(section.toUpperCase() === "DEEP DIVE"){
        band_color = "band-deep-dive"
    }
    else if(section.toUpperCase() === "DO'S & DON'TS"){
        band_color = "band-dosanddonts"
    }
    else if(section.toUpperCase() === "CCA SPOTLIGHT"){
        band_color = "band-spotlight"
    }

    return (
        <Link href={`/blog/${post}`}>
            <div className="flex cursor-pointer w-full ring-0 ring-pacific-900 rounded-lg overflow-hidden blog-card">
                <div className={band_color}/>
                <div className="bg-pacific-800 hover:bg-pacific-900 cursor-pointer flex-col p-3 w-full blog-card-content">
                    <p className="text-yellow-300 uppercase text-xs font-medium truncate w-full">{section}</p>
                    <p className="text-white font-medium text-lg truncate w-full">{title}</p>
                    <div className="flex justify-between">
                        <p className="text-xs text-gray-100 w-auto inline-block">{author}</p>
                        <p className="text-xs text-gray-100 w-auto inline-block">{formattedDate.toLocaleDateString("en-US", options)}</p>
                    </div>
                </div>
            </div>
        </Link>
    )
}

export default BlogCard;