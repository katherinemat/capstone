import { Component, Input, OnInit } from '@angular/core';import { Router } from '@angular/router';
import { Story } from '../Shared/story.type';

@Component({
    selector: 'home',
    templateUrl: './home.component.html'
})
export class HomeComponent {
    stories: Story[];

    constructor(private router: Router) {
    }

    ngOnInit() {
        this.stories = [
            { title: "test title", author: "test author", date: "12-12-2016", content: "some test content goes in here" },
            { title: "test title2", author: "test author2", date: "12-12-2015", content: "some test content 2 goes in here" },
            { title: "test title2", author: "test author2", date: "12-12-2015", content: "some test content 2 goes in here" },
            { title: "test title2", author: "test author2", date: "12-12-2015", content: "some test content 2 goes in here" },
            { title: "test title2", author: "test author2", date: "12-12-2015", content: "some test content 2 goes in here" },
            { title: "test title2", author: "test author2", date: "12-12-2015", content: "some test content 2 goes in here" }
        ]
    }
}
