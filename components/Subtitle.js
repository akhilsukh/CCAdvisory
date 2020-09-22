import Link from 'next/link'

function SubTitle (props){
    return (
        <div>
            <h1 className="text-4xl font-semibold text-teal-900">{props.text}</h1>
        </div>
    )
}
export default SubTitle;