import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import App from "./App";
import Articles from "./Articles";

const routes = createRoutesFromElements(
  <>
    <Route path="/" element={<App />}>
      <Route index element={<Articles />} />
      <Route path="/Articles" element={<Articles />} />
    </Route>
  </>
);

const router = createBrowserRouter(routes);

export default router;
