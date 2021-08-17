import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { HeroService } from './hero.service';
import { Hero } from './hero';
import { of } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';

describe('HeroService', () => {
  let httpClientSpy: { get: jasmine.Spy };
  let heroService: HeroService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        RouterTestingModule.withRoutes([]),
      ],
    });
    heroService = TestBed.inject(HeroService);
    httpClientSpy = jasmine.createSpyObj('HttpClient', ['get']);
    heroService = new HeroService(httpClientSpy as any);
  });

  it('should be created', () => {
    expect(heroService).toBeTruthy();
  });

  it('should return expected heroes (HttpClient called once)', (done: DoneFn) => {
    const expectedHeroes: Hero[] =
      [{ id: 1, name: 'A' }, { id: 2, name: 'B' }];
    httpClientSpy.get.and.returnValue(of(expectedHeroes));
    heroService.getHeroes().subscribe(
      heroes => {
        expect(heroes).toEqual(expectedHeroes, 'expected heroes');
        done();
      },
      done.fail
    );
    expect(httpClientSpy.get.calls.count()).toBe(1, 'one call');
  });

  it('should return an error when the server returns a 404', (done: DoneFn) => {
    const errorResponse = new HttpErrorResponse({
      error: 'test 404 error',
      status: 404, statusText: 'Not Found'
    });
    httpClientSpy.get.and.returnValue(of(errorResponse));
    heroService.getHeroes().subscribe(
      error => {
        const message = "test 404 error"
        expect(message).toContain('test 404 error');
        done();
      }
    );
  });
});
