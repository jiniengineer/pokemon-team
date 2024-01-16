import { TitleCasePipe } from '@angular/common';
import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PokemonDialogComponent } from '../pokemon-dialog/pokemon-dialog.component';

@Component({
  selector: 'app-selected-team',
  templateUrl: './selected-team.component.html',
  providers: [TitleCasePipe],
})
export class SelectedTeamComponent {
  team: string[] = [];

  get isTeamCountLessThanSix(): boolean {
    return this.team.length < 6;
  }

  get isTeamCountSix(): boolean {
    return this.team.length === 6;
  }

  constructor(
    private readonly dialog: MatDialog,
    private readonly titleCasePipe: TitleCasePipe
  ) {}

  addToTeam(pokemon: string) {
    const { team } = this;
    if (!team.includes(pokemon) && this.isTeamCountLessThanSix) {
      this.team.push(pokemon);
    } else if (team.includes(pokemon) || this.isTeamCountSix) {
      const name = this.titleCasePipe.transform(pokemon);
      const message = team.includes(pokemon)
        ? `${name} is already added to the team`
        : 'You cannot add more than 6 pokemons to your team';
      this.dialog.open(PokemonDialogComponent, {
        width: '200px',
        data: {
          title: '',
          content: message,
        },
      });
    }
  }

  removeFromTeam(pokemon: string) {
    this.team.splice(this.team.indexOf(pokemon), 1);
  }
}
