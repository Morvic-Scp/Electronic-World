import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.scss']
})
export class ProductPageComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    this.myThumbnail=this.selectedItem[0].image
    this.myFullresImage=this.selectedItem[0].image
  }

  myThumbnail='';
  myFullresImage="";

  selectedItem=[{
    productName:'D3 Wire',
    image:'../../../assets/Best/prod1.jpg',
    category:'Ruler',
    price:'50',
    description:'AMD tool cutter',
    productDetails:'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugit molestiae incidunt earum dolorum, vel unde beatae maxime, nostrum quia error modi eius sint veritatis quae necessitatibus quidem ab nemo vero laboriosam, a sed odit distinctio corrupti! Saepe eligendi qui corrupti deleniti, delectus iure aut modi quisquam consequuntur velit quae sint animi nam commodi inventore sequi voluptas ullam dolorem iste voluptatem!',
  }]
}
