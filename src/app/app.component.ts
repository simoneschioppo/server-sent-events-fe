import { Component, OnInit } from '@angular/core';
import { Observable, scan, tap } from 'rxjs';
import { AppService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  constructor(private appService: AppService) { }

  $res!: Observable<Array<number>>;

  ngOnInit(): void {
    this.$res = this.appService.getServerEvents().pipe(
      scan((acc, value) => {
        acc.push(+value)
        return acc
      }, ([] as Array<number>))

      // Logging scan res: 
      // tap(res => console.log(res))
    )
  }
}
