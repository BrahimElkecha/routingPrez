import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { FrontComponent } from './front/front.component';
import { BackComponent } from './back/back.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MyNavComponent } from './my-nav/my-nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule } from '@angular/material';

import { RouterModule, Routes } from '@angular/router';

const appRoutes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'front', component: FrontComponent },
  { path: 'back', component: BackComponent }
];
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FrontComponent,
    BackComponent,
    MyNavComponent
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
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
