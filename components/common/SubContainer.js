import Link from 'next/link'

function SubContainer (props){
    return (
        <div className="subcontainer mb-5" id={props.id}>
            <h2 className="subcontainer-text">{props.title}</h2>
            <div className="">{props.children}</div>
        </div>
    )
}
export default SubContainer;