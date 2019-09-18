/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { MyUserService } from './my-user.service';

describe('Service: MyUser', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MyUserService]
    });
  });

  it('should ...', inject([MyUserService], (service: MyUserService) => {
    expect(service).toBeTruthy();
  }));
});
