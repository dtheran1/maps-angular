import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
// import mapboxgl from 'mapbox-gl'; // or "const mapboxgl = require('mapbox-gl');"

// TO MAKE THE MAP APPEAR YOU MUST
// ADD YOUR ACCESS TOKEN FROM
// https://account.mapbox.com
// Tengo que loguearme para obtener el token y no es gratis
// mapboxgl.accessToken = '<your access token here>';
if (!navigator.geolocation) {
  alert('Geolocation is not supported');
  throw new Error('Geolocation is not supported');
}

platformBrowserDynamic()
  .bootstrapModule(AppModule)
  .catch((err) => console.error(err));
