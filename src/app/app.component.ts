import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  dummyData = [
    { 'a':'1', 'b':'2', 'n':'10'},
    { 'a':'2', 'b':'3', 'n':'11'},
    { 'a':'3', 'b':'4', 'n':'12'}
  ];

  comment = [
    { 'a':'人参', 'b':'玉ねぎ', 'c':'じゃがいも'},
    { 'a':'牛乳', 'b':'砂糖', 'c':'食パン'}
  ]

  id = '33'

  sheet = [
    { 'optionValue':'sheet1', 'optionText':'Sheet1' },
    { 'optionValue':'sheet2', 'optionText':'Sheet2' },
    { 'optionValue':'sheet3', 'optionText':'Sheet3' }
  ];
}
