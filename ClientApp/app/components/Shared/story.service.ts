import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/Rx';

import { StoryDetail } from './story-detail.type';
import { Story } from './story.type';

@Injectable()
export class StoryService {
    constructor(private http: Http) { }

    getStories() {
        return this.http.get('api/News/GetStories')
            .map(response => response.json() as Story[])
            .toPromise();
    }

    getStoryDetails(id: string) {
        return this.http.get('api/News/GetStoryDetail/${id}')
            .map(response => response.json() as StoryDetail)
            .toPromise();
    }
}