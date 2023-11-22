import { Component, EventEmitter, Output } from '@angular/core';

@Component({
    selector: 'app-img-form',
    templateUrl: './img-form.component.html',
    styleUrls: ['./img-form.component.css'],
})
export class ImgFormComponent {
    @Output() imagesUploaded = new EventEmitter<string[]>();

    uploadedImages: string[] = [];
    formSubmitted = false;

    async handleImagesChange(event: any) {
        const files = event.target.files;

        this.uploadedImages = [];

        for (const file of files) {
            try {
                const dataUrl = (await this.fileToDataUrl(file)) as string;
                this.uploadedImages.push(dataUrl);
            } catch (error) {
                console.error('Error uploading image:', error);
            }
        }
    }

    private fileToDataUrl = (file: any) =>
        new Promise((resolve, reject) => {
            const fileReader = new FileReader();

            fileReader.addEventListener('loadend', () =>
                resolve(fileReader.result)
            );
            fileReader.addEventListener('error', () =>
                reject(new Error('ERROR_UPLOAD_IMAGES'))
            );
            fileReader.addEventListener('abort', () =>
                reject(new Error('ERROR_UPLOAD_IMAGES'))
            );

            fileReader.readAsDataURL(file);
        });

    submitForm(event: Event) {
        event.preventDefault();

        if (this.uploadedImages.length > 0) {
            this.imagesUploaded.emit(this.uploadedImages);
            this.formSubmitted = true;
        }
    }
}
