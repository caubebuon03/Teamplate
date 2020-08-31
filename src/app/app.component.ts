import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit {
  menus =[{name:'Trang chủ',url:'',disabled:false,child:null}, {name:'Các hãng sản xuất',disabled:false,url:'#',child:
  [{name:'Apple',url:'#'},{name:'SamSung',url:'#'},{name:'-',url:''},{name:'Vsmart',url:'#'},
  {name:'Bphone',url:'#'}]}, {name:'Tin túc',url:'',disabled:true,child:null},{name:'Trợ giúp',url:'',disabled:true,child:null}
] ;
  constructor() { }

  ngOnInit(): void {
  }

}