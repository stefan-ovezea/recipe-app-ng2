import { RecipeAppPage } from './app.po';

<<<<<<< HEAD
describe('recipe-app App', function() {
=======
describe('recipe-app App', () => {
>>>>>>> 9bcd97186962ccdcf1e97be2ab69cbc5540a522b
  let page: RecipeAppPage;

  beforeEach(() => {
    page = new RecipeAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
