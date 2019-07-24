import {Component, OnInit} from '@angular/core';
import {AppareilService} from './services/appareil.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  isAuth = false;
  lastUpdate = new Promise((resolve, reject) => {
    const date = new Date();
    setTimeout(
      () => {
        resolve(date);
      }, 2000
    );
  });

  appareilOne = 'Machine à laver';
  appareilTwo = 'Frigo';
  appareilThree = 'Ordinateur';
  appareils: any[];

  constructor(private appareilService: AppareilService) {
    setTimeout(
      () => {
        this.isAuth = true;
      }, 4000
    );
  }
  ngOnInit() {
    this.appareils = this.appareilService.appareils;
  }
  onAllumer() {
    this.appareilService.swtchOnAll();
  }
  onEteindre() {
    if (confirm('Etes-vous sûre de vouloir éteindre tous vos appareils ?')){
      this.appareilService.swtchOffAll();
    } else {
      return null;
    }}
}
