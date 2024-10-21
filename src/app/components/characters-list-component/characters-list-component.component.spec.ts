import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CharactersListComponentComponent } from './characters-list-component.component';

describe('CharactersListComponentComponent', () => {
  let component: CharactersListComponentComponent;
  let fixture: ComponentFixture<CharactersListComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CharactersListComponentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CharactersListComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
