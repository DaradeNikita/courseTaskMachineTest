import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatDialogModule} from '@angular/material/dialog';
import {MatInputModule} from '@angular/material/input';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSelectModule} from '@angular/material/select';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatTabsModule} from '@angular/material/tabs';
import {MatNativeDateModule} from '@angular/material/core';
import {MatListModule} from '@angular/material/list';
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';


const materialArr =[MatButtonModule,MatCardModule,MatDatepickerModule,MatDialogModule,MatFormFieldModule,
  MatIconModule,MatInputModule,MatListModule,MatNativeDateModule,MatSelectModule,MatSidenavModule,MatTabsModule,MatToolbarModule

]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ...materialArr
  ],exports :[
    ...materialArr
  ]
})
export class MaterialModule { }
