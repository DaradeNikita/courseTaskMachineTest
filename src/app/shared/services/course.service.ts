import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { Observable, Subject, map, shareReplay } from 'rxjs';
import { Icourse, IcourseRes } from '../models/course';
import { environment } from 'src/environments/environment';
import { Ilesson, IlessonsRes } from '../models/lesson';

@Injectable({
  providedIn: 'root'
})
export class CourseService implements OnInit{
courseUrl=`${environment.baseUrl}/courses`;
chngeCatg$ :Subject<boolean> = new Subject<boolean>()
  constructor(private _http : HttpClient) { }
  
  
  ngOnInit(): void {
   
  }
  getAllCourses():Observable<Icourse[]>{
return this._http.get<IcourseRes>(this.courseUrl)
.pipe(
  map(res =>{
    console.log(res);
    
    return res['payload']
  }),
  shareReplay()
)
}

fetchCourse(courseId:string):Observable<Icourse>{
  let singleCourse =`${this.courseUrl}/${courseId}`
  return this._http.get<Icourse>(singleCourse)
}

getLessons(courseId:string,pageSize:number=10,filter=""):Observable<Ilesson[]>{
  let lessonUrl=`${environment.baseUrl}/lessons`;
  let params = new HttpParams()
  .set('courseId',courseId)
  .set('pageSize',pageSize)
  .set('filter',filter)
  return this._http.get<IlessonsRes>(lessonUrl,{
    params :params
  })
  .pipe(
    map(res=>{
      return res['payload']
    })
  )
}
updateCourse(updatedCourse:Icourse):Observable<Icourse>{
let updateUrl = `${this.courseUrl}/${updatedCourse.id}`
return this._http.put<Icourse>(updateUrl,updatedCourse)
}

 
}
