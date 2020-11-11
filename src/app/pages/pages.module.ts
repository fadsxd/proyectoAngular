import { NgModule } from "@angular/core";

import { SharedModule } from '../shared/shared.module';

import { PAGES_ROUTES } from './pages.routes';

import { DashboardComponent } from './dashboard/dashboard.component';
import { Grafica1Component } from './grafica1/grafica1.component';
import { PagesComponent } from './pages.component';
import { ProgressComponent } from './progress/progress.component';





@NgModule({
    declarations:[
    PagesComponent,
     DashboardComponent,
     ProgressComponent,
     Grafica1Component
     ],
     exports:[
        PagesComponent,
        DashboardComponent,
        ProgressComponent,
        Grafica1Component
    ],
    imports:[
        SharedModule,
        PAGES_ROUTES
    ]
})
export class PagesModule {}