import { i18nMetaToJSDoc } from '@angular/compiler/src/render3/view/i18n/meta';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { article } from '../../../shares/models/articleint.model';
import { ArticleService } from 'src/app/shares/services/Articles.service';



@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.css']
})
export class ArticlesComponent implements OnInit {

  constructor(private router: Router, private route:ActivatedRoute, private Arservice: ArticleService) { }

  articles: article[] = [];
  PhotoFilePath: String;
  PhotoFileName: String;
  imageURL = this.Arservice.PhotoUrl


  ngOnInit(): void {
    this.showArticles();
    console.log(this.showArticles());
  }

  onMoreArticles(){
    this.router.navigate(['more']);
  }

  showArticles(){
    this.Arservice.GET_articles().subscribe(data=>{
      this.articles=data;
      this.articles.reverse();
      console.log(data);
    });
  }

}
