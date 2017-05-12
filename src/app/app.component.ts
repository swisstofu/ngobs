import { Component } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/observable/of';
import 'rxjs/add/operator/delay';
import 'rxjs/add/operator/map';
import { TriggerSubject } from './trigger-subject.model';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent {
	title = 'app works!';

	subject: TriggerSubject<String[]>;

	constructor() {
		this.subject = new TriggerSubject(Observable.of(['booh', 'cacouille']));
	}

	clickMe() {
		this.subject.trigger();
	}
}
