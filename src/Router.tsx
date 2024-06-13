import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Articles from "./Articles";
import Article from "./Article";
import Contact from "./Contact";
import Layout from "./Layout";
import NotFound from "./NotFound";

const routes = createRoutesFromElements(
  <>
    <Route path="/" element={<Layout />}>
      <Route index element={<Articles />} />
      <Route path="/articles" element={<Articles />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/article/:id?" element={<Article />} />
      <Route path="*" element={<NotFound />} />
    </Route>
  </>
);

const router = createBrowserRouter(routes);

export default router;
