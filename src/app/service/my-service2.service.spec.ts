import { TestBed } from '@angular/core/testing';

import { MyService2Service } from './my-service2.service';

describe('MyService2Service', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MyService2Service = TestBed.get(MyService2Service);
    expect(service).toBeTruthy();
  });
});
