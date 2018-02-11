import { Component,HostListener, OnInit } from '@angular/core';
import IOTA from 'iota.lib.js';
import Web3 from 'web3';
import { HttpClientModule } from '@angular/common/http';
//import { Ng4LoadingSpinnerModule, Ng4LoadingSpinnerService  } from 'ng4-loading-spinner';
//const Web3 = require('web3');
declare var window: any;
@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})

export class HomeComponent  {
  //implements OnInit
    model = {
        left: true,
        middle: false,
        right: false
    };

  web3: any;
contract:any;
textValue = 'initial value';
valdisplay ='Default value';

    constructor( ) { }

//private ng4LoadingSpinnerService: Ng4LoadingSpinnerService
    ngOnInit() {

    /*  var demoevent = this.contract.event();
      demoevent.watch( function (error, result){

      if (!error){
      this.ng4LoadingSpinnerService.hide();
      console.log(result);
      }else{
      this.ng4LoadingSpinnerService.hide();
console.log(error);
      }

    });*/
debugger;
    var iota = new IOTA({
    'host': 'https://durian.iotasalad.org',
    'port': 14265
    });
console.log(iota);
console.log(iota.version);
/*
var options = {
  url: 'https://potato.iotasalad.org:14265',
  method: 'POST',
  headers: {
    'Access-Control-Allow-Headers':'Origin',
    'Access-Control-Allow-Origin' :'*',
    'Content-Type': 'application/json',


  },
  };*/


iota.api.getNodeInfo(function(error, success) {
if (error) {
    console.log(error);
} else {
    console.log(success);
}
});
    };








      ngOnChanges() {
      /*  var demoevent = this.contract.event();
        demoevent.watch( function (error, result){

        if (!error){
        this.ng4LoadingSpinnerService.hide();
        console.log(result);
        }else{
        this.ng4LoadingSpinnerService.hide();
  console.log(error);
        }

      });*/

      }


      Readblock()
      {

      }
      Sendtoblock(dataval: string){




      }


}
