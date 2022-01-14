import React, { Component } from "react";
import { connect } from "react-redux";
import { Link, Redirect } from "react-router-dom";
import PropTypes from "prop-types";
import { retrieve, reset } from "../../actions/commercebsm/show";
import { del } from "../../actions/commercebsm/delete";

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
    if (window.confirm("Are you sure you want to delete this item?"))
      this.props.del(this.props.retrieved);
  };

  render() {
    if (this.props.deleted) return <Redirect to=".." />;

    const item = this.props.retrieved;

    return (
      <div>
        <h1>Show {item && item["@id"]}</h1>

        {this.props.loading && (
          <div className="alert alert-info" role="status">
            Loading...
          </div>
        )}
        {this.props.error && (
          <div className="alert alert-danger" role="alert">
            <span className="fa fa-exclamation-triangle" aria-hidden="true" />{" "}
            {this.props.error}
          </div>
        )}
        {this.props.deleteError && (
          <div className="alert alert-danger" role="alert">
            <span className="fa fa-exclamation-triangle" aria-hidden="true" />{" "}
            {this.props.deleteError}
          </div>
        )}

        {item && (
          <table className="table table-responsive table-striped table-hover">
            <thead>
              <tr>
                <th>Field</th>
                <th>Value</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">horraire</th>
                <td>{this.renderLinks("horraires", item["horraire"])}</td>
              </tr>
              <tr>
                <th scope="row">adresse</th>
                <td>{this.renderLinks("adressecommerces", item["adresse"])}</td>
              </tr>
              <tr>
                <th scope="row">contactcommerce</th>
                <td>
                  {this.renderLinks(
                    "contactcommerces",
                    item["contactcommerce"]
                  )}
                </td>
              </tr>
              <tr>
                <th scope="row">typologie</th>
                <td>{item["typologie"]}</td>
              </tr>
              <tr>
                <th scope="row">accesspmr</th>
                <td>{item["accesspmr"]}</td>
              </tr>
              <tr>
                <th scope="row">datedecreation_reprise</th>
                <td>{item["datedecreation_reprise"]}</td>
              </tr>
              <tr>
                <th scope="row">raison_social</th>
                <td>{item["raison_social"]}</td>
              </tr>
              <tr>
                <th scope="row">statujuridique</th>
                <td>{item["statujuridique"]}</td>
              </tr>
              <tr>
                <th scope="row">siret</th>
                <td>{item["siret"]}</td>
              </tr>
              <tr>
                <th scope="row">siren</th>
                <td>{item["siren"]}</td>
              </tr>
              <tr>
                <th scope="row">gerantducommerce</th>
                <td>{this.renderLinks("gerants", item["gerantducommerce"])}</td>
              </tr>
              <tr>
                <th scope="row">proprietairemur</th>
                <td>
                  {this.renderLinks("proprietaires", item["proprietairemur"])}
                </td>
              </tr>
              <tr>
                <th scope="row">chiffredaffaireannuel</th>
                <td>
                  {this.renderLinks(
                    "chiffredaffaireannuels",
                    item["chiffredaffaireannuel"]
                  )}
                </td>
              </tr>
              <tr>
                <th scope="row">franchise</th>
                <td>{item["franchise"]}</td>
              </tr>
              <tr>
                <th scope="row">nombre_employé</th>
                <td>{item["nombre_employé"]}</td>
              </tr>
              <tr>
                <th scope="row">taillelocaux</th>
                <td>{item["taillelocaux"]}</td>
              </tr>
              <tr>
                <th scope="row">commentaire_besoin</th>
                <td>{item["commentaire_besoin"]}</td>
              </tr>
              <tr>
                <th scope="row">datedecreationReprise</th>
                <td>{item["datedecreationReprise"]}</td>
              </tr>
              <tr>
                <th scope="row">raisonSocial</th>
                <td>{item["raisonSocial"]}</td>
              </tr>
              <tr>
                <th scope="row">nombreEmployé</th>
                <td>{item["nombreEmployé"]}</td>
              </tr>
              <tr>
                <th scope="row">commentaireBesoin</th>
                <td>{item["commentaireBesoin"]}</td>
              </tr>
            </tbody>
          </table>
        )}
        <Link to=".." className="btn btn-primary">
          Back to list
        </Link>
        {item && (
          <Link to={`/commercebsms/edit/${encodeURIComponent(item["@id"])}`}>
            <button className="btn btn-warning">Edit</button>
          </Link>
        )}
        <button onClick={this.del} className="btn btn-danger">
          Delete
        </button>
      </div>
    );
  }

  renderLinks = (type, items) => {
    if (Array.isArray(items)) {
      return items.map((item, i) => (
        <div key={i}>{this.renderLinks(type, item)}</div>
      ));
    }

    return (
      <Link to={`../../${type}/show/${encodeURIComponent(items)}`}>
        {items}
      </Link>
    );
  };
}

const mapStateToProps = (state) => ({
  retrieved: state.commercebsm.show.retrieved,
  error: state.commercebsm.show.error,
  loading: state.commercebsm.show.loading,
  eventSource: state.commercebsm.show.eventSource,
  deleteError: state.commercebsm.del.error,
  deleteLoading: state.commercebsm.del.loading,
  deleted: state.commercebsm.del.deleted,
});

const mapDispatchToProps = (dispatch) => ({
  retrieve: (id) => dispatch(retrieve(id)),
  del: (item) => dispatch(del(item)),
  reset: (eventSource) => dispatch(reset(eventSource)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Show);
