import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { BehaviorSubject, catchError, Observable, throwError } from "rxjs";

@Injectable({
    providedIn :"root"
})
export class UserService {
    private userSource = new BehaviorSubject<string>('');
    userSource$ = this.userSource.asObservable();

    private userData = new BehaviorSubject<Object>({});
    userData$ = this.userData.asObservable();

    constructor(private http :HttpClient){

    }
  updateUserSource(name:string){
    this.userSource.next(name)

  }

  updateUserData(obj:any){
    this.userData.next(obj)

  }

    addUser(obj:any):Observable<any>{
        return this.http.post("https://api.example.com/users" ,obj).pipe(
            catchError((err)=>{
                return throwError(() => new Error('Something went wrong. Please try again later.'));
            }) 
        )
    }

}