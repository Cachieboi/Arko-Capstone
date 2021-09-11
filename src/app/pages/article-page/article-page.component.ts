import { Component, OnInit } from '@angular/core';
import { ArticleService } from 'src/app/shares/services/Articles.service';
import { article } from '../../shares/models/articleint.model';


@Component({
  selector: 'app-article-page',
  templateUrl: './article-page.component.html',
  styleUrls: ['./article-page.component.css']
})
export class ArticlePageComponent implements OnInit {

  articles: article[] = [];
 

  constructor(private Arservice: ArticleService) { }

  ngOnInit(): void {
    this.showArticles();

  }

  showArticles(){
    this.Arservice.GET_articles().subscribe(data=>{
      this.articles=data;
      console.log(data);
    });
  }

}
