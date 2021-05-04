import { Component, OnInit } from '@angular/core';
import { Post } from './postClass';

const fakePostData = {
  title: '我的標題',
  author: 'John',
  date: 'May 14, 2021',
  image: 'leaf.jpg',
  content:
    '<div><p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minus, deleniti quos accusamus alias, nihil corrupti deserunt error illum quam culpa placeat. Quam quae doloremque vitae voluptatibus, obcaecati non est eos?</p><p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minus, deleniti quos accusamus alias, nihil corrupti deserunt error illum quam culpa placeat. Quam quae doloremque vitae voluptatibus, obcaecati non est eos?</p><h2>次標題</h2><p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minus, deleniti quos accusamus alias, nihil corrupti deserunt error illum quam culpa placeat. Quam quae doloremque vitae voluptatibus, obcaecati non est eos?</p><p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minus, deleniti quos accusamus alias, nihil corrupti deserunt error illum quam culpa placeat. Quam quae doloremque vitae voluptatibus, obcaecati non est eos?</p></div> ',
};

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss'],
})
export class PostComponent implements OnInit {
  postData: Post;
  doc: any;
  constructor() {
    this.postData = fakePostData;
  }

  ngOnInit(): void {
    const parser = new DOMParser();
    const articleElem = document.getElementById('article');
    this.doc = parser.parseFromString(this.postData.content, 'text/html');
    articleElem.appendChild(this.doc.childNodes[0].childNodes[1].firstChild);
  }
}
