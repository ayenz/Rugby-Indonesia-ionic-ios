import { Component } from '@angular/core';

import { News } from '../news/news';
import { Fixtures } from '../fixtures/fixtures';
import { Teamphotos } from '../teamphotos/teamphotos';
import { Rugby101 } from '../rugby101/rugby101';
import { Rugbyclubs } from '../rugbyclubs/rugbyclubs';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root: any = News;
  tab2Root: any = Fixtures;
  tab3Root: any = Teamphotos;
  tab4Root: any = Rugby101;
  tab5Root: any = Rugbyclubs;


  constructor() {

  }
}
