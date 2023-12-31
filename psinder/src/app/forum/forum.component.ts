import { AfterViewInit, Component, Inject, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { MapComponent } from '../home/map/map.component';
import { GeolocationService } from '../services/geolocation.services';
import { ForumMockService } from '../services/forummock.service';
import { fromLonLat } from 'ol/proj';
import { DOCUMENT } from '@angular/common';
import { Subscription } from 'rxjs';
import { UserData } from '../../assets/models/userData.model';

interface PostData {
  avatar: string,
  name: string,
  time: string,
  coords: number[]
}

@Component({
  selector: 'app-forum',
  templateUrl: './forum.component.html',
  styleUrls: ['./forum.component.scss']
})
export class ForumComponent implements OnInit, OnDestroy {

  @ViewChild(MapComponent) mapComponent!: MapComponent

  forumPosts: PostData[] = [];

  private subscribtionHolder: Subscription[] = []


  constructor(
    @Inject(DOCUMENT) private document: any,
    private geolocationService: GeolocationService,
    private forumMockService: ForumMockService) { }

  ngOnInit(): void {
    this.document.body.classList.add('overflowHidden');

    this.subscribtionHolder.push( this.forumMockService.mockPosts.subscribe(
      userInfos => {
        userInfos.forEach( (userInfo: UserData) => {
        this.forumPosts.push({
        ...userInfo,
        coords: [userInfo.location.latitude, userInfo.location.longitude]
      })
        })
      }
    ));
  }

  ngOnDestroy(): void {
    this.document.body.classList.remove('overflowHidden');
    this.subscribtionHolder?.forEach(subscribtion => {
      subscribtion.unsubscribe();
    })
  }

  zoomToPost(coords: number[]):void{
    this.geolocationService.zoomMapToUser(fromLonLat([coords[1],coords[0]]),this.mapComponent.map);
  }

}
