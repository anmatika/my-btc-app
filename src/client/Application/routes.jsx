import React from 'react';
import {
    Router,
    Route,
    IndexRoute,
    browserHistory,
} from 'react-router';

// route components
import Main from '../../client/views/Main';
import Foo from '../../client/views/Foo/Foo';
import LineChartContainer from '../components/LineChart/LineChartContainer';
import NotFound from '../components/NotFound';

export const renderRoutes = () => (
  <Router history={browserHistory}>
    <Route path="/" component={Main} >
      <IndexRoute component={LineChartContainer} />
      <Route path="price" component={LineChartContainer} />
      <Route path="foo" component={Foo} />
      <Route path="*" component={NotFound} />
    </Route>
  </Router>
);
