import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'sp-container',
    templateUrl: './container.component.html',
    styleUrls: ['./container.component.css']
})
export class ContainerComponent implements OnInit {
    links: any[] = [
        {
            "text": "reddit",
            "url": "https://reddit.com"
        },
        {
            "text": "github",
            "url": "https://github.com/csmarkus"
        }
    ]
    constructor() { }

    ngOnInit(): void {
    }

}
