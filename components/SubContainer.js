import Link from 'next/link'

function SubContainer (props){
    return (
        <div className="bg-teal-900 p-2 rounded-lg block my-8">
            {props.children}
        </div>
    )
}
export default SubContainer;