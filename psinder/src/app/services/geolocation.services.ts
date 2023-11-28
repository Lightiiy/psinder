import { Injectable } from "@angular/core";
import { Observable, Subject, from, map } from "rxjs";
import Map from 'ol/Map';
import { Coordinate } from 'ol/coordinate';
import { Geolocation } from '@capacitor/geolocation';
import { AngularFirestore } from "@angular/fire/compat/firestore";
import { GeoLoc } from "../../assets/models/geoLoc.model";
import { UserData } from "../../assets/models/userData.model";

@Injectable({
  providedIn: 'root',
})
export class GeolocationService {
  private userPositionSubject: Subject<number[]>  = new Subject<number[]>();

  readonly USER_COLLECTION = 'Users'
  

  userPosition: Observable<number[]> = this.userPositionSubject.asObservable();

  mockPositions!: Observable<GeoLoc[]>


  constructor(private store: AngularFirestore) {
    const userCollectionRef = this.store.collection(this.USER_COLLECTION);

    this.mockPositions = userCollectionRef.snapshotChanges().pipe(
      map( docs =>
        {
          return docs.map((doc) => (<UserData>doc.payload.doc.data()).location)
        }
        )
    )
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
}