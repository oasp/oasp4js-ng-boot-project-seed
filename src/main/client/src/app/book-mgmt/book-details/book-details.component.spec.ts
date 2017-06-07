/* tslint:disable:no-unused-variable */
import {TestBed, async, ComponentFixture, inject} from "@angular/core/testing";
import {Type} from "@angular/core";
import {Router, ActivatedRoute} from "@angular/router";
import {BookDetailsComponent} from "./book-details.component";
import {FormsModule} from "@angular/forms";
import {BookService, Book} from "../book.service";
import {Observable} from "rxjs/Observable";
import {RouterTestingModule} from "@angular/router/testing";
import {HttpModule} from "@angular/http";
import {By} from "@angular/platform-browser";

////////  SPECS  /////////////

describe('BookDetailsComponent', function () {
    let fixture: ComponentFixture<BookDetailsComponent>;
    let instance: BookDetailsComponent;

    class ActivatedRouteMock {
        params = Observable.of({});
    }

    class RouterMock {
        navigate(): void {
        }
    }

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [FormsModule, RouterTestingModule, HttpModule],
            declarations: [BookDetailsComponent],
            providers: [
                BookService,
                {provide: ActivatedRoute, useClass: ActivatedRouteMock},
                {provide: Router, useClass: RouterMock}
            ]
        }).compileComponents().then(() => {
            fixture = TestBed.createComponent(BookDetailsComponent as Type<BookDetailsComponent>);
            instance = fixture.componentInstance;
        });
    }));

    it('is instantiated', () => {
        expect(instance instanceof BookDetailsComponent).toBe(true, 'should create BookDetailsComponent');
    });

    it('leaves the current book empty when no params passed', () => {
        const initialEmptyBook: Book = instance.currentBook;
        fixture.detectChanges(); // triggers BookDetailsComponent.ngOnInit()
        expect(instance.currentBook).toBe(initialEmptyBook);
    });

    it('navigates to overview after saving', inject([Router, BookService], (router: Router, bookService: BookService) => {
        const spy = spyOn(router, 'navigate');
        const btn = fixture.debugElement.query(By.css('form'));
        // tick();
        fixture.detectChanges(); // triggers BookDetailsComponent.ngOnInit()
        expect(instance.submitted).toBeFalsy();
        btn.triggerEventHandler('submit', null);
        // tick();
        fixture.detectChanges();
        expect(instance.submitted).toBeTruthy();
        expect(spy).toHaveBeenCalled();
    }));
});