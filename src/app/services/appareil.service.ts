import {Subject} from 'rxjs';

export class AppareilService {

  appareilsSubject = new Subject<any[]>();

  private appareils = [
    {
      id: 1,
      name: 'Machine à laver',
      statut: 'éteint'
    },
    {
      id: 2,
      name: 'Frigo',
      statut: 'allumé'
    },
    {
      id: 3,
      name: 'Ordinateur',
      statut: 'éteint'
    }
  ];

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
}
