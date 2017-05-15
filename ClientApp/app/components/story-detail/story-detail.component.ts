import { Component, Input, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { RequestOptions, Request, RequestMethod } from '@angular/http';


@Component({
    selector: 'story-detail',
    templateUrl: './story-detail.component.html'
})
export class StoryDetailComponent implements OnInit {
    public user: string;

    ngOnInit() {
        this.user = "Rachel";
    }

    constructor() {
    }
}