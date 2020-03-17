import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CustompipeComponent } from './custompipe/custompipe.component';
import { PipesComponent } from './pipes/pipes.component';
import { AboutComponent } from './about/about.component';
import { AtribindingComponent } from './atribinding/atribinding.component';
import { ExcelComponent } from './excel/excel.component';
import { GroupingComponent } from './grouping/grouping.component';
import { NgclassuseComponent } from './ngclassuse/ngclassuse.component';
import { NgclassComponent } from './ngstyle/ngclass.component';
import { TestComponent } from './test/test.component';
import { TwowaybindingComponent } from './twowaybinding/twowaybinding.component';


const routes: Routes = [
  {
    path:'pipes',component:PipesComponent
  },
  {
    path:'custopipe', component:CustompipeComponent
  },
  {
    path:'about',component:AboutComponent
  },
  {
    path:'atribing',component:AtribindingComponent
  },
  {
    path:'excel',component:ExcelComponent
  },
  {
    path:'grouping',component:GroupingComponent
  },
  {
    path:'ngclassuse',component:NgclassuseComponent
  },
  {
    path:'ngstyle',component:NgclassComponent
  },
  {
    path:'test',component:TestComponent
  },
  {
    path:'twowaybinding',component:TwowaybindingComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
 