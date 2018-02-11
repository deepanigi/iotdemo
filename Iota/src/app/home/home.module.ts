import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';

import { HomeComponent } from './home.component';
import Web3 from 'web3';
import { ComponentsModule } from '../components/components.module';
//import { Ng4LoadingSpinnerModule, Ng4LoadingSpinnerService  } from 'ng4-loading-spinner';
@NgModule({
    imports: [
        CommonModule,
        BrowserModule,
        FormsModule,
      //  Ng4LoadingSpinnerModule.forRoot(),
        RouterModule,
        ComponentsModule
    ],
    declarations: [ HomeComponent,  ],
    exports:[ HomeComponent ],
    providers: []
})
export class HomeModule { }
