import { Component, OnInit } from '@angular/core';
import { Icourse } from '../../models/course';
import { CourseService } from '../../services/course.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
getAllCourses!:Array<Icourse>;
begineerCourseArr!:Icourse[];
advancedCourseArr!:Icourse[];
  constructor(private _course :CourseService) { }

  ngOnInit(): void {  
    this.fetchCourses()
    this._course.chngeCatg$
    .subscribe(res =>{
      console.log(res);
      if(res){
        this.fetchCourses()
      }
    })
  }
  fetchCourses(){
    this._course.getAllCourses()
    .subscribe(res =>{
      this.begineerCourseArr = res.filter(c=>c.category==="BEGINNER");
      console.log(this.begineerCourseArr);
     
      this.advancedCourseArr = res.filter(c =>c.category ==="ADVANCED")
      console.log(this.advancedCourseArr);
      
    })
  }

}
