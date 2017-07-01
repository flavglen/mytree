import { TreePage } from './app.po';

describe('tree App', () => {
  let page: TreePage;

  beforeEach(() => {
    page = new TreePage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
