import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class DataService {
  data: any[] = []
  constructor(private http: HttpClient) {
    this.getJsonData().subscribe((res: any) => {
      this.data = res;
      console.log(res)
    });
  }

  getJsonData():Observable <any> {
    return this.http.get('assets/data.json')
  }
}
