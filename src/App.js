import { Spin } from "antd";
import { Suspense } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.scss";
import { userRoute } from "./constant/Route";
import PublicRoute from "./Routes/PublicRoute";

function App() {
  return (
    <Suspense fallback={<Spin />}>
      <BrowserRouter>
        <Switch>
          {userRoute.map((c, index) => {
            const Component = c.component;
            return (
              <Route
                exact
                key={index}
                path={userRoute.path}
                render={() => (
                  <PublicRoute>
                    <Component />
                  </PublicRoute>
                )}></Route>
            );
          })}
        </Switch>
      </BrowserRouter>
    </Suspense>
  );
}

export default App;
