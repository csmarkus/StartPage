import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ContainerComponent } from './container/container.component';
import { LinkComponent } from './link/link.component';
import { HeaderComponent } from './header/header.component';

@NgModule({
    declarations: [
        AppComponent,
        ContainerComponent,
        LinkComponent,
        HeaderComponent
    ],
    imports: [
        BrowserModule
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
