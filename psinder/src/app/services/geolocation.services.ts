import { Injectable } from "@angular/core";
import { Observable, Subject, from } from "rxjs";
import Map from 'ol/Map';
import { Coordinate } from 'ol/coordinate';
import { Geolocation } from '@capacitor/geolocation';

@Injectable({
  providedIn: 'root',
})
export class GeolocationService {
  private userPositionSubject: Subject<number[]>  = new Subject<number[]>();

  userPosition: Observable<number[]> = this.userPositionSubject.asObservable();

  mockPositions = require('../../assets/mock/MOCK_DATA.json');

  constructor() {
  }

  getUserLocation(){
    console.log('getUserLocation clicked')
    navigator.geolocation.getCurrentPosition((position: GeolocationPosition) =>{
      if(position){
       this.userPositionSubject.next([position.coords.longitude,position.coords.latitude]);
       console.log(position);
      }
    })
    from(Geolocation.getCurrentPosition()).subscribe( {
      next: (position) =>
    
      this.userPositionSubject.next([position.coords.longitude,position.coords.latitude]),
      
    }
    );
  }

  zoomMapToUser(center: Coordinate, map: Map){
    if (map){
      map.getView().animate({
        center,
        zoom: 15,
        duration: 1000,
      })
    }
  }

  getRandomLocation(): number[]
  {
    const length = this.mockPositions.length;
    const index = Math.floor(Math.random() * length) % length;
    return [this.mockPositions[index].lat,this.mockPositions[index].long]
  }
}