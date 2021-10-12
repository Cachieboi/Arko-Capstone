import { Component, OnInit } from '@angular/core';
import { Article } from '../../../../shares/models/Articles.model';
import { ArticleService } from 'src/app/shares/services/Articles.service';

@Component({
  selector: 'app-admin-articles-list',
  templateUrl: './admin-articles-list.component.html',
  styleUrls: ['./admin-articles-list.component.css']
})
export class AdminArticlesListComponent implements OnInit {

  constructor(private Arservice: ArticleService) { }

  articles: Article[] = [];

  p: number = 1;
  ngOnInit(): void {
    this.showArticles();
  }

  showArticles(){
    this.Arservice.GET_articles().subscribe(data=>{
      this.articles=data;
      this.articles.reverse();
      console.log(data);
    });
  }

  deleteClick(article){
    if(confirm('Are you sure??')){
      this.Arservice.DELETE_article(article.id).subscribe(data=>{
        alert("Successfully Deleted The Article");
        window.location.reload();
      },
      error =>{
        alert("There was an Error with Deleting the Article")
      })
      

    } 
  }

}
