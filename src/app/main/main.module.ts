import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main.component';
import { HomeComponent } from './component/home/home.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    MainComponent,
    HomeComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '', component: MainComponent,
        children: [
          { path: '', component: HomeComponent },
        ]
      }
    ]),
  ]
})
export class MainModule { }
