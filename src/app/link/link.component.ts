import { Component, Input, OnInit } from '@angular/core';
import { ILink } from './link';

@Component({
    selector: '[sp-link]',
    templateUrl: './link.component.html',
    styleUrls: ['./link.component.css']
})
export class LinkComponent implements OnInit {
    @Input()
    link!: ILink;

    constructor() { }

    ngOnInit(): void {
    }

}
