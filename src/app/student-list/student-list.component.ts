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
    this.angularFirestore.collection<StudentModel>('students').snapshotChanges().subscribe(snapshotRes => {
      this.students = [];
      snapshotRes.map(studentRes => {
        const student: StudentModel = studentRes.payload.doc.data();
        student.id = studentRes.payload.doc.id;
        this.students.push(student);
      });
    });
  }
  

}
