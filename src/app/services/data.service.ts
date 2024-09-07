import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject, Subject } from 'rxjs';
import { MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition } from '@angular/material/snack-bar';

@Injectable({
    providedIn: 'root',
})
export class DataService {


    constructor(private snackbar: MatSnackBar) { }


    horizontalPosition: MatSnackBarHorizontalPosition = 'center';
    verticalPosition: MatSnackBarVerticalPosition = 'top';

    openSnackbar(msg: any) {
        this.snackbar.open(msg, 'x', {
            duration: 5000,
            horizontalPosition: this.horizontalPosition,
            verticalPosition: this.verticalPosition,
        })
    }
    openSnackbarwithOk(msg: any) {
        this.snackbar.open(msg, 'Ok', {
            duration: 5000,
            horizontalPosition: this.horizontalPosition,
            verticalPosition: this.verticalPosition,
        })
    }
    successSnackbar(msg: any) {
        this.snackbar.open(msg, '', {
            duration: 5000,
            horizontalPosition: this.horizontalPosition,
            verticalPosition: this.verticalPosition,
        })
    }

}
