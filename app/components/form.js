import Component from '@glimmer/component';
import { action } from '@ember/object';
import { getOwner } from '@ember/application';
import Login from '../models/login';


export default class FormsController extends Component {
    formLayout = 'vertical';
    email = 'foo@example.com';
    password = null;
    checkbox = false;
    radio = null;
    radioOptions = [
        {
            label: 'Male',
        },
        {
            label: 'Female',
        },
    ];

    get login() {
        return Login.create(getOwner(this).ownerInjection());
    }

    @action
    submit() {
        window.alert('Successfully submitted form data!');
    }
}