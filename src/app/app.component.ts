import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
})
export class AppComponent {
    uploadedImages: string[] = [];
    showCarousel = false;

    updateImages(images: string[], formSubmitted: boolean) {
        this.uploadedImages = images;
        this.showCarousel = formSubmitted || this.uploadedImages.length > 0;
    }
}
