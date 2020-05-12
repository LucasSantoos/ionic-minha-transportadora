import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MotoristasPage } from './motoristas.page';

describe('MotoristasPage', () => {
  let component: MotoristasPage;
  let fixture: ComponentFixture<MotoristasPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MotoristasPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MotoristasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
