import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { list, reset } from "../../actions/commercebsm/list";

class List extends Component {
  static propTypes = {
    retrieved: PropTypes.object,
    loading: PropTypes.bool.isRequired,
    error: PropTypes.string,
    eventSource: PropTypes.instanceOf(EventSource),
    deletedItem: PropTypes.object,
    list: PropTypes.func.isRequired,
    reset: PropTypes.func.isRequired,
  };

  componentDidMount() {
    this.props.list(
      this.props.match.params.page &&
        decodeURIComponent(this.props.match.params.page)
    );
  }

  componentDidUpdate(prevProps) {
    if (this.props.match.params.page !== prevProps.match.params.page)
      this.props.list(
        this.props.match.params.page &&
          decodeURIComponent(this.props.match.params.page)
      );
  }

  componentWillUnmount() {
    this.props.reset(this.props.eventSource);
  }

  render() {
    return (
      <div>
        <h1>Commercebsm List</h1>

        {this.props.loading && (
          <div className="alert alert-info">Loading...</div>
        )}
        {this.props.deletedItem && (
          <div className="alert alert-success">
            {this.props.deletedItem["@id"]} deleted.
          </div>
        )}
        {this.props.error && (
          <div className="alert alert-danger">{this.props.error}</div>
        )}

        <p>
          <Link to="create" className="btn btn-primary">
            Create
          </Link>
        </p>

        <table className="table table-responsive table-striped table-hover">
          <thead>
            <tr>
              <th>id</th>
              <th>horraire</th>
              <th>adresse</th>
              <th>contactcommerce</th>
              <th>typologie</th>
              <th>accesspmr</th>
              <th>datedecreation_reprise</th>
              <th>raison_social</th>
              <th>statujuridique</th>
              <th>siret</th>
              <th>siren</th>
              <th>gerantducommerce</th>
              <th>proprietairemur</th>
              <th>chiffredaffaireannuel</th>
              <th>franchise</th>
              <th>nombre_employé</th>
              <th>taillelocaux</th>
              <th>commentaire_besoin</th>
              <th>datedecreationReprise</th>
              <th>raisonSocial</th>
              <th>nombreEmployé</th>
              <th>commentaireBesoin</th>
              <th colSpan={2} />
            </tr>
          </thead>
          <tbody>
            {this.props.retrieved &&
              this.props.retrieved["hydra:member"].map((item) => (
                <tr key={item["@id"]}>
                  <th scope="row">
                    <Link to={`show/${encodeURIComponent(item["@id"])}`}>
                      {item["@id"]}
                    </Link>
                  </th>
                  <td>{this.renderLinks("horraires", item["horraire"])}</td>
                  <td>
                    {this.renderLinks("adressecommerces", item["adresse"])}
                  </td>
                  <td>
                    {this.renderLinks(
                      "contactcommerces",
                      item["contactcommerce"]
                    )}
                  </td>
                  <td>{item["typologie"]}</td>
                  <td>{item["accesspmr"]}</td>
                  <td>{item["datedecreation_reprise"]}</td>
                  <td>{item["raison_social"]}</td>
                  <td>{item["statujuridique"]}</td>
                  <td>{item["siret"]}</td>
                  <td>{item["siren"]}</td>
                  <td>
                    {this.renderLinks("gerants", item["gerantducommerce"])}
                  </td>
                  <td>
                    {this.renderLinks("proprietaires", item["proprietairemur"])}
                  </td>
                  <td>
                    {this.renderLinks(
                      "chiffredaffaireannuels",
                      item["chiffredaffaireannuel"]
                    )}
                  </td>
                  <td>{item["franchise"]}</td>
                  <td>{item["nombre_employé"]}</td>
                  <td>{item["taillelocaux"]}</td>
                  <td>{item["commentaire_besoin"]}</td>
                  <td>{item["datedecreationReprise"]}</td>
                  <td>{item["raisonSocial"]}</td>
                  <td>{item["nombreEmployé"]}</td>
                  <td>{item["commentaireBesoin"]}</td>
                  <td>
                    <Link to={`show/${encodeURIComponent(item["@id"])}`}>
                      <span className="fa fa-search" aria-hidden="true" />
                      <span className="sr-only">Show</span>
                    </Link>
                  </td>
                  <td>
                    <Link to={`edit/${encodeURIComponent(item["@id"])}`}>
                      <span className="fa fa-pencil" aria-hidden="true" />
                      <span className="sr-only">Edit</span>
                    </Link>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>

        {this.pagination()}
      </div>
    );
  }

  pagination() {
    const view = this.props.retrieved && this.props.retrieved["hydra:view"];
    if (!view || !view["hydra:first"]) return;

    const {
      "hydra:first": first,
      "hydra:previous": previous,
      "hydra:next": next,
      "hydra:last": last,
    } = view;

    return (
      <nav aria-label="Page navigation">
        <Link
          to="."
          className={`btn btn-primary${previous ? "" : " disabled"}`}
        >
          <span aria-hidden="true">&lArr;</span> First
        </Link>
        <Link
          to={
            !previous || previous === first ? "." : encodeURIComponent(previous)
          }
          className={`btn btn-primary${previous ? "" : " disabled"}`}
        >
          <span aria-hidden="true">&larr;</span> Previous
        </Link>
        <Link
          to={next ? encodeURIComponent(next) : "#"}
          className={`btn btn-primary${next ? "" : " disabled"}`}
        >
          Next <span aria-hidden="true">&rarr;</span>
        </Link>
        <Link
          to={last ? encodeURIComponent(last) : "#"}
          className={`btn btn-primary${next ? "" : " disabled"}`}
        >
          Last <span aria-hidden="true">&rArr;</span>
        </Link>
      </nav>
    );
  }

  renderLinks = (type, items) => {
    if (Array.isArray(items)) {
      return items.map((item, i) => (
        <div key={i}>{this.renderLinks(type, item)}</div>
      ));
    }

    return (
      <Link to={`../${type}/show/${encodeURIComponent(items)}`}>{items}</Link>
    );
  };
}

const mapStateToProps = (state) => {
  const { retrieved, loading, error, eventSource, deletedItem } =
    state.commercebsm.list;
  return { retrieved, loading, error, eventSource, deletedItem };
};

const mapDispatchToProps = (dispatch) => ({
  list: (page) => dispatch(list(page)),
  reset: (eventSource) => dispatch(reset(eventSource)),
});

export default connect(mapStateToProps, mapDispatchToProps)(List);
