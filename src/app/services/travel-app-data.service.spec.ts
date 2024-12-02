import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { TravelAppDataService } from './travel-app-data.service';

describe('TravelAppDataService', () => {
  let service: TravelAppDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        provideHttpClient(),
        provideHttpClientTesting()
      ]
    });
    service = TestBed.inject(TravelAppDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
