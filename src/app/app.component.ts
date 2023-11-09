import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
})
export class AppComponent {
    uploadedImages: string[] = [];
    showCarousel = false;

    updateImages(images: string[]) {
        this.uploadedImages = images;
    }

    startCarousel() {
        this.showCarousel = true;
    }
}
