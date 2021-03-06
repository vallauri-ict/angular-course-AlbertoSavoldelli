import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {
  @Input() student:any;
  @Output()studentDeleteEvent=new EventEmitter<any>();
  constructor() {
    //this.randomStudentPro();
  }
  
  private randomStudentPro(){
    let n = Math.floor(Math.random() * 2);
    if(n == 1 ) this.student.isPro = true;
  }

  ngOnInit(): void {
    this.randomStudentPro();
  }

  onStudentClick(){
    this.student.isPro = !this.student.isPro;
  }
  onDeleteStudent(){
    this.studentDeleteEvent.emit(this.student);
  }
}
