import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { AddStudentComponent } from './add-student/add-student.component';
import { StudentComponent } from './student/student.component';
import { UpdateStudentComponent } from './update-student/update-student.component';

const routes: Routes = [
  { path:'', component: HomeComponent },
  { path: 'about', component: AboutComponent},
  { path: 'add', component: AddStudentComponent},
  { path: 'student/:id', component: StudentComponent},
  { path: 'update/:id', component: UpdateStudentComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
