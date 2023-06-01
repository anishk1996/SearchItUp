import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  getData(text: string) {
    return this.http.get('https://searchitupnode.vercel.app/data/get?search='+text, { responseType: 'json' })
    .pipe(
      (data: any) => {
        return data;
      }
    );
  }
}
