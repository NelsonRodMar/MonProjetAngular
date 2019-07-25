import { Component, OnInit } from '@angular/core';
import {AppareilService} from '../services/appareil.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-single-appareils',
  templateUrl: './single-appareils.component.html',
  styleUrls: ['./single-appareils.component.scss']
})
export class SingleAppareilsComponent implements OnInit {

  name: string = 'Appareils';
  status: string = 'Statut';

  constructor(private appareilService: AppareilService, private route: ActivatedRoute) { }

  ngOnInit() {
    const id = this.route.snapshot.params['id'];
    this.name = this.appareilService.getAppareilById(+id).name;
    this.status = this.appareilService.getAppareilById(+id).statut;
  }

}
