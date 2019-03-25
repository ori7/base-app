import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { StudentModel } from '../models/student.model';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {

  students:StudentModel[];
  constructor(private angularFirestore: AngularFirestore) { }

  ngOnInit(): void {
    this.students = [];
    this.angularFirestore.collection<StudentModel>('students').valueChanges().subscribe(res => {
      this.students = res;console.log(res);
    })
  }
  

}
