import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";
import PropTypes from "prop-types";

class Form extends Component {
  static propTypes = {
    handleSubmit: PropTypes.func.isRequired,
    error: PropTypes.string,
  };

  renderField = (data) => {
    data.input.className = "form-control";

    const isInvalid = data.meta.touched && !!data.meta.error;
    if (isInvalid) {
      data.input.className += " is-invalid";
      data.input["aria-invalid"] = true;
    }

    if (this.props.error && data.meta.touched && !data.meta.error) {
      data.input.className += " is-valid";
    }

    return (
      <div className={`form-group`}>
        <label
          htmlFor={`commercebsm_${data.input.name}`}
          className="form-control-label"
        >
          {data.input.name}
        </label>
        <input
          {...data.input}
          type={data.type}
          step={data.step}
          required={data.required}
          placeholder={data.placeholder}
          id={`commercebsm_${data.input.name}`}
        />
        {isInvalid && <div className="invalid-feedback">{data.meta.error}</div>}
      </div>
    );
  };

  render() {
    return (
      <form onSubmit={this.props.handleSubmit}>
        <Field
          component={this.renderField}
          name="horraire"
          type="text"
          placeholder=""
        />
        <Field
          component={this.renderField}
          name="adresse"
          type="text"
          placeholder=""
        />
        <Field
          component={this.renderField}
          name="contactcommerce"
          type="text"
          placeholder=""
        />
        <Field
          component={this.renderField}
          name="typologie"
          type="text"
          placeholder=""
        />
        <Field
          component={this.renderField}
          name="accesspmr"
          type="checkbox"
          placeholder=""
        />
        <Field
          component={this.renderField}
          name="statujuridique"
          type="text"
          placeholder=""
        />
        <Field
          component={this.renderField}
          name="siret"
          type="number"
          placeholder=""
          normalize={(v) => parseFloat(v)}
        />
        <Field
          component={this.renderField}
          name="siren"
          type="number"
          placeholder=""
          normalize={(v) => parseFloat(v)}
        />
        <Field
          component={this.renderField}
          name="gerantducommerce"
          type="text"
          placeholder=""
        />
        <Field
          component={this.renderField}
          name="proprietairemur"
          type="text"
          placeholder=""
        />
        <Field
          component={this.renderField}
          name="chiffredaffaireannuel"
          type="text"
          placeholder=""
        />
        <Field
          component={this.renderField}
          name="franchise"
          type="checkbox"
          placeholder=""
        />
        <Field
          component={this.renderField}
          name="taillelocaux"
          type="number"
          placeholder=""
          normalize={(v) => parseFloat(v)}
        />
        <Field
          component={this.renderField}
          name="datedecreationReprise"
          type="dateTime"
          placeholder=""
        />
        <Field
          component={this.renderField}
          name="raisonSocial"
          type="text"
          placeholder=""
        />
        <Field
          component={this.renderField}
          name="nombreEmployé"
          type="number"
          placeholder=""
          normalize={(v) => parseFloat(v)}
        />
        <Field
          component={this.renderField}
          name="commentaireBesoin"
          type="text"
          placeholder=""
        />

        <button type="submit" className="btn btn-success">
          Submit
        </button>
      </form>
    );
  }
}

export default reduxForm({
  form: "commercebsm",
  enableReinitialize: true,
  keepDirtyOnReinitialize: true,
})(Form);
