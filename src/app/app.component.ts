import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  
  students;
  constructor(private angularFirestore: AngularFirestore){
  }

  ngOnInit(): void {
    this.angularFirestore.collection('students').doc('student1').valueChanges().subscribe(res => {
      this.students = res;
    })
  }

  add(name){  //  
    this.angularFirestore.collection('students').doc('student1').set({name: name.value});
  }

}
