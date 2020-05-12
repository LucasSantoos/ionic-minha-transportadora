import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CargasPage } from './cargas.page';

describe('CargasPage', () => {
  let component: CargasPage;
  let fixture: ComponentFixture<CargasPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CargasPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CargasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
