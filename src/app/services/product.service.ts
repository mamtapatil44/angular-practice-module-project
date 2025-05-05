import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable({providedIn:"root"})
export class ProductService{
     baseUrl ='https://dummyjson.com/products';
     constructor(private http :HttpClient){}
     getAll(): Observable<any[]> {
        console.log("agealll")
        return this.http.get<any[]>(this.baseUrl);
      }
    
      getById(id: string): Observable<any> {
        return this.http.get<any>(`${this.baseUrl}/${id}`);
      }
    
      addProduct(product: any): Observable<any> {
        return this.http.post<any>(this.baseUrl, product);
      }
    
      updateProduct(id: string, product: any): Observable<any> {
        return this.http.put<any>(`${this.baseUrl}/${id}`, product);
      }
    
      deleteProduct(id: string): Observable<any> {
        return this.http.delete<any>(`${this.baseUrl}/${id}`);
      }
}