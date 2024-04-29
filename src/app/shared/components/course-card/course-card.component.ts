import { Component, Input, OnInit } from '@angular/core';
import { Icourse } from '../../models/course';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { CourseFormComponent } from '../course-form/course-form.component';

@Component({
  selector: 'app-course-card',
  templateUrl: './course-card.component.html',
  styleUrls: ['./course-card.component.scss']
})
export class CourseCardComponent implements OnInit {
@Input() fetchData!:Icourse;
  constructor(private _matDialog:MatDialog) { }

  ngOnInit(): void {
  
  }
  onCourseEdit(){
   let dialogConfg = new MatDialogConfig()
   dialogConfg.data =this.fetchData;
   dialogConfg.width='500px';
   dialogConfg.disableClose=false;
   
   const dialogRef = this._matDialog.open(CourseFormComponent,dialogConfg)
   dialogRef.afterClosed()
   .subscribe(res =>{
    this.fetchData = res;
    console.log(this.fetchData);
    
   })
   
  }

}


