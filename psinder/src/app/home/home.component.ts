import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  providers: [AngularFirestore]
})
export class HomeComponent implements OnInit {

  constructor(private store: AngularFirestore) { 
    this.store.collection('Users').get().subscribe(
      value => console.log(value.docs)
    )}

  ngOnInit(): void {
  }

}
