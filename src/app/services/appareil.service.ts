export class AppareilService {
  appareils = [
    {
      name: 'Machine à laver',
      statut: 'éteint'
    },
    {
      name: 'Frigo',
      statut: 'allumé'
    },
    {
      name: 'Ordinateur',
      statut: 'éteint'
    }
  ];
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
}
