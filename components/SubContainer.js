import Link from 'next/link'

function SubContainer (props){
    return (
        <div className="bg-teal-900 p-2 rounded-lg block mt-4 mb-12">
            {props.children}
        </div>
    )
}
export default SubContainer;