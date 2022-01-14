// client/src/index.js
import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { reducer as form } from 'redux-form';
import { Route, Switch } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import {
  ConnectedRouter,
  connectRouter,
  routerMiddleware
} from 'connected-react-router';
import 'bootstrap/dist/css/bootstrap.css';
import 'font-awesome/css/font-awesome.css';
// Import your reducers and routes here
import Welcome from './pages/Welcome';
//import de lentity gerant
import gerant from './reducers/gerant/';
import gerantRoutes from './routes/gerant';
//import de lentity horaire
import horraire from './reducers/horraire/';
import horraireRoutes from './routes/horraire';
// import de l'entity proprietaire
import proprietaireRoutes from './routes/proprietaire';
import proprietaire from './reducers/proprietaire/';
// import de l'entity coordonneegps
import coordoneegps from './reducers/coordoneegps/';
import coordoneegpsRoutes from './routes/coordoneegps';
// import de l'entity contactcommerce
import contactcommerce from './reducers/contactcommerce/';
import contactcommerceRoutes from './routes/contactcommerce';
// import de l'entity commercebsm
import commercebsm from './reducers/commercebsm/';
import commercebsmRoutes from './routes/commercebsm';
// import de l'entity chiffredaffaireannuel
import chiffredaffaireannuel from './reducers/chiffredaffaireannuel/';
import chiffredaffaireannuelRoutes from './routes/chiffredaffaireannuel';
// import de l'entity adressecommerce
import adressecommerceRoutes from './routes/adressecommerce';
import adressecommerce from './reducers/adressecommerce/';












const history = createBrowserHistory();
const store = createStore(
  combineReducers({
    router: connectRouter(history),
    form,
    gerant,
    horraire,
    proprietaire,
    coordoneegps,
    contactcommerce,
    commercebsm,
    chiffredaffaireannuel,
    adressecommerce,
    /* Add your reducers here */
  }),
  applyMiddleware(routerMiddleware(history), thunk)
);

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <Switch>
        <Route path="/" component={Welcome} strict={true} exact={true}/>
        {/* Add your routes here */}
        { gerantRoutes }
        { horraireRoutes }
        { proprietaireRoutes }
        { coordoneegpsRoutes }
        { contactcommerceRoutes }
        { commercebsmRoutes }
        { chiffredaffaireannuelRoutes }
        { adressecommerceRoutes }
        <Route render={() => <h1>Not Found</h1>} />
      </Switch>
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root')
);