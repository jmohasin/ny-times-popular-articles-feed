
import { Injectable } from '@angular/core';
import {Http, Headers, Response, URLSearchParams} from "@angular/http";
import {Observable} from "rxjs";
import { map } from 'rxjs/operators';
import { ArticleMeta } from './article-meta';


@Injectable({
  providedIn: 'root'
})
export class ArticleDataService {
  private baseUrl: string = "http://api.nytimes.com/svc/mostpopular/v2/mostviewed/all-sections/7.json?api-key=dadbff8a1f094abca79ad5f6369daaf5";

  constructor(private http: Http) { }

  getArticleMetaFromData(): Observable<ArticleMeta>{
    const headers = new Headers();
	  headers.append('Accept', 'application/json');
    headers.append('Content-Type', 'application/json');
    
    return this.http.get(this.baseUrl, { headers: headers }).pipe(map((response: Response) => response.json()));
  }
}