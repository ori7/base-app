import { Component, OnInit } from '@angular/core';
import { StudentModel } from '../models/student.model';
import { ActivatedRoute, Router } from '@angular/router';
import { AngularFirestore } from '@angular/fire/firestore';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-update-student',
  templateUrl: './update-student.component.html',
  styleUrls: ['./update-student.component.css']
})
export class UpdateStudentComponent implements OnInit {

  student: StudentModel;
  id: string;
  private studentsSubscription: Subscription;


  constructor(private activatedRoute: ActivatedRoute,
    private angularFirestore: AngularFirestore,
    private router: Router) {

    this.student = <StudentModel>{};
  }

  ngOnInit() {

    this.activatedRoute.params.subscribe(idRes => {
      this.id = idRes['id'];
      this.subscribeStudent(this.id);
    });
  }

  subscribeStudent(id) {

    this.studentsSubscription = this.angularFirestore.collection('students').doc<StudentModel>(id).valueChanges().subscribe(res => {
      this.student = res;
    });
  }

  updateStudent() {

    if (!this.studentsSubscription.closed) {
      this.studentsSubscription.unsubscribe();
    }
    this.angularFirestore.collection('students').doc(this.id).update(this.student).catch(eRes => {
      this.subscribeStudent(this.id);
    });
    this.router.navigate(['/student/' + this.id]);
  }

}
