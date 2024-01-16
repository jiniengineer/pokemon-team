import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatListModule } from '@angular/material/list';
import { MatChipsModule } from '@angular/material/chips';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatDialogModule } from '@angular/material/dialog';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  PokemonDetailsComponent,
  PokemonListComponent,
  SelectedTeamComponent,
  // PokemonDialogComponent,
} from './';

@NgModule({
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    MatButtonToggleModule,
    HttpClientModule,
    MatListModule,
    MatDialogModule,
    MatChipsModule,
    MatButtonModule,
    MatIconModule,
    MatInputModule,
    BrowserAnimationsModule,
  ],
  declarations: [
    AppComponent,
    SelectedTeamComponent,
    PokemonListComponent,
    PokemonDetailsComponent,
    // PokemonDialogComponent,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
