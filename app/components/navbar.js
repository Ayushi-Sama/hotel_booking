/* eslint-disable prettier/prettier */
import Component from '@glimmer/component';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';
import { getOwner } from '@ember/application';
import Login from '../models/login';

export default class NavbarComponent extends Component {
    @tracked openGuestModel = false;

    @action handleGuest() {
        this.openGuestModel = true;
    }
    @tracked openGuestContact = false;

    @action handleContact() {
        this.openGuestContact = true;
    }
}