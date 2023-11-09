// app.module.ts
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { CarouselComponent } from './carousel/carousel.component';
import { ImgInputComponent } from './img-input/img-input.component';

@NgModule({
    declarations: [AppComponent, ImgInputComponent, CarouselComponent],
    imports: [BrowserModule, FormsModule, NgbModule],
    bootstrap: [AppComponent],
})
export class AppModule {}
