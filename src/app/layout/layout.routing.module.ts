import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './layout.component';
import { MainComponent } from './main/main.component';
import { ChartsModule } from 'ng2-charts';
import { CustomChartsModule } from '../shared/modules/charts/charts.module';


const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: '',
        component: MainComponent
      },
      {
        path: 'queue-info', loadChildren: () => import('./queue-info/queue-info.module').then(m => m.QueueInfoModule)
      },
    ]
  },
  { path: '**', redirectTo: '' }
];


@NgModule({
  imports: [RouterModule.forChild(routes), ChartsModule, CustomChartsModule],
  exports: [RouterModule, ChartsModule, CustomChartsModule],
})
export class LayoutRoutingModule { }
