import { Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef, OnDestroy } from '@angular/core';
import Map from 'ol/Map';
import TileLayer from 'ol/layer/Tile';
import OSM from 'ol/source/OSM';
import View from 'ol/View';
import { fromLonLat } from 'ol/proj';
import { Coordinate } from 'ol/coordinate';
import VectorLayer from 'ol/layer/Vector';
import VectorSource from 'ol/source/Vector';
import { Overlay } from 'ol';
import { GeolocationService } from '../../services/geolocation.services';
import { Subscription } from 'rxjs';

interface MockCoordinates {
  lat: number
  long: number,
}

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MapComponent implements OnInit, OnDestroy {

  map!: Map;

  waypointOverlay!: Overlay;
  
  private subscribtionHolder: Subscription[] = []

  constructor(private geoLocationService: GeolocationService) {}

  ngOnInit(): void {
    this.initMap();
    this.initExamplePositions();
    this.subscribtionHolder.push(this.geoLocationService.userPosition.subscribe((position) => {
        if(position === undefined)
        {
          return;
        }
        const center = fromLonLat([position[0],position[1]])
        this.geoLocationService.zoomMapToUser(center, this.map);
        this.addWaypoint(position[0],position[1], "🏡");
      }
    ));
  }

  ngOnDestroy(): void {
    this.subscribtionHolder?.forEach(subscribtion => {
      subscribtion.unsubscribe();
    })
  }

  initMap(){
    this.map = new Map({
      target: 'map', 
      layers: [
        new TileLayer({
          source: new OSM() 
        })
      ],
      view: new View({
        center: [0, 0], 
        zoom: 2 
      }),
      controls: []
    });

   this.waypointOverlay = new Overlay({
      positioning: 'center-center',
      stopEvent: false
    });

    this.map.addOverlay(this.waypointOverlay);

  }



   addWaypoint(longitude: number,  latitude: number, emoji: string): void {
    const waypointOverlay = new Overlay({
      positioning: 'center-center',
      stopEvent: false,
    });

      waypointOverlay.setPosition(fromLonLat([longitude, latitude]));
      const waypointElement = document.createElement('div');
      waypointElement.innerText = emoji;

      waypointOverlay.setElement(waypointElement);

      this.map.addOverlay(waypointOverlay);
    
  }

  initExamplePositions(){
    const mockPositionsArray: MockCoordinates[] = this.geoLocationService.mockPositions;
    const length = mockPositionsArray.length;
    for (let i = 0; i < length; i++) {
      const latitude = mockPositionsArray[i].lat; 
      const longitude = mockPositionsArray[i].long; 
      this.addWaypoint(longitude, latitude, "🐕");
    }
  }

  private getRandomNumberInRange(min: number, max: number): number {
    return Math.random() * (max - min) + min;
  }
}

