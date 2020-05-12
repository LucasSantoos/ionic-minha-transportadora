import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TransportePage } from './transporte.page';

describe('TransportePage', () => {
  let component: TransportePage;
  let fixture: ComponentFixture<TransportePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TransportePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TransportePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
