import { Component } from '@angular/core';

@Component({
  selector: 'app-competition',
  templateUrl: './competition.component.html',
  styleUrls: ['./competition.component.scss']
})
export class CompetitionComponent {
  leaderboard = [
    { position: 1, name: 'Max', points: 1000 },
    { position: 2, name: 'Lisa', points: 800 },
    { position: 3, name: 'Markus', points: 600 },
    { position: 4, name: 'Anna', points: 400 },
    { position: 5, name: 'Simon', points: 200 },
  ];

}
