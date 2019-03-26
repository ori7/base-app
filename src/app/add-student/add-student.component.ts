import { Component, OnInit } from '@angular/core';
import { StudentModel } from '../models/student.model';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.css']
})
export class AddStudentComponent implements OnInit {

  student: StudentModel;

  constructor(private angularFirestore: AngularFirestore) {
    this.student = <StudentModel>{};
  }

  ngOnInit() {

  }

  addStudent(newStudent) {

    this.student.name = newStudent.value.name;
    this.student.city = newStudent.value.city;
    this.student.phone = newStudent.value.phone;

    this.angularFirestore.collection('students').add(this.student);
    
    this.student.name = this.student.city = this.student.phone = null;

  }

}
