import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SlidesComponent } from './slides/slides.component';
import { AppSlideshowComponent } from './app-slideshow/app-slideshow.component';

@NgModule({
    declarations: [AppComponent, SlidesComponent, AppSlideshowComponent],
    imports: [BrowserModule],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
