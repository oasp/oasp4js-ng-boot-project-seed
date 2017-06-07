import { browser, element, by } from 'protractor';

export class AppVeryFirstPage {
  navigateTo() {
    return browser.get('/');
  }

  getNavigationElement() {
    return element(by.css('app-root app-nav'));
  }

  getTextOnNoBooksAvailable() {
    return element(by.css('app-root app-book-overview p')).getText();
  }
}
