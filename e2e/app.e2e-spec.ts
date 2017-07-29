import { SpeedrunPage } from './app.po';

describe('speedrun App', () => {
  let page: SpeedrunPage;

  beforeEach(() => {
    page = new SpeedrunPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
