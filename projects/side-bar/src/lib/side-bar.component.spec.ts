import { provideRouter } from '@angular/router';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SideBarComponent } from './side-bar.component';

describe('SideBarComponent', () => {
  let fixture: ComponentFixture<SideBarComponent>;
  let compiled: HTMLElement;
  let component: SideBarComponent;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SideBarComponent],
      providers: [provideRouter([])],
    }).compileComponents();

    fixture = TestBed.createComponent(SideBarComponent);
    compiled = fixture.nativeElement;
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should emit void onSignOut when signOut button is clicked', () => {
    spyOn(component.onSignOut, 'emit');
    fixture.componentRef.setInput('isAuthenticated', true);
    fixture.detectChanges();

    const signOutBtn = compiled.querySelector(
      '[data-testid], btn-sign-out'
    ) as HTMLButtonElement;

    signOutBtn.click();

    expect(component.onSignOut.emit).toHaveBeenCalledWith();
  });

  it('should emit onSignIn when signIn button is clicked', () => {
    spyOn(component.onSignIn, 'emit');
    fixture.componentRef.setInput('isAuthenticated', false);
    fixture.detectChanges();

    const signOutBtn = compiled.querySelector(
      '[data-testid], btn-sign-in'
    ) as HTMLButtonElement;

    signOutBtn.click();

    expect(component.onSignIn.emit).toHaveBeenCalledWith();
  });
});
