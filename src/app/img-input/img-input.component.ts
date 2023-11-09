import { Component, EventEmitter, Output } from '@angular/core';

@Component({
    selector: 'app-img-input',
    templateUrl: './img-input.component.html',
    styleUrls: ['./img-input.component.css'],
})
export class ImgInputComponent {
    @Output() imagesChanged = new EventEmitter<string[]>();

    handleImageChange(event: any) {
        const files = event.target.files;
        const uploadedImages: string[] = [];

        for (const file of files) {
            const reader = new FileReader();

            reader.onload = (e: any) => {
                uploadedImages.push(e.target.result);
            };
            reader.readAsDataURL(file);
        }

        this.imagesChanged.emit(uploadedImages);
    }
}
