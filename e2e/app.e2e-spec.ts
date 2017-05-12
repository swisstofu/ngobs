import { NgobsPage } from './app.po';

describe('ngobs App', () => {
  let page: NgobsPage;

  beforeEach(() => {
    page = new NgobsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
