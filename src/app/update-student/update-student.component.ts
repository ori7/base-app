import { Component, OnInit } from '@angular/core';
import { StudentModel } from '../models/student.model';
import { ActivatedRoute } from '@angular/router';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-update-student',
  templateUrl: './update-student.component.html',
  styleUrls: ['./update-student.component.css']
})
export class UpdateStudentComponent implements OnInit {

  student: StudentModel;

  constructor(private activatedRoute: ActivatedRoute,
    private angularFirestore: AngularFirestore) {

    this.student = <StudentModel>{};
   }

  ngOnInit() {

    this.activatedRoute.params.subscribe(idRes => {
      var id = idRes['id'];        console.log(id);

      this.angularFirestore.collection('students').doc(id).valueChanges().subscribe(res => {
        const student = res;
        console.log(student);

      });
    })
  }

}
