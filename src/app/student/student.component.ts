import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { StudentModel } from '../models/student.model';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {
  student: StudentModel;

  constructor(private activatedRoute: ActivatedRoute,
    private angularFireStore: AngularFirestore,
    private router: Router) { }

  ngOnInit() {

    this.activatedRoute.params.subscribe(res => {
      const id = res['id'];
      this.angularFireStore.collection('students').doc<StudentModel>(id).valueChanges().subscribe(studentRes => {
        this.student = studentRes;
        this.student.id = id;
      });
    });
  }

  delite(){

    this.angularFireStore.collection('students').doc(this.student.id).delete();
    this.router.navigate(['/']);
  }

  update(){

    this.router.navigate(['/update/:' + this.student.id]);
  }

}
