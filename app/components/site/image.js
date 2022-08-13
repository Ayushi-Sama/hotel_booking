import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class SiteImageComponent extends Component {
@tracked preferredButtonColor = '';



@action
  changeColor() {
    if (this.preferredButtonColor === '') {
      this.preferredButtonColor = 'red';
    } else {
      this.preferredButtonColor = '';
    }
  }
}
