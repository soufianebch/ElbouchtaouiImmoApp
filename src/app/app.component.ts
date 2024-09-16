import { Component, inject, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  loggedUserData: any;
  products$: Observable<any[]> | undefined;
  
  constructor( private firestore: AngularFirestore){
    
  
    
  }

  ngOnInit() {
    
  }


  readUser(){
    const localData = localStorage.getItem("realUser");
    if(localData){
      this.loggedUserData = JSON.parse(localData)
    }
  }

  logout(){
    localStorage.removeItem("realUser");
    this.loggedUserData = null;
  }
}
