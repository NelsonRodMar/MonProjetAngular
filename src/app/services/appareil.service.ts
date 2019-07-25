import {Subject} from 'rxjs';
import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';

@Injectable()
export class AppareilService {

  appareilsSubject = new Subject<any[]>();

  private appareils = [];

  constructor(private httpClient: HttpClient) {
  }

  emitAppareilSubject() {
    this.appareilsSubject.next(this.appareils.slice());
  }

  swtchOnAll() {
    for (const appareil of this.appareils) {
      appareil.statut = 'allumé';
    }
  }

  swtchOffAll() {
    for (const appareil of this.appareils) {
      appareil.statut = 'éteint';
    }
  }

  switchOnOne(i: number) {
    this.appareils[i].statut = 'allumé';
  }

  switchOffOne(i: number) {
    this.appareils[i].statut = 'éteint';
  }

  getAppareilById(id: number) {
    const appareil = this.appareils.find(
      (s) => {
        return s.id === id;
      }
    );
    return appareil;
  }

  addAppareil(name: string, statut: string) {
    const appareilObject = {
      id: 0,
      name: '',
      statut: '',
    };
    appareilObject.name = name;
    appareilObject.statut = statut;
    appareilObject.id = this.appareils[(this.appareils.length - 1)].id + 1;
    this.appareils.push(appareilObject);
    this.emitAppareilSubject();
  }

  saveAppareilsToServer() {
    this.httpClient
      .put(environment.FIREBASE_URL + '/appareils.json', this.appareils)
      .subscribe(
        () => {
          console.log('Enregistrement terminé !');
        },
        (error) => {
          console.log('Erreur !' + error);
        }
      );
  }

  getAppareilsFromServer() {
    this.httpClient
      .get<any[]>(environment.FIREBASE_URL + '/appareils.json')
      .subscribe(
        (response) => {
          this.appareils = response;
          this.emitAppareilSubject();
        },
        (error) => {
          console.log('Erreur ! ' + error);
        }
      );
  }
}
