import { create } from "../controlers/doenca.controller.js";

const doencaRoutes = (app) => {
  app.post("/doenca/", create);
};

export default doencaRoutes;