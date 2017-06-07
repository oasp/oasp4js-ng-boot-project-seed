import { AppVeryFirstPage } from './app.po';

describe('oasp4js-ng-project-seed App', () => {
  let page: AppVeryFirstPage;

  beforeEach(() => {
    page = new AppVeryFirstPage();
  });

  it('should display navigation bar', () => {
    page.navigateTo();
    expect(page.getNavigationElement()).toBeDefined();
  });

  it('should display message saying no books available', () => {
    page.navigateTo();
    expect(page.getTextOnNoBooksAvailable()).toEqual('No books available. Add a new one.');
  });
});
