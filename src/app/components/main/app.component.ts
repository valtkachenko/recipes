import {Component, OnInit} from '@angular/core';
import {MatSnackBar} from '@angular/material/snack-bar';
import {timer} from 'rxjs';
import {debounce} from 'rxjs/operators';
import {AppService} from '../../services/app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {

  private httpError$ = this.appService.httpError$.pipe(debounce(() => timer(500)));
  private snackBarConfig = {
    duration: 15000,
  };

  public constructor(
    private appService: AppService,
    private snackBar: MatSnackBar,
  ) {
  }

  public ngOnInit(): void {
    this.httpError$.subscribe((error) => {
      switch (error.status) {
        case 0:
          this.snackBar.open('No internet connection', 'Close', this.snackBarConfig);
          break;

        case 402:
          this.snackBar.open('Api key error', 'Close', this.snackBarConfig);
          break;

        case 500:
          this.snackBar.open('HTTP Error', 'Close', this.snackBarConfig);
          break;
      }
    });
  }
}
