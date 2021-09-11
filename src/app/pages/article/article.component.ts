import { Component, OnInit } from '@angular/core';
import { ArticleService } from 'src/app/shares/services/Articles.service';
import { Router, ActivatedRoute } from '@angular/router';
import { article } from '../../shares/models/articleint.model';
import { EditorModule, TINYMCE_SCRIPT_SRC } from '@tinymce/tinymce-angular';


@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {

  imageURL = this.Arservice.PhotoUrl

  constructor(private Arservice: ArticleService, private router: Router,private route: ActivatedRoute) { }

  id: Number;
  title: String;
  desc: String;
  content : String;
  thisArticle : article;
 

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.title = this.route.snapshot.params['title'];
    this.Arservice.GET_article(this.id).subscribe((data)=>{
    this.thisArticle = data;
    

    
      console.log(data);
  });

  }
}
