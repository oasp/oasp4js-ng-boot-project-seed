import {async, ComponentFixture, TestBed} from "@angular/core/testing";
import {NavComponent} from "./nav.component";
import {NgbTooltipModule} from "@ng-bootstrap/ng-bootstrap";

describe('NavComponent', () => {
    let component: NavComponent;
    let fixture: ComponentFixture<NavComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [NavComponent],
            imports: [NgbTooltipModule.forRoot()]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(NavComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('shows build version', () => {
        expect(component.currentBuild.version).toBe('local');
    });

    it('should render links to dialogs', async(() => {
        fixture = TestBed.createComponent(NavComponent);
        fixture.detectChanges();
        const compiled = fixture.debugElement.nativeElement;
        const linkElements = compiled.querySelectorAll('ul li');
        expect(linkElements.length).toBe(2);
        expect(linkElements[0].querySelector('a').textContent).toContain('Book Overview');
        expect(linkElements[1].querySelector('a').textContent).toContain('New Book');
    }));
});
