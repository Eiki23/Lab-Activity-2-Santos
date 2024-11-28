import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkillsCertificationsComponent } from './skills-certifications.component';

describe('SkillsCertificationsComponent', () => {
  let component: SkillsCertificationsComponent;
  let fixture: ComponentFixture<SkillsCertificationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SkillsCertificationsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SkillsCertificationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
