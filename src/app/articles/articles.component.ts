import { Component, OnInit } from '@angular/core';
import { Article } from './article';
import { ArticleMeta } from './article-meta';
import { ArticleDataService } from './article-data.service';
import { Media } from './media';
import { MediaMetadata } from './media-metadata';
@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.css']
})
export class ArticlesComponent implements OnInit {

  articles: Article[];
  media: Media[];
  mediaMetadata: MediaMetadata[];
  constructor(private _articlesDataService: ArticleDataService) { }

  ngOnInit() {
    this._articlesDataService.getArticleMetaFromData().subscribe((data: ArticleMeta) => {
      
      console.dir(data.results);
      this.articles = data['results'];
      this.media = this.articles[0].media;
      console.log('First Media ', this.media[0]);
      this.mediaMetadata = this.media[0]['media-metadata'];
      console.log('First mediaMetadata ', this.mediaMetadata);
    });
  }

}
