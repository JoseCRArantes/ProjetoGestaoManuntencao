import { async, TestBed } from '@angular/core/testing';
import { TipoUtilizadorListComponent } from './tipo-utilizador-list.component';
describe('TipoUtilizadorListComponent', () => {
    let component;
    let fixture;
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [TipoUtilizadorListComponent]
        })
            .compileComponents();
    }));
    beforeEach(() => {
        fixture = TestBed.createComponent(TipoUtilizadorListComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=tipo-utilizador-list.component.spec.js.map