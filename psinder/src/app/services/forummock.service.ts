import { Injectable } from "@angular/core";

@Injectable({
  providedIn: 'root',
})
export class ForumMockService { 

  //@ts-ignore
  mockPosts = require('../../assets/mock/MOCK_FORUM.json');

}
