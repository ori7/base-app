import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { StudentModel } from '../models/student.model';
import { AngularFirestore } from '@angular/fire/firestore';
import { Subscription } from 'rxjs';

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
    private studentsSubscription: Subscription;

  ngOnInit() {

    this.activatedRoute.params.subscribe(res => {
      const id = res['id'];
      this.subscribeStudent(id);
    });
  }

  subscribeStudent(id) {
    
    this.studentsSubscription = this.angularFireStore.collection('students').doc<StudentModel>(id).valueChanges().subscribe(studentRes => {
      this.student = studentRes;
      this.student.id = id;
    });
  }

  delite(){console.log(this.student.id);

    if (!this.studentsSubscription.closed) {
      this.studentsSubscription.unsubscribe();
    }
    this.angularFireStore.collection('students').doc(this.student.id).delete().catch(exRes => {
      this.subscribeStudent(this.student.id);
    });
    this.router.navigate(['/']);
  }

  update(){

    this.router.navigate(['/update/' + this.student.id]);
  }

}
