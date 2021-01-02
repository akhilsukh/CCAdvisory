import SubContainer from "../common/SubContainer";
import axios from 'axios';
import React, {useState, useEffect} from 'react'

function SubscriptionForm(props) {
		const [sub, setSub] = useState({	"email": null});
		const [button, setButton] = useState({"text": "Subscribe", "class": "submit-button"});

		function handleForm(e) {

				axios.post(
						"https://formcarry.com/s/r0W49-Ih0y",
						sub,
						{headers: {"Accept": "application/json"}}
				)
						.then(function (response) {
								console.log("RES", response);
								// access response.data in order to check formcarry response
								if (response.data.success) {
										setButton({"text": "Subscribed", "class": "submit-button clicked-success"});
								} else {
										// handle error
										console.log("ERR", response.data.message);
								}
						})
						.catch(function (error) {
								console.log(error);
						});

				e.preventDefault();
		}

		function handleFields(e) {
				setSub({"email": e.target.value})
		}

		return (
				<SubContainer title="Subscribe to our Weekly Newsletter">
						<form className="grid grid-cols-3 gap-2" onSubmit={handleForm}>
								<input type="email" placeholder="Email" id="email" className="email-input" onChange={handleFields}/>
								<button type="submit" className={button.class}>{button.text}</button>
						</form>
				</SubContainer>
		)
}

export default SubscriptionForm;