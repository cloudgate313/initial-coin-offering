import { Component, OnInit } from '@angular/core';
import { ICOsService } from 'src/app/core/icos.service';

@Component({
  selector: 'app-icos',
  templateUrl: './icos.component.html',
  styleUrls: ['./icos.component.scss']
})
export class ICOsComponent implements OnInit {
  icos: [];
  favoriteICOs: [];
  liveICOs: [];
  upcomingICOs: [];
  completedICOs: [];


  getAllICOs = () => {
    const arr: [] = [];
    this.icosService.getAllICOs().subscribe(data => this.liveICOs = data.contextWrites.to.ico.live);
    arr.push(...this.liveICOs);

    this.icosService.getAllICOs().subscribe(data => this.upcomingICOs = data.contextWrites.to.ico.upcoming);
    arr.push(...this.upcomingICOs);

    this.icosService.getAllICOs().subscribe(data => this.completedICOs = data.contextWrites.to.ico.finished);
    arr.push(...this.completedICOs);

    this.icos = arr;
  }

  constructor(private icosService: ICOsService) { }

  ngOnInit() {
  }

}
