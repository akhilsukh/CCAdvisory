import Link from 'next/link'

function SubContainer (props){
    return (
        <div className="bg-gray-800 rounded-lg block my-8 p-4" id={props.id}>
            <h3 className="subcontainer-text">{props.title}</h3>
            <div className="lg:px-4 xl:px-6">{props.children}</div>
        </div>
    )
}
export default SubContainer;