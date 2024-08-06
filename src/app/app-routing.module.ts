import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SectionOneComponent } from './components/section-one/section-one.component';
import { SectionTwoComponent } from './components/section-two/section-two.component';
import { SectionThreeComponent } from './components/section-three/section-three.component';
import { SectionFourComponent } from './components/section-four/section-four.component';

const routes: Routes = [
  { path: '', component: SectionOneComponent },
  { path: 'section-two', component: SectionTwoComponent },
  { path: 'section-three', component: SectionThreeComponent },
  { path: 'section-four', component: SectionFourComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
