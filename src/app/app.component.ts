import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
   @ViewChild("txtName")txtName!:ElementRef;
  title = '5 INF B 2021/22';
  // studentList=[
  //   {name:'Ettore Esposito',hobby:'Karate',gender:'M',isPro:false},
  //   {name:'Edoardo Ababei',hobby:'Calcio',gender:'M',isPro:false},
  //   {name:'Fabio Cavallero',hobby:'Calcio',gender:'M',isPro:false},
  //   {name:'Lorenzo Cravero',hobby:'Basket',gender:'M',isPro:false},
  //   {name:'Martina Velardi',hobby:'Karate',gender:'F',isPro:false},
  //   {name:'Alberto Savoldelli',hobby:'Basket',gender:'M',isPro:false},
  //   {name:'Paolo Racca',hobby:'Karate',gender:'M',isPro:false},
  //   {name:'Giada Valinotto',hobby:'Calcio',gender:'F',isPro:false},
  //   {name:'Bianca Teleman',hobby:'Basket',gender:'F',isPro:false},
  //   {name:'Gabriele Leone',hobby:'Basket',gender:'M',isPro:false},
  //   {name:'Luca Pelissero',hobby:'Calcio',gender:'M',isPro:false},
  // ]
  hobbies=["Karate","Padel","Calcio","Motori"]
  studentList:any[]=[];
  studentName:string="";
  studentGeneder:string="M";
  studentHobby:string="";

  onAddStudent(){
    let newStudent={name:this.studentName,hobby:this.studentHobby,gender:this.studentGeneder,isPro:false};
    this.studentList.push(newStudent);
    this.studentName="";
    this.txtName.nativeElement.focus();
  }
  
}

