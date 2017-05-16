import { EmpresaArquiteturaPage } from './app.po';

describe('empresa-arquitetura App', () => {
  let page: EmpresaArquiteturaPage;

  beforeEach(() => {
    page = new EmpresaArquiteturaPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
