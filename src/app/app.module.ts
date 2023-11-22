// app.module.ts
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { CarouselComponent } from './carousel/carousel.component';
import { ImgFormComponent } from './img-form/img-form.component';

@NgModule({
    declarations: [AppComponent, CarouselComponent, ImgFormComponent],
    imports: [BrowserModule, FormsModule, NgbModule],
    bootstrap: [AppComponent],
})
export class AppModule {}
