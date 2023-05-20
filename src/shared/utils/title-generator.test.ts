import { titleGenerator } from './title-generator';

describe('titleGenerator', () => {
  beforeEach(() => {
    document.title = '';
  });

  it('should set the document title with the provided title', () => {
    const title = 'Test Title';
    titleGenerator(title);
    expect(document.title).toBe(`Boozt PLP | ${title}`);
  });

  it('should set the document title without a provided title', () => {
    titleGenerator();
    expect(document.title).toBe('Boozt PLP');
  });
});
