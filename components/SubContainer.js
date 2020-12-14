import Link from 'next/link'

function SubContainer (props){
    return (
        <div className="bg-gray-100 rounded-lg block mb-5 p-5 ring-2 ring-gray-200 transform" id={props.id}>
            <h2 className="subcontainer-text">{props.title}</h2>
            <div className="">{props.children}</div>
        </div>
    )
}
export default SubContainer;