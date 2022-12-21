import { Injectable, NgZone } from "@angular/core";
import { Observable } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class AppService {

    constructor(private _zone: NgZone) { }

    getServerEvents(): Observable<string> {
        return new Observable((subscriber) => {
            const eventSource = new EventSource('http://localhost:3000/extractionSSE');
            eventSource.onmessage = ({ data }) => {
                this._zone.run(() => {
                    subscriber.next(data);
                })
            }
            eventSource.onerror = (error) => {
                this._zone.run(() => {
                    subscriber.error(error);
                })
            }
        })
    }
}