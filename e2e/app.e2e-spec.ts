import { HomeWorkCourseAngular2Page } from './app.po';

describe('home-work-course-angular2 App', function() {
  let page: HomeWorkCourseAngular2Page;

  beforeEach(() => {
    page = new HomeWorkCourseAngular2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
