import { Component, OnInit } from '@angular/core';
import { EncabezadoComponent } from 'src/app/components/encabezado/encabezado.component';
import { ActivatedRoute } from '@angular/router';
import { Subscriber } from 'rxjs';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.page.html',
  styleUrls: ['./detalle.page.scss'],
})
export class DetallePage implements OnInit {

  personaje=null;

  constructor(private activatedRoute:ActivatedRoute) 
  {
      this.activatedRoute.queryParams.subscribe(params =>
        {this.personaje = JSON.parse(params.personaje);});
  }

  ngOnInit() 
  {
    console.log(this.personaje);
  }
}
