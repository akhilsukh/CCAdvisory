import Link from 'next/link'

function SubContainer (props){
    return (
        <div className="bg-teal-900 p-5 rounded-lg block mt-4 mb-12" id={props.id}>
            <h3 className="subcontainer-text">{props.title}</h3>
            {props.children}
        </div>
    )
}
export default SubContainer;