const { Router } = require("express");
const { ParseIntMiddleware, AuthMiddleware } = require("../middlewares");

module.exports = function({ ZoomController }) {
  const router = Router();

  router.get("/getSignature", ZoomController.getSignature);

  return router;
};
