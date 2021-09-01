import { Component, OnInit } from '@angular/core';
import { ArticleService } from 'src/app/shares/services/Articles.service';
import { Article } from '../../../../shares/models/Articles.model';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-admin-articles-add',
  templateUrl: './admin-articles-add.component.html',
  styleUrls: ['./admin-articles-add.component.css']
})
export class AdminArticlesAddComponent implements OnInit {

  constructor(private Arservice: ArticleService, private router: Router) { }

  ngOnInit(): void {
  }

  addArticle(form: NgForm){
    if(confirm("Are you Sure you want to Add this Article?")){
    const value = form.value;
    const newArticle = new Article(value.id,value.title, value.desc, value.content);
    this.Arservice.registerArticle(newArticle).subscribe(
      data => {
        console.log(data);
        alert("Successfully Added")
        this.router.navigate(['dashboard/articles']);
      },
      error => {
        alert("There was an Error with Adding an Article")
      }
       
      );
    }
  }
 
}
