import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  items:any =[{
    productName:'D3 Wire',
    image:'../../../assets/Best/prod1.jpg',
    category:'Ruler',
    price:'50',
    description:'AMD tool cutter',
  },{
    productName:'D3 Wire',
    image:'../../../assets/Best/prod2.png',
    category:'Ruler',
    price:'50',
    description:'AMD tool cutter',
  },{
    productName:'D3 Wire',
    image:'../../../assets/Best/prod3.jpeg',
    category:'Ruler',
    price:'50',
    description:'AMD tool cutter',
  },{
    productName:'D3 Wire',
    image:'../../../assets/Best/prod4.jpg',
    category:'Ruler',
    price:'50',
    description:'AMD tool cutter',
  },{
    productName:'D3 Wire',
    image:'../../../assets/Best/prod5.jpg',
    category:'Ruler',
    price:'50',
    description:'AMD tool cutter',
  },{
    productName:'D3 Wire',
    image:'../../../assets/Best/prod2.png',
    category:'Ruler',
    price:'50',
    description:'AMD tool cutter',
  },{
    productName:'D3 Wire',
    image:'../../../assets/Best/prod1.jpg',
    category:'Ruler',
    price:'50',
    description:'AMD tool cutter',
  },{
    productName:'D3 Wire',
    image:'../../../assets/Best/prod4.jpg',
    category:'Ruler',
    price:'50',
    description:'AMD tool cutter',
  },{
    productName:'D3 Wire',
    image:'../../../assets/Best/prod3.jpeg',
    category:'Ruler',
    price:'50',
    description:'AMD tool cutter',
  },{
    productName:'D3 Wire',
    image:'../../../assets/Best/prod5.jpg',
    category:'Ruler',
    price:'50',
    description:'AMD tool cutter',
  },{
    productName:'D3 Wire',
    image:'../../../assets/Best/prod1.jpg',
    category:'Ruler',
    price:'50',
    description:'AMD tool cutter',
  },{
    productName:'D3 Wire',
    image:'../../../assets/Best/prod4.jpg',
    category:'Ruler',
    price:'50',
    description:'AMD tool cutter',
  },{
    productName:'D3 Wire',
    image:'../../../assets/Best/prod2.png',
    category:'Ruler',
    price:'50',
    description:'AMD tool cutter',
  }]
  

 menuList=[{name:"MIKROTIK SWITCHES AND ROUTERS",routePath:'/switches-and-routers',icon:'fas fa-server'},
 {name:"UBIQUITI ACCESS POINT PRODUCTS",routePath:'/access-point-products',icon:'fab fa-hive'}, 
 {name:"4G ROUTERS N WIRELESS EXTENDERS",routePath:'/wireless-extenders',icon:'fas fa-wifi'},
 {name:"NETWORKING CABLES CAT6",routePath:'/networking-cables',icon:'fa-solid fa-network-wired'},
 {name:"COMPUTER NETWORKING ACCESSORIES",routePath:'/networking-accessories',icon:'fas fa-server'},
 {name:"LANDLINE HOME IP PHONES",routePath:'/home-ip-phones',icon:'fas fa-phone-alt'},
 {name:"SURVEILLANCE CCTV CAMERAS",routePath:'cctv-cameras',icon:'fas fa-shield-alt'}]
}
