import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
export class TriggerSubject<T> extends Subject<T> {
	constructor(private observable: Observable<T>) {
		super();
	}

	trigger() {
		this.observable.subscribe(
			(ok: T) => this.next(ok),
			(error: any) => console.error(error));
	}
}