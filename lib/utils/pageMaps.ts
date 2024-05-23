export interface Page {
  id: number;
  name: string;
  subpages: any;
  parentId?: number | null;
}

export class PageMap {
  pageMap: Map<number, Page>;
  private pageList: Page[];
  constructor(pageList: Page[] = []) {
    this.pageList = pageList;
    this.pageMap = new Map();
    this.setPageMap(pageList);
  }

  private setPageMap = (pages: Page[]) => {
    pages?.forEach((page) => {
      this.pageMap.set(page.id, page);
    });
  };

  getPage = (id: number): Page | null => {
    return this.pageMap.get(id) ?? null;
  };

  private getAllSubpageIds = (page: Page) => {
    if (!page.subpages) {
      return [];
    }

    return page.subpages.flatMap((subpageId: number) => {
      let subpage = this.pageMap.get(subpageId);
      return subpage ? [subpageId, ...this.getAllSubpageIds(subpage)] : [];
    });
  };
  getAllIds = (page: Page): number[] => {
    return [page.id, ...this.getAllSubpageIds(page)];
  };

  private appendSubpages = (page: Page) => {
    if (page.subpages === null || page.subpages.length === 0) {
      return page;
    }

    for (let i = 0; i < page.subpages.length; i++) {
      let subpageId = page.subpages[i];
      let subpage = this.pageMap.get(subpageId);
      if (subpage) {
        page.subpages[i] = this.appendSubpages(subpage);
        console.log(page.subpages[i]);
      }
    }

    return page;
  };

  getFilteredNoteBook = () => {
    let filteredPages = this.pageList?.filter((page) => page.parentId === null);
    filteredPages.forEach((page) => {
      this.appendSubpages(page);
    });
    return filteredPages;
  };
}
