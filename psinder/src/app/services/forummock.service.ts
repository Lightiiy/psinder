import { Injectable } from "@angular/core";

@Injectable({
  providedIn: 'root',
})
export class ForumMockService { 

  mockPosts = require('../../assets/mock/MOCK_FORUM.json');

}
