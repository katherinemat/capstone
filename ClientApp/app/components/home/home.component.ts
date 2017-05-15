import { Component, Input, OnInit } from '@angular/core';import { Router } from '@angular/router';
import { Story } from '../Shared/story.type';
import { StoryDetail } from '../Shared/story-detail.type';
import { StoryService } from '../Shared/story.service';

@Component({
    selector: 'home',
    templateUrl: './home.component.html'
})
export class HomeComponent {
     stories: Story[];

    constructor(private storyService: StoryService) {
    }

    ngOnInit() {
        this.storyService.getStories()
            .then(results => {
                this.stories = results;
            });
    }
}
