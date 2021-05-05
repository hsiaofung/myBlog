import { Component, OnInit } from '@angular/core';
import { Post } from './postClass';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss'],
})
export class PostComponent implements OnInit {
  postData: Post;
  doc: any;
  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    const parser = new DOMParser();
    const articleElem = document.getElementById('article');

    this.getPost().subscribe((res) => {
      this.postData = res;
      this.doc = parser.parseFromString(this.postData.content, 'text/html');
      articleElem.appendChild(this.doc.childNodes[0].childNodes[1].firstChild);
    });
  }

  getPost(): Observable<Post> {
    return this.http.get<Post>('http://localhost:3000/myBlog/post');
  }
}
