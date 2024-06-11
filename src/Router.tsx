import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Articles from "./Articles";
import Contact from "./Contact";
import Layout from "./Layout";

const routes = createRoutesFromElements(
  <>
    <Route path="/" element={<Layout />}>
      <Route index element={<Articles />} />
      <Route path="/articles" element={<Articles />} />
      <Route path="/contact" element={<Contact />} />
    </Route>
  </>
);

const router = createBrowserRouter(routes);

export default router;
