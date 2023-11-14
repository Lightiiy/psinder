import { Component,  Input, OnInit} from '@angular/core';

interface PostData {
  avatar: string,
  name: string,
  time: string,
  coords: number[]
}

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {

  @Input() postData!: PostData;

  constructor() { }

  ngOnInit(): void {

  }

}
