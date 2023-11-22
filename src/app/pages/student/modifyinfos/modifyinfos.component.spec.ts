import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifyinfosComponent } from './modifyinfos.component';

describe('ModifyinfosComponent', () => {
  let component: ModifyinfosComponent;
  let fixture: ComponentFixture<ModifyinfosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ModifyinfosComponent]
    });
    fixture = TestBed.createComponent(ModifyinfosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
