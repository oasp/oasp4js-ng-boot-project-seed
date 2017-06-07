import {async, ComponentFixture, TestBed} from "@angular/core/testing";
import {BookOverviewComponent} from "./book-overview.component";
import {RouterTestingModule} from "@angular/router/testing";
import {BookService} from "../book.service";
import {HttpModule} from "@angular/http";
import {By} from "@angular/platform-browser";
import {Observable} from "rxjs";

describe('BookOverviewComponent', () => {
    let component: BookOverviewComponent;
    let fixture: ComponentFixture<BookOverviewComponent>;
    let bookService: BookService;
    let spy: jasmine.Spy;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [BookOverviewComponent],
            imports: [RouterTestingModule, HttpModule],
            providers: [BookService]
        });
    }));

    beforeEach(() => {
        const mockResponse = [{id: 1000, author: 'John Example', title: 'By Example'}];

        fixture = TestBed.createComponent(BookOverviewComponent);
        component = fixture.componentInstance;

        // BookService actually injected into the component
        bookService = fixture.debugElement.injector.get(BookService);

        // Setup spy on the `findAll` method
        spy = spyOn(bookService, 'findAll')
            .and.returnValue(Observable.of(mockResponse));

        fixture.detectChanges();
    });

    it('should show books', () => {
        // then
        const tr = fixture.debugElement.query(By.css('.books tbody tr')).nativeElement;
        expect(tr.textContent).toContain('John Example');
        expect(tr.textContent).toContain('By Example');
    });
});
