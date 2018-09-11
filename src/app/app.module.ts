import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { FrontComponent } from './front/front.component';
import { BackComponent } from './back/back.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MyNavComponent } from './my-nav/my-nav.component';
import { LayoutModule } from '@angular/cdk/layout';

import { MatToolbarModule,
         MatButtonModule,
         MatSidenavModule,
         MatIconModule,
         MatListModule } from '@angular/material';

import {MatCardModule} from '@angular/material/card';

import { RouterModule, Routes } from '@angular/router';
import { DevFrontComponent } from './front/dev-front/dev-front.component';
import { DevBackComponent } from './back/dev-back/dev-back.component';

const appRoutes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'front', component: FrontComponent },
  { path: 'front/:id', component: DevFrontComponent },
  { path: 'back', component: BackComponent },
  { path: 'back/:id/show', component: DevBackComponent }
];
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FrontComponent,
    BackComponent,
    MyNavComponent,
    DevFrontComponent,
    DevBackComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatCardModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
