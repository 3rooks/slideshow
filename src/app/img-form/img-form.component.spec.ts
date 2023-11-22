import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImgFormComponent } from './img-form.component';

describe('ImgFormComponent', () => {
    let component: ImgFormComponent;
    let fixture: ComponentFixture<ImgFormComponent>;

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [ImgFormComponent],
        });
        fixture = TestBed.createComponent(ImgFormComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
