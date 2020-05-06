import { async, TestBed } from '@angular/core/testing';
import { AspNetUserEditComponent } from './asp-net-user-edit.component';
describe('AspNetUserEditComponent', () => {
    let component;
    let fixture;
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [AspNetUserEditComponent]
        })
            .compileComponents();
    }));
    beforeEach(() => {
        fixture = TestBed.createComponent(AspNetUserEditComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=asp-net-user-edit.component.spec.js.map