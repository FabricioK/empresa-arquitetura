import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { ResponsiveModule } from 'ng2-responsive'
import { MaterialModule } from '@angular/material';

//Base
import { AppComponent } from './app.component';
import { NavComponent }  from './components/nav.component';
import { BodyComponent }  from './components/body.component';
import { RouterModule, Routes } from '@angular/router';
//Abas
import { HomeComponent }  from './components/home.component';
import { ContatoComponent }  from './components/contato.component';

import { HidraulicoComponent }  from './components/hidraulico.component';
import { ArquitetonicoComponent }  from './components/arquitetonico.component';
import { EstruturalComponent }  from './components/estrutural.component';
import { EletricoComponent }  from './components/eletrico.component';
import { ServicosGeraisComponent }  from './components/servicos-gerais.component';
//Footer
import { FooterComponent }  from './components/footer.component';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'contatos', component: ContatoComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    BodyComponent,
    
    HomeComponent,
    ContatoComponent,
    HidraulicoComponent,
    ArquitetonicoComponent,
    EstruturalComponent,
    EletricoComponent,
    ServicosGeraisComponent,

    FooterComponent
  ],
  imports: [
    ResponsiveModule,
    BrowserAnimationsModule,
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterialModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
