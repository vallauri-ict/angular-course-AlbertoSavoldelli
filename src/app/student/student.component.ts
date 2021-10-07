import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {
  studentList=[
    {name:'Ettore Esposito',hobby:'Karate',gender:'M'},
    {name:'Edoardo Ababei',hobby:'Calcio',gender:'M'},
    {name:'Fabio Cavallero',hobby:'Calcio',gender:'M'},
    {name:'Lorenzo Cravero',hobby:'Basket',gender:'M'},
    {name:'Martina Velardi',hobby:'Karate',gender:'F'},
    {name:'Alberto Savoldelli',hobby:'Basket',gender:'M'},
    {name:'Paolo Racca',hobby:'Karate',gender:'M'},
    {name:'Giada Valinotto',hobby:'Calcio',gender:'F'},
    {name:'Bianca Teleman',hobby:'Basket',gender:'F'},
    {name:'Gabriele Leone',hobby:'Basket',gender:'M'},
    {name:'Luca Pelissero',hobby:'Calcio',gender:'M'},
  ]

  student:any;
  constructor() {
    let num=Math.floor(Math.random() * this.studentList.length)
    this.student=this.studentList[num];
   }

  ngOnInit(): void {
  }

}
