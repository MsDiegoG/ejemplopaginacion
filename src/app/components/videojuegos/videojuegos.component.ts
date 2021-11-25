import { Component, OnInit } from '@angular/core';
import { Videojuego } from 'src/app/models/videojuego';
import { ServiceVideojuegos } from 'src/app/services/videojuegos.service';

@Component({
  selector: 'app-videojuegos',
  templateUrl: './videojuegos.component.html',
  styleUrls: ['./videojuegos.component.css']
})
export class VideojuegosComponent implements OnInit {

  public videojuegos!: Array<Videojuego>;
  public page!: number;

  constructor(
    private _service: ServiceVideojuegos,
  ) { }

  ngOnInit(): void {
    this.videojuegos = this._service.getVideojuegos();
  }

}



