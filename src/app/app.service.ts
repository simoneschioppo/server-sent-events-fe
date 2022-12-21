import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})
export class AppService { 

    getHello() { 
        const eventSource = new EventSource('http://localhost:3000/topicSSE');
        eventSource.onmessage = ({ data }) => {
            console.log(data); 
        }
    }
}