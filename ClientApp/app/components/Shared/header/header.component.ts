import { Component, Input, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { RequestOptions, Request, RequestMethod } from '@angular/http';


@Component({
    selector: 'shared-header',
    templateUrl: './header.component.html'
})
export class HeaderComponent implements OnInit {
    public user: string;

    ngOnInit() {
        this.user = "Rachel";
    }

    constructor() {
    }


}