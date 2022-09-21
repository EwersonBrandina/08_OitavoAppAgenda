import { TestBed } from '@angular/core/testing';

import { AgendaDadosService } from './agenda-dados.service';

describe('AgendaDadosService', () => {
  let service: AgendaDadosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AgendaDadosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
