const { createContainer, asClass, asValue, asFunction } = require("awilix");

//  config
const config = require("../config");
const app = require(".");

// services
const { UserService, ZoomService, AuthService } = require("../services");

// controllers
const {
  UserController,
  ZoomController,
  AuthController,
} = require("../controllers");

// routes
const {
  UserRoutes,
  ZoomRoutes,
  AuthRoutes,
} = require("../routes/index.routes");
const Routes = require("../routes");

// models
const { User } = require("../models");

// repositories
const { UserRepository } = require("../repositories");

const container = createContainer();

container
  .register({
    app: asClass(app).singleton(),
    router: asFunction(Routes).singleton(),
    config: asValue(config),
  })
  .register({
    AuthRoutes: asFunction(AuthRoutes).singleton(),
    UserRoutes: asFunction(UserRoutes).singleton(),
    ZoomRoutes: asFunction(ZoomRoutes).singleton(),
  })
  .register({
    AuthController: asClass(AuthController.bind(AuthController)).singleton(),
    UserController: asClass(UserController.bind(UserController)).singleton(),
    ZoomController: asClass(ZoomController.bind(ZoomController)).singleton(),
  })
  .register({
    AuthService: asClass(AuthService).singleton(),
    UserService: asClass(UserService).singleton(),
    ZoomService: asClass(ZoomService).singleton(),
  })
  .register({
    UserRepository: asClass(UserRepository).singleton(),
  })
  .register({
    User: asValue(User),
  });

module.exports = container;
