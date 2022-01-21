import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import PropTypes from 'prop-types';

class Form extends Component {
	static propTypes = {
		handleSubmit: PropTypes.func.isRequired,
		error: PropTypes.string,
	};

	renderField = (data) => {
		data.input.className = 'form-control';

		const isInvalid = data.meta.touched && !!data.meta.error;
		if (isInvalid) {
			data.input.className += ' is-invalid';
			data.input['aria-invalid'] = true;
		}

		if (this.props.error && data.meta.touched && !data.meta.error) {
			data.input.className += ' is-valid';
		}

		return (
			<div className={`form-group`}>
				<label
					htmlFor={`adressecommerce_${data.input.name}`}
					className='form-control-label'>
					{data.input.name}
				</label>
				<input
					{...data.input}
					type={data.type}
					step={data.step}
					required={data.required}
					placeholder={data.placeholder}
					id={`adressecommerce_${data.input.name}`}
				/>
				{isInvalid && <div className='invalid-feedback'>{data.meta.error}</div>}
			</div>
		);
	};

	render() {
		return (
			<form onSubmit={this.props.handleSubmit}>
				<Field component={this.renderField} name='ville' type='text' placeholder='' />

				<Field
					component={this.renderField}
					name='cp'
					type='number'
					placeholder=''
					normalize={(v) => parseFloat(v)}
				/>
				<Field component={this.renderField} name='typedevoie' type='text' placeholder='' />
				<Field component={this.renderField} name='nomdelavoie' type='text' placeholder='' />
				<Field
					component={this.renderField}
					name='coordonneegps'
					type='text'
					placeholder=''
				/>
				<Field
					component={this.renderField}
					name='complementadresse'
					type='text'
					placeholder=''
				/>
				<Field component={this.renderField} name='bister' type='text' placeholder='' />
				<Field component={this.renderField} name='commercebsm' type='text' placeholder='' />

				<button type='submit' className='btn btn-success'>
					Valider
				</button>
			</form>
		);
	}
}

export default reduxForm({
	form: 'adressecommerce',
	enableReinitialize: true,
	keepDirtyOnReinitialize: true,
})(Form);
