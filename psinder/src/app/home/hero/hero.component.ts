import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { GeolocationService } from '../../services/geolocation.services';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeroComponent implements OnInit{
  
  private imageNames: string[] = [
    "../../../assets/images/1.jpg",
    "../../../assets/images/2.jpg",
    "../../../assets/images/4.jpg",
    "../../../assets/images/3.jpg",
    "../../../assets/images/5.jpg",
    "../../../assets/images/6.jpg",
    "../../../assets/images/7.jpg",
    "../../../assets/images/8.jpg",
    "../../../assets/images/9.jpg",
    "../../../assets/images/10.jpg",
    "../../../assets/images/11.jpg",
    "../../../assets/images/12.jpg",
    "../../../assets/images/13.jpg",
    "../../../assets/images/14.jpg",
    "../../../assets/images/15.jpg"
  ]

  constructor (private changeDetecor: ChangeDetectorRef, private geolocationService: GeolocationService) {
    this.scheduleImageChange();
  }

  ngOnInit(): void {
  }

  getNextImage(): string {
    const index = Math.floor(Math.random() * 100 % 15);
    return this.imageNames[index];
  }

  scheduleImageChange() {
    setTimeout(() => {
      this.getNextImage();
      this.scheduleImageChange();
    }, 10000);
    this.changeDetecor.markForCheck();
  }

  getUserLocation()
  {
    const element = document.getElementById('map');

    if(element)
    {
      element.scrollIntoView({
        behavior:'smooth'
      })
    }
    this.geolocationService.getUserLocation();
  }
}

