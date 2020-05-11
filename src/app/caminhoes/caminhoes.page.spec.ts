import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CaminhoesPage } from './caminhoes.page';

describe('CaminhoesPage', () => {
  let component: CaminhoesPage;
  let fixture: ComponentFixture<CaminhoesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CaminhoesPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CaminhoesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
