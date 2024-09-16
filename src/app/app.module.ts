import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { getDatabase, provideDatabase } from '@angular/fire/database';
import {AngularFireModule} from '@angular/fire/compat';
import { environment } from '../environments/environment';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { AngularFireAnalyticsModule } from '@angular/fire/compat/analytics';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { HomeComponent } from './pages/home/home.component';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './pages/sidebar/sidebar.component';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    HttpClientModule,
    CommonModule
  ],
  providers: [
    provideFirebaseApp(() => initializeApp({"projectId":"mypro-immobilier-ef867","appId":"1:386100029441:web:14e04968c465ac5cee7800","storageBucket":"mypro-immobilier-ef867.appspot.com","apiKey":"AIzaSyC4aD3Xbi3beJeasbQ5y3B8bmdMUv5z6fc","authDomain":"mypro-immobilier-ef867.firebaseapp.com","messagingSenderId":"386100029441","measurementId":"G-0B3G6XEKWS"})),
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore()),
    provideDatabase(() => getDatabase()), 
    
    AngularFireAnalyticsModule,
    AngularFirestoreModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
