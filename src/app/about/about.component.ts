import { Component, OnInit } from '@angular/core';
import {Leader} from '../shared/leader';
import {LeaderService} from '../services/leader.service';
import { Params, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  leaders:Leader[];

  constructor( private leaderService:LeaderService,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
   this.leaders = this.leaderService.getLeaders();
  }

}
