import EmberRouter from "@ember/routing/router";
import config from "./config/environment";

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('experience');
  this.route('about-me');
  this.route('services');
  this.route('projects');
});

export default Router;
