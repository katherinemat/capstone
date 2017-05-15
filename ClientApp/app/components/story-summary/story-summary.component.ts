import { Component, Input, OnInit } from '@angular/core'; import { Router } from '@angular/router';
import { Story } from '../Shared/story.type';

@Component({
    selector: 'story-summary',
    templateUrl: './story-summary.component.html'
})
export class StorySummaryComponent {

    @Input() storySummary: Story;

    stories: Story[];

    constructor(private router: Router) {
    }

    ngOnInit() {
    }

    goToStoryDetail() {
        this.router.navigate(["detail", "1"]);
    }
}
