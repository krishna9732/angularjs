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
import { UseroutingComponent } from './userouting/userouting.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { MessageComponent } from './message/message.component';
import { FormsComponent } from './forms/forms.component';
import { ReactiveformComponent } from './reactiveform/reactiveform.component';
import { AngularcrudComponent } from './angularcrud/angularcrud.component';


const routes: Routes = [
  {
    path:'',redirectTo:'Dashboard', pathMatch:'full'
  },
  {
    path:'pipes',
    children:[
      {path:'',component:PipesComponent},
   
    {
      path:'atribinding',component:AtribindingComponent
    },
  ]
  },
  {
    path:'atribinding',component:AtribindingComponent
  },
  {
    path:'custopipe', component:CustompipeComponent
  },
  {
    path:'about',component:AboutComponent
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
  },
  {
    path:'Dashboard',component:UseroutingComponent
  },
  {
    path:'message',component:MessageComponent
  },
  {
    path:'forms',component:FormsComponent
  },
  {
    path:'rectforms',component:ReactiveformComponent
  },
  {
    path:'angularcrud',component:AngularcrudComponent
  },
  {
    path:'**',component:PagenotfoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
 