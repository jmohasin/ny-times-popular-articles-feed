
import { Injectable } from '@angular/core';
import {Http, Headers, Response, URLSearchParams} from "@angular/http";
import {Observable} from "rxjs";
import { Article } from './article';


@Injectable({
  providedIn: 'root'
})
export class ArticleDataService {
  pItems: Article[] = [];
  private baseUrl: string = "http://api.nytimes.com/svc/mostpopular/v2/mostviewed/all-sections/7.json?api-key=dadbff8a1f094abca79ad5f6369daaf5";

  constructor(private http: Http) { }

  getArticlesFromData(): Observable<Article[]>{
    const headers = new Headers();
	  headers.append('Accept', 'application/json');
    headers.append('Content-Type', 'application/json');
    
    return this.http.get(this.baseUrl,{headers: headers, body:""}).map((response: Response) => response.json());
  }
}