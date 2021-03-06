import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { HeroSearchComponent } from './hero-search.component';

describe('HeroSearchComponent', () => {
    let component: HeroSearchComponent;
    let fixture: ComponentFixture<HeroSearchComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [HeroSearchComponent],
            imports: [
                HttpClientTestingModule,
                RouterTestingModule.withRoutes([]),
            ],
        })
            .compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(HeroSearchComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
