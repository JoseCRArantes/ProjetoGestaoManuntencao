import { async, TestBed } from '@angular/core/testing';
import { AspNetUserListComponent } from './asp-net-user-list.component';
describe('AspNetUserListComponent', () => {
    let component;
    let fixture;
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [AspNetUserListComponent]
        })
            .compileComponents();
    }));
    beforeEach(() => {
        fixture = TestBed.createComponent(AspNetUserListComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=asp-net-user-list.component.spec.js.map