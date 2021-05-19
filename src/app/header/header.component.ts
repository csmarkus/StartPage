import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'sp-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css']
})

export class HeaderComponent implements OnInit {
    currentDate: Date = new Date();
    greeting: string = "Something went wrong";

    constructor() {
        var hour: number = this.currentDate.getHours();
        if (hour >= 0 && hour < 6) {
            this.greeting = "Go To Bed, Craig!";
        } else if (hour >= 6 && hour < 11) {
            this.greeting = "Good Morning, Craig!";
        } else if (hour >= 11 && hour < 16) {
            this.greeting = "Good Afternnon, Craig!";
        } else if (hour >= 16 && hour <= 23) {
            this.greeting = "Good Evening, Craig!";
        }
    }

    ngOnInit(): void {
    }

}
