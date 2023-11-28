import { Injectable } from "@angular/core";
import { AngularFirestore } from "@angular/fire/compat/firestore";
import { Observable, map } from "rxjs";
import { UserData } from "../../assets/models/userData.model";

@Injectable({
  providedIn: 'root',
})
export class ForumMockService { 

  readonly USER_COLLECTION = 'Users'

  mockPosts!: Observable<UserData[]>

   constructor(private store: AngularFirestore) {

    const userCollectionRef = this.store.collection(this.USER_COLLECTION);

    this.mockPosts = userCollectionRef.snapshotChanges().pipe(
      map( docs =>
        {
          return docs.map((doc) => <UserData>doc.payload.doc.data())
        }
        )
    )
   }



}
