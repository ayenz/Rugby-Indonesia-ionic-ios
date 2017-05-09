import { Component } from '@angular/core';
import { Http, Response} from '@angular/http';
import { Loading, LoadingController } from 'ionic-angular';
import 'rxjs/add/operator/map';

declare var cordova:any;
@Component({
  selector: 'page-fixtures',
  templateUrl: 'fixtures.html'
})
export class Fixtures {
  posts: any[];
  icons: string[];
  items: Array<{title: string, note: string, icon: string}>;
  loading:Loading;

  constructor(public http: Http, public loadingCtrl:LoadingController) {
    this.loading = this.loadingCtrl.create({
      content: 'Please Wait...',
    });
    this.loading.present();

    this.http.get('https://ri-admin.azurewebsites.net/indonesianrugby/fixtures/list.json/')
    .subscribe(res => {
      this.posts = res.json()
      if(this.posts[0].img!=''){
        this.loading.dismissAll();
      }
    });

  }

  GoToLink(url){
  cordova.InAppBrowser.open(url, '_blank', "location=true");
  cordova.InAppBrowser.show();
  }
}
