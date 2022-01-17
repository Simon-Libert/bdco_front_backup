import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import { retrieve, reset } from '../../actions/adressecommerce/show';
import { del } from '../../actions/adressecommerce/delete';

class Show extends Component {
	static propTypes = {
		retrieved: PropTypes.object,
		loading: PropTypes.bool.isRequired,
		error: PropTypes.string,
		eventSource: PropTypes.instanceOf(EventSource),
		retrieve: PropTypes.func.isRequired,
		reset: PropTypes.func.isRequired,
		deleteError: PropTypes.string,
		deleteLoading: PropTypes.bool.isRequired,
		deleted: PropTypes.object,
		del: PropTypes.func.isRequired,
	};

	componentDidMount() {
		this.props.retrieve(decodeURIComponent(this.props.match.params.id));
	}

	componentWillUnmount() {
		this.props.reset(this.props.eventSource);
	}

	del = () => {
		if (window.confirm('Are you sure you want to delete this item?'))
			this.props.del(this.props.retrieved);
	};

	render() {
		if (this.props.deleted) return <Redirect to='..' />;

		const item = this.props.retrieved;

		return (
			<div>
				<h1>Show {item && item['@id']}</h1>

				{this.props.loading && (
					<div className='alert alert-info' role='status'>
						Loading...
					</div>
				)}
				{this.props.error && (
					<div className='alert alert-danger' role='alert'>
						<span className='fa fa-exclamation-triangle' aria-hidden='true' />{' '}
						{this.props.error}
					</div>
				)}
				{this.props.deleteError && (
					<div className='alert alert-danger' role='alert'>
						<span className='fa fa-exclamation-triangle' aria-hidden='true' />{' '}
						{this.props.deleteError}
					</div>
				)}

				{item && (
					<table className='table table-responsive table-striped table-hover'>
						<thead>
							<tr>
								<th>Field</th>
								<th>Value</th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<th scope='row'>Ville</th>
								<td>{item['ville']}</td>
							</tr>
							<tr>
								<th scope='row'>Code Postal</th>
								<td>{item['cp']}</td>
							</tr>
							<tr>
								<th scope='row'>Type de voie</th>
								<td>{item['typedevoie']}</td>
							</tr>
							<tr>
								<th scope='row'>Nom de la voie</th>
								<td>{item['nomdelavoie']}</td>
							</tr>
							<tr>
								<th scope='row'>Coordonnées Gps</th>
								<td>{this.renderLinks('coordoneegps', item['coordonneegps'])}</td>
							</tr>
							<tr>
								<th scope='row'>Complément d'adresse</th>
								<td>{item['complementadresse']}</td>
							</tr>
							<tr>
								<th scope='row'>bister</th>
								<td>{item['bister']}</td>
							</tr>
							<tr>
								<th scope='row'>commercebsm</th>
								<td>{this.renderLinks('commercebsms', item['commercebsm'])}</td>
							</tr>
						</tbody>
					</table>
				)}
				<Link to='..' className='btn btn-primary'>
					Retour à la liste
				</Link>
				{item && (
					<Link to={`/adressecommerces/edit/${encodeURIComponent(item['@id'])}`}>
						<button className='btn btn-warning'>Modifier</button>
					</Link>
				)}
				<button onClick={this.del} className='btn btn-danger'>
					Supprimer
				</button>
			</div>
		);
	}

	renderLinks = (type, items) => {
		if (Array.isArray(items)) {
			return items.map((item, i) => <div key={i}>{this.renderLinks(type, item)}</div>);
		}

		return <Link to={`../../${type}/show/${encodeURIComponent(items)}`}>{items}</Link>;
	};
}

const mapStateToProps = (state) => ({
	retrieved: state.adressecommerce.show.retrieved,
	error: state.adressecommerce.show.error,
	loading: state.adressecommerce.show.loading,
	eventSource: state.adressecommerce.show.eventSource,
	deleteError: state.adressecommerce.del.error,
	deleteLoading: state.adressecommerce.del.loading,
	deleted: state.adressecommerce.del.deleted,
});

const mapDispatchToProps = (dispatch) => ({
	retrieve: (id) => dispatch(retrieve(id)),
	del: (item) => dispatch(del(item)),
	reset: (eventSource) => dispatch(reset(eventSource)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Show);
