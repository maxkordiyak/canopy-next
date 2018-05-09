import React from 'react';
import {connect} from 'react-redux';
import {reduxForm, Field} from 'redux-form';
import Radio from 'material-ui/Radio';
import {InputLabel} from 'material-ui/Input';
import {MenuItem} from 'material-ui/Menu';
import {FormControl, FormControlLabel} from 'material-ui/Form';
import {
	Checkbox,
	Switch,
	RadioGroup,
	Select,
	TextField
} from 'redux-form-material-ui';
import './index.css';

export const fields = ['fullName', 'email', 'renterType', 'agreeToTerms', 'receiveEmails', 'bestFramework'];

const validate = values => {
	const errors = {};
	const requiredFields = [
		'fullName',
		'email'
	];
	requiredFields.forEach(field => {
		if (!values[field]) {
			errors[field] = 'Required';
		}
	});
	if (
		values.email &&
		!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
	) {
		errors.email = 'Invalid email address';
	}
	return errors;
};


const currencies = [
	{
		value: 'Renter',
		label: 'renter'
	},
	{
		value: 'Agent',
		label: 'agent'
	},
	{
		value: 'Landlord',
		label: 'landlord'
	}
];

class SignUpForm extends React.Component {
	state = {
		value: this.props.initialValues.bestFramework,
		renterType: 'EUR'
	};

	handleChange = event => {
		this.setState({value: event.target.value});
	};

	handleSelectChange = (name, ev) => {
		let tag = [];
		Object.values(ev).map(value => tag.push(value));
		tag.splice(-1, 1);
		const renterType = tag.join('');
		this.setState({
			[name]: renterType
		});
	};

	render() {
		// console.log(this.props);
		return (
			<form onSubmit={this.props.handleSubmit} autoComplete="off">

				<Field className="mb-16" fullWidth name="fullName" component={TextField} label="Full name"
							 placeholder={'e.g. Alex Smith'}/>
				<Field className="mb-16" fullWidth name="email" component={TextField} label="Email"
							 placeholder={'e.g. name@email.com'}/>

				<div className="flexColumn mt-16 mb-16">
					<FormControl>
						<InputLabel htmlFor="renterType">Select </InputLabel>
						<Field onChange={ev => this.handleSelectChange('renterType', ev)} name="renterType"
									 value={this.state.renterType}
									 component={Select}>
							{currencies.map(option => (
								<MenuItem className="listItem" key={option.value}
													value={option.value}>
									{option.value}
								</MenuItem>
							))}
						</Field>
					</FormControl>
				</div>

				<FormControlLabel control={<Field name="agreeToTerms" component={Checkbox}/>} label="Agree to terms?"/>

				<FormControlLabel control={<Field name="receiveEmails" component={Switch}/>} label="Please spam me!"/>

				<Field name="bestFramework" component={RadioGroup} value={this.state.value} onChange={() => this.handleChange}>
					<FormControlLabel value="react" control={<Radio/>} label="React"/>
					<FormControlLabel value="angular" control={<Radio/>} label="Angular"/>
					<FormControlLabel value="ember" control={<Radio/>} label="Ember"/>
				</Field>
				<button type="submit">Send</button>
			</form>
		);
	}
}

// Decorate with redux-form
SignUpForm = reduxForm({
	form: 'signUpForm',
	fields,
	validate
})(SignUpForm);

export default connect((state, {data}) => {
	return {
		initialValues: {
			fullName: data.fullName,
			renterType: data.renterType,
			agreeToTerms: data.agreeToTerms,
			receiveEmails: data.receiveEmails,
			bestFramework: data.bestFramework
		}
	};
})(SignUpForm);