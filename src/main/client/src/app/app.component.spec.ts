import {TestBed, async, ComponentFixture} from "@angular/core/testing";
import {AppComponent} from "./app.component";
import {RouterTestingModule} from "@angular/router/testing";
import {GeneralModule} from "./general/general.module";
import {BookMgmtModule} from "./book-mgmt/book-mgmt.module";
import {BookService} from "./book-mgmt/book.service";

describe('AppComponent', () => {
    let fixture: ComponentFixture<AppComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [
                AppComponent
            ],
            imports: [
                RouterTestingModule,
                GeneralModule,
                BookMgmtModule
            ],
            providers: [BookService],
        }).compileComponents();


        fixture = TestBed.createComponent(AppComponent);
        fixture.detectChanges();
    }));

    it('should create the app', async(() => {
        const app = fixture.debugElement.componentInstance;
        expect(app).toBeTruthy();
    }));

    it('should render navigation bar', async(() => {
        const compiled = fixture.debugElement.nativeElement;
        expect(compiled.querySelector('app-nav ul li a').textContent).toContain('Book Overview');
    }));
});
