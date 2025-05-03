import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { catchError, Observable, throwError } from "rxjs";

@Injectable({
    providedIn :"root"
})
export class UserService {

    constructor(private http :HttpClient){

    }

    addUser(obj:any):Observable<any>{
        return this.http.post("https://api.example.com/users" ,obj).pipe(
            catchError((err)=>{
                return throwError(() => new Error('Something went wrong. Please try again later.'));
            }) 
        )
    }

}