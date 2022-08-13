import Component from '@ember/component';
import { inject as service } from '@ember/service';

export default Component.extend({
  media: service(),
  doSomething() {
    this.get('media.isMobile'); // => true
  }
});