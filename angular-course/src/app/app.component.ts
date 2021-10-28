import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
   @ViewChild("txtName")txtName!:ElementRef;
  title = '5 INF B 2021/22';
  studentList1=[
    {name:'Ettore Esposito',hobby:'Karate',gender:'M',isPro:false},
    {name:'Edoardo Ababei',hobby:'Calcio',gender:'M',isPro:false},
    {name:'Fabio Cavallero',hobby:'Calcio',gender:'M',isPro:false},
    {name:'Lorenzo Cravero',hobby:'Basket',gender:'M',isPro:false},
    {name:'Martina Velardi',hobby:'Karate',gender:'F',isPro:false},
    {name:'Alberto Savoldelli',hobby:'Basket',gender:'M',isPro:false},
    {name:'Paolo Racca',hobby:'Karate',gender:'M',isPro:false},
    {name:'Giada Valinotto',hobby:'Calcio',gender:'F',isPro:false},
    {name:'Bianca Teleman',hobby:'Basket',gender:'F',isPro:false},
    {name:'Gabriele Leone',hobby:'Basket',gender:'M',isPro:false},
    {name:'Luca Pelissero',hobby:'Calcio',gender:'M',isPro:false},
  ]
  hobbies=["Karate","Padel","Calcio","Basket"]
  studentList:any=[];
  studentName:string="";
  studentGender:string = "M";
  studentHobby:string = "";
  constructor(){
    for(let i = 0;i < 4;i++)
    {
      let num = Math.floor(Math.random() * this.studentList1.length);
      let tempStudent = this.studentList1[num];
      this.studentList.push(tempStudent);
      this.studentList1.splice(num,1);
    }
  }
  onAddStudent(){
    let newStudent={name:this.studentName,hobby:this.studentHobby,gender:this.studentGender,isPro:false};
    this.studentList.push(newStudent);
    this.studentName="";
    this.txtName.nativeElement.focus();
  }
  onDeleteStudent(index:number){
    this.studentList.splice(index,1)
  }
}

