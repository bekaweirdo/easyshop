import {Component, OnInit} from '@angular/core';
import * as firebase from 'firebase/app';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  loadedFeature = 'recipe';

  onNavigate(feature: string) {
    this.loadedFeature = feature;
  }

  ngOnInit() {
    firebase.initializeApp({
      apiKey: 'AIzaSyB4zxMcUZZZN1g6Ab0DFQdau0wpnr5A2N8',
      authDomain: 'easyshop-4af87.firebaseapp.com',
    });
  }
}
