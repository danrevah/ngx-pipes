import { Ng2PipesPage } from './app.po';

describe('ng2-pipes App', function() {
  let page: Ng2PipesPage;

  beforeEach(() => {
    page = new Ng2PipesPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
