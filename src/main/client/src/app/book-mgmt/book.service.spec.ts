import {TestBed, inject} from "@angular/core/testing";
import {BookService, Book} from "./book.service";
import {HttpModule, XHRBackend, ResponseOptions, Response} from "@angular/http";
import {MockBackend} from "@angular/http/testing";

describe('BookService', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [HttpModule],
            providers: [
                BookService,
                { provide: XHRBackend, useClass: MockBackend }
            ]
        });
    });

    beforeEach(inject([BookService, XHRBackend], (service, mockBackend) => {
        const mockResponse = [{id: 1000, author: 'John Example 1', title: 'By Example 1'}];

        mockBackend.connections.subscribe((connection) => {
            connection.mockRespond(new Response(new ResponseOptions({
                body: JSON.stringify(mockResponse)
            })));
        });
    }));

    it('should find all books', inject([BookService], (service: BookService) => {

        // when
        service.findAll().subscribe(foundBooks => {

            // then
            expect(foundBooks.length).toBe(1);
            expect(foundBooks[0].id).toBe(1000);
            expect(foundBooks[0].author).toBe('John Example 1');
            expect(foundBooks[0].title).toBe('By Example 1');
        });
    }));

    it('should save a book', inject([BookService, XHRBackend], (service: BookService, mockBackend: XHRBackend) => {
        // given
        const book: Book = new Book('John Example', 'By Example');

        // when
        service.save(book);

        // then
        service.findAll().subscribe(foundBooks => {
            expect(foundBooks.length).toBe(2);
            expect(foundBooks[0]).toBe(book);
        });
    }));

    it('should find a book', inject([BookService], (service: BookService) => {
        // given
        const book: Book = new Book('John Example', 'By Example');
        service.save(book);

        // when
        const foundBook:Book = service.findOne(book.id);

        // then
        expect(foundBook).toEqual(foundBook);
    }));
});
