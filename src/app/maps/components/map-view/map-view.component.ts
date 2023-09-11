import { PlacesService } from './../../services/places.service';
import { Component, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
// import { Map, Marker, Popup } from 'mapbox-gl';

@Component({
  selector: 'app-map-view',
  templateUrl: './map-view.component.html',
  styleUrls: ['./map-view.component.css'],
})
export class MapViewComponent implements AfterViewInit {
  @ViewChild('MapView') mapView!: ElementRef;

  constructor(private placesService: PlacesService) {}

  ngAfterViewInit(): void {
    if (!this.placesService.userLocation)
      throw new Error('No hay ubicación del usuario');
    // Aqui renderizamos el mapa
    // const map = new Map({
    //   container: this.mapView.nativeElement,
    //   style: 'mapbox://styles/mapbox/streets-v11',
    //   center: this.placesService.userLocation,
    //   zoom: 9,
    // });

    // const popup = new Popup().setHTML(`
    //   <h6>Aqui estoy</h6>
    //   <p>Estoy en este lugar</p>
    // `);

    // new Marker()
    //   .setLngLat(this.placesService.userLocation)
    //   .setPopup(popup)
    //   .addTo(map);
  }
}
