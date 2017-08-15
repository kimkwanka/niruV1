import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Helmet from 'react-helmet';
import PropTypes from 'prop-types';

import Header from './pages/shared/Header';

import routesArr from '../shared/routes';

const App = ({ serverMatch }) => {
// If <App /> is rendered on the server we need to provide the serverMatch prop
// since StaticRouter can only render a single Route (Switch only works on client side).
// On the client though, just return all routes and let Switch do the work.

  const routes = serverMatch ?
    <Route key={serverMatch.path} {...serverMatch} /> :
    routesArr.map(route => <Route key={route.path} {...route} />);

  return (
    <div>
      <Helmet
        htmlAttributes={{ lang: 'en' }} // amp takes no value
        titleTemplate="niru | %s"
        titleAttributes={{ itemprop: 'name', lang: 'en' }}
        meta={[
          { name: 'description', content: 'Universal fullstack boilerplate' },
        ]}
      />
      <Header />
      <main>
        <Switch>
          {routes}
        </Switch>
      </main>
    </div>
  );
};

App.propTypes = {
  serverMatch: PropTypes.objectOf(PropTypes.shape),
};

App.defaultProps = {
  serverMatch: null,
};

export default App;
