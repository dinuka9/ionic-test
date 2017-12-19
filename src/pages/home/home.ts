import { Component } from '@angular/core';
import { ToastController } from 'ionic-angular';
import { NavController } from 'ionic-angular';
import { InAppBrowser } from '@ionic-native/in-app-browser';

@Component({
	selector: 'page-home',
	templateUrl: 'home.html'
})
export class HomePage {

	constructor(
		public toastCtrl: ToastController,
		public navController: NavController,
		private iab: InAppBrowser
		) {}

	showToast(position: string) {
		let toast = this.toastCtrl.create({
			message: 'Mmmm, buttered toast',
			duration: 3000,
			position: position
		});
		toast.present(toast);
	}

	openUrl(){
		var options = 'fullscreen=yes,location=no,mediaPlaybackRequiresUserAction=yes,shouldPauseOnSuspend=yes	'
		const browser = this.iab.create('http://www.facebook.com', '_self', options);
		browser.show();
	}

}
