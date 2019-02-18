import { Component, OnInit, Input } from '@angular/core';
import { ICOsService } from 'src/app/core/icos.service';

@Component({
  selector: 'app-icos',
  templateUrl: './icos.component.html',
  styleUrls: ['./icos.component.scss']
})
export class ICOsComponent implements OnInit {
  @Input() checked: boolean;
  icos: Array<Object> = [];
  icoCount: number;
  favoriteICOs: Array<Object> = [];
  favoriteCount: number;
  isFavorate: true;
  liveICOs: [];
  liveCount: number;
  upcomingICOs: [];
  upcomingCount: number;
  finishedICOs: [];
  finishedCount: number;

  getAllICOs = () => {
    const arr: [] = [];
    this.icosService.getAllICOs().subscribe(data => this.liveICOs = data.contextWrites.to.ico.live);
    arr.push(...this.liveICOs);

    this.icosService.getAllICOs().subscribe(data => this.upcomingICOs = data.contextWrites.to.ico.upcoming);
    arr.push(...this.upcomingICOs);

    this.icosService.getAllICOs().subscribe(data => this.finishedICOs = data.contextWrites.to.ico.finished);
    arr.push(...this.finishedICOs);

    this.icoCount = arr.length;
    return this.icos = arr;
  }

  getLiveICOs = () => {
    this.icosService.getLiveICOs().subscribe(data => this.icos = data.contextWrites.to.ico.live);
  }

  getLiveCount = () => {
    this.icosService.getAllICOs().subscribe(data => {
      return this.liveCount = data.contextWrites.to.ico.live.length;
    });
  }

  getUpcomingICOs = () => {
    this.icosService.getUpcomingICOs().subscribe(data => this.icos = data.contextWrites.to.ico.upcoming);
  }

  getUpcomingCount = () => {
    this.icosService.getUpcomingICOs().subscribe(data => {
      return this.upcomingCount = data.contextWrites.to.ico.upcoming.length;
    });
  }

  getFinishedICOs = () => {
    this.icosService.getFinishedICOs().subscribe(data => this.icos = data.contextWrites.to.ico.finished);
  }

  getFinishedCount = () => {
    this.icosService.getFinishedICOs().subscribe(data => {
      return this.finishedCount = data.contextWrites.to.ico.finished.length;
    });
  }

  getFavoriteICOs = () => {
    this.icos = this.favoriteICOs;
    console.log(this.icos);
  }

  addToFavorites = (ico) => {
    if (this.favoriteICOs.includes(ico)) {
      ico.isFavorate = false;

      const index = this.favoriteICOs.indexOf(ico);
      this.favoriteICOs.splice(index, 1);
    } else {
      ico.isFavorate = true;

      this.favoriteICOs.push(ico);
    }

    this.favoriteCount = this.favoriteICOs.length;
  }


  constructor(private icosService: ICOsService) { }

  ngOnInit() {
    this.getAllICOs();
    this.getLiveCount();
    this.getUpcomingCount();
    this.getFinishedCount();
  }
}
