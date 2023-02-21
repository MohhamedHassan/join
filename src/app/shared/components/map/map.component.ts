import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {
  @Input() latitude:string
  @Input() longitude:string
  markers=[]
  center: google.maps.LatLngLiteral;
  options: google.maps.MapOptions = {
    mapTypeId: 'hybrid',
    zoomControl: false,
    scrollwheel: false,
    disableDoubleClickZoom: true,
    maxZoom: 15,
    minZoom: 8,
  };
  constructor() { }

  ngOnInit(): void {
    this.center = {
      lat: Number(this.latitude),
      lng: Number(this.longitude)
    };
    this.markers.push({
      position: {
        lat: Number(this.latitude),
        lng: Number(this.longitude)
      },
      options: { animation: google.maps.Animation.BOUNCE }
    })
  }

}
