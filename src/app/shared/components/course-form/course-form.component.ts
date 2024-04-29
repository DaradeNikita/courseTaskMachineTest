import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Icourse } from '../../models/course';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CourseService } from '../../services/course.service';

@Component({
  selector: 'app-course-form',
  templateUrl: './course-form.component.html',
  styleUrls: ['./course-form.component.scss']
})
export class CourseFormComponent implements OnInit {
 courseForm!:FormGroup;
 courseInfo!:Icourse;
  constructor(
    @Inject(MAT_DIALOG_DATA) private course :Icourse,
    private _fb :FormBuilder,
    private _course :CourseService,
    private _matDialog : MatDialogRef<CourseFormComponent>
  ) {
    this.createForm();
    this.courseInfo = course;
    this.courseForm.patchValue(course)
   }

  ngOnInit(): void {

  }

  createForm(){
    this.courseForm =this._fb.group({
      description :['',Validators.required],
      category :['',Validators.required],
      releaseAt:['',Validators.required],
      longDescription:['',Validators.required],
    })
  }
  saveCourse(){
    if(this.courseForm.valid){
      let updatedObj = {...this.courseForm.value,id :this.courseInfo.id}
      this._course.updateCourse(updatedObj)
      .subscribe(res =>{
        console.log(res);
        this._course.chngeCatg$.next(true)
        this._matDialog.close(updatedObj)
      })
    }
  }
}
