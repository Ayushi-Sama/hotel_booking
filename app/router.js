import EmberRouter from '@ember/routing/router';
import config from 'hotel/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function () {
  this.route('about');
  this.route('guest');
  this.route('contact');
  this.route('login');
  // this.route('room');
  this.route('room', { path: '/rooms/:room_id' });
});
