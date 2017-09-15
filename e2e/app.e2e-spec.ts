import { ProgrammingTestTemplatePage } from './app.po';

describe('programming-test-template App', () => {
  let page: ProgrammingTestTemplatePage;

  beforeEach(() => {
    page = new ProgrammingTestTemplatePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
