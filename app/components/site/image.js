import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class SiteImageComponent extends Component {
//     @tracked heart = false;
@tracked preferredButtonColor = 'transparent'

//   @action 
//   toggle() {
//     this.heart = !this.heart;
//   }

@action
  changeColor() {
    if (this.preferredButtonColor === 'transparent') {
      // this.set('preferredButtonColor', 'red');
      this.preferredButtonColor = 'red';
    } else {
      this.preferredButtonColor = 'transparent';
      // this.set('preferredButtonColor', 'transparent');
    }
  }
}
