import { CodesaverPage } from './app.po';

describe('codesaver App', () => {
  let page: CodesaverPage;

  beforeEach(() => {
    page = new CodesaverPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
