import SubContainer from "../common/SubContainer";

function FeedbackForm (props){
		return (
				<div className="subcontainer">
						<h2 className="subcontainer-text">Contact Us</h2>
						<div className="grid grid-cols-3 gap-2">
								<input type="email" placeholder="Email" className="email-input" />
								<button className="submit-button">Send</button>
								<textarea cols="50" rows="4" placeholder="Message" className="px-3 py-2 h-16 rounded-md ring-1 ring-gray-300 focus:ring-pacific-900 outline-none col-span-3" />
						</div>
				</div>
		)
}
export default FeedbackForm;