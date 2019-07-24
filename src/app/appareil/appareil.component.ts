import {Component, Input, OnInit} from '@angular/core';
import {AppareilService} from '../services/appareil.service';

@Component({
  selector: 'app-appareil',
  templateUrl: './appareil.component.html',
  styleUrls: ['./appareil.component.scss']
})
export class AppareilComponent implements OnInit {

  @Input() index: number;
  @Input() appareilName: string;
  @Input() appareilStatut: string;

  constructor(private appareilService: AppareilService) { }

  ngOnInit() {
  }
  getStatus() {
    return this.appareilStatut;
  }
  getColor() {
    if (this.appareilStatut === 'allumé') {
      return 'green';
    } else if (this.appareilStatut === 'éteint') {
      return 'red';
    }
  }
  onSwitch() {
    if (this.appareilStatut === 'allumé') {
      this.appareilService.switchOffOne(this.index);
    } else if (this.appareilStatut === 'éteint') {
      this.appareilService.switchOnOne(this.index);
    }
  }
}
