import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, debounceTime, distinctUntilChanged, startWith, switchMap } from 'rxjs';
import { Icourse } from '../../models/course';
import { CourseService } from '../../services/course.service';
import { Ilesson } from '../../models/lesson';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.scss']
})
export class CourseComponent implements OnInit {
  courseId!:string;
  singleCourseInfo$!:Observable<Icourse>;
  lesson$! :Observable<Ilesson[]>;
  lessonForm! :FormGroup
  constructor(private _route : ActivatedRoute,
    private _course:CourseService,
    private _fb :FormBuilder
  ) {}

  ngOnInit(): void {
    // this.createLessonForm
    this.lessonForm=this._fb.group({
      lesson :['',Validators.required]
    })
    this.courseId = this._route.snapshot.params['courseId']
    console.log(this.courseId);
    this.singleCourseInfo$ = this._course.fetchCourse(this.courseId)
    this.lesson$ = this._course.getLessons(this.courseId)
    console.log(this.lesson$);
   this.lesson$= this.lessonForm.get('lesson')
    ?.valueChanges
    .pipe(
      startWith(''),
      debounceTime(1000),
      distinctUntilChanged(),
      switchMap(val =>this._course.getLessons(this.courseId,10,val))
    )as Observable<Ilesson[]>
    
    
  }

  // createLessonForm(){
  //   this.lessonForm=this._fb.group({
  //     lesson :['',Validators.required]
  //   })
  }

