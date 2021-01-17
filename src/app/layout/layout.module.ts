import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutRoutingModule } from './layout.routing.module';
import { MainComponent } from './main/main.component';
import { LayoutComponent } from './layout.component';
import { HeaderComponent } from './components/header/header.component';
import { SideNavComponent } from './components/side-nav/side-nav.component';
import { FooterComponent } from './components/footer/footer.component';
import { PaginationModule } from '../shared/modules/pagination/pagination.module';
import { ToolsComponent } from './main/tools/tools.component';
import { ActivityComponent } from './main/activity/activity.component';
import { MatricesComponent } from './main/matrices/matrices.component';
import { UserComponent } from './main/activity/user/user.component';
import { SessionsComponent } from './main/activity/sessions/sessions.component';
import { ReportsComponent } from './main/activity/reports/reports.component';
import { SummaryComponent } from './main/matrices/summary/summary.component';
import { MtbfComponent } from './main/matrices/mtbf/mtbf.component';
import { FormsModule } from '@angular/forms';
import { DynamicSessionComponent } from './main/matrices/dynamic-session/dynamic-session.component';


@NgModule({
  declarations: [LayoutComponent, MainComponent, HeaderComponent, SideNavComponent, FooterComponent, ToolsComponent, ActivityComponent, MatricesComponent, UserComponent, SessionsComponent, ReportsComponent, SummaryComponent, MtbfComponent, DynamicSessionComponent],
  imports: [CommonModule, LayoutRoutingModule, PaginationModule, FormsModule],
})
export class LayoutModule { }
