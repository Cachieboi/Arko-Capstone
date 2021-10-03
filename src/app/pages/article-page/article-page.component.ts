import { Component, OnInit } from '@angular/core';
import { ArticleService } from 'src/app/shares/services/Articles.service';
import { article } from '../../shares/models/articleint.model';


@Component({
  selector: 'app-article-page',
  templateUrl: './article-page.component.html',
  styleUrls: ['./article-page.component.css']
})
export class ArticlePageComponent implements OnInit {

  
 p: number = 1;
  count: Number = 5;
articles: article[] = []
    constructor(private Arservice: ArticleService) { }

    ngOnInit() {
        // an example array of 150 items to be paged
        this.showArticles();
    }

    showArticles(){
      this.Arservice.GET_articles().subscribe(data=>{
        this.articles=data;
        console.log(data);
      });
    }

  
}
