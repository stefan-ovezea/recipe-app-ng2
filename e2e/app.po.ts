<<<<<<< HEAD
import { browser, element, by } from 'protractor';
=======
import { browser, by, element } from 'protractor';
>>>>>>> 9bcd97186962ccdcf1e97be2ab69cbc5540a522b

export class RecipeAppPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('app-root h1')).getText();
  }
}
