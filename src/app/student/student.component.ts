import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {
  studentList=[
    {name:'Ettore Esposito',hobby:'Karate',gender:'M',isPro:false},
    {name:'Edoardo Ababei',hobby:'Calcio',gender:'M',isPro:false},
    {name:'Fabio Cavallero',hobby:'Calcio',gender:'M',isPro:true},
    {name:'Lorenzo Cravero',hobby:'Basket',gender:'M',isPro:false},
    {name:'Martina Velardi',hobby:'Karate',gender:'F',isPro:true},
    {name:'Alberto Savoldelli',hobby:'Basket',gender:'M',isPro:false},
    {name:'Paolo Racca',hobby:'Karate',gender:'M',isPro:false},
    {name:'Giada Valinotto',hobby:'Calcio',gender:'F',isPro:true},
    {name:'Bianca Teleman',hobby:'Basket',gender:'F',isPro:false},
    {name:'Gabriele Leone',hobby:'Basket',gender:'M',isPro:true},
    {name:'Luca Pelissero',hobby:'Calcio',gender:'M',isPro:false},
  ]

  student:any;
  constructor() {
    this.randomStudent();
  }
  
  private randomStudent(){
    let num=Math.floor(Math.random() * this.studentList.length);
    this.student=this.studentList[num];
  }

  ngOnInit(): void {
  }

  onStudentClick(){
    this.randomStudent();
  }

}
