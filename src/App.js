import React from "react";
import { Route, Switch } from "react-router-dom";

import Home from "./pages/Home";
import Episode from "./pages/Episode";
import Character from "./pages/Character";
import Location from "./pages/Location";

import * as routes from "./constants/routes";

function App() {
  return (
    <Switch>
      <Route
        path={`${routes.EPISODE}/:episodId`}
        render={(routeProps) => <Episode {...routeProps} />}
      />
      <Route
        path={`${routes.CHARACTER}/:characterId`}
        render={(routeProps) => <Character {...routeProps} />}
      />
      <Route
        path={`${routes.LOCATION}/:locationId`}
        render={(routeProps) => (
          <Location key={routeProps.location.key} {...routeProps} />
        )}
      />
      <Route
        path={routes.HOME}
        render={(routeProps) => <Home {...routeProps} />}
      />
    </Switch>
  );
}

export default App;
