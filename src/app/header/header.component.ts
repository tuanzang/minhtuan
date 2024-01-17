import { Component } from '@angular/core';
import { IMenu } from '../InterFace/Menu';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
menus:IMenu[]=[
  {
    id:1,
    name:'Trang chủ',
    url:"trang-chu",
    parent:0
  },
  {
    id:2,
    name:'Giới thiệu',
    url:"trang-chu",
    parent:0
  },
  {
    id:3,
    name:'Tin tức',
    url:"trang-chu",
    parent:0
  },
  {
    id:4,
    name:'Liên hệ ',
    url:"trang-chu",
    parent:0
  },

]
checkChildrent(mid:number){
  let check = false;
    for (let m of this.menus){
      if (m.parent == mid){
        check= true;
        break;
      }
    }
    return check;
}
}
