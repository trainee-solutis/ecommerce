import { Component, OnInit } from '@angular/core';
import { Observable, OperatorFunction, distinctUntilChanged, filter, map } from 'rxjs';

type State = { id: number; name: string };

// substituir esse array pelos dados do back-end
const states: State[] = [
  { id: 0, name: 'Alabama' },
  { id: 1, name: 'Alaska' },
  { id: 2, name: 'American Samoa' },
  { id: 3, name: 'Arizona' },
  { id: 4, name: 'Arkansas' },
  { id: 5, name: 'California' },
  { id: 6, name: 'Colorado' },
  { id: 7, name: 'Connecticut' },
  { id: 8, name: 'Delaware' },
  { id: 9, name: 'District Of Columbia' },
  { id: 10, name: 'Federated States Of Micronesia' }
];
@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnInit {
    texto: string = ''

    ngOnInit(): void {
      const token = localStorage.getItem('token');

      if (token) {
        const nomeUsuario = localStorage.getItem('nomeDoUsuario') ;
        this.texto = `Bem vindo de volta, ${nomeUsuario}, o que procura hoje?`;
      } else {
        this.texto = 'Caro cliente, o que procura hoje?';
      }
    }

    public model!: State;

  formatter = (state: State) => state.name;

  search: OperatorFunction<string, readonly { id:number; name: string }[]> = (
    text$: Observable<string>
  ) =>
    text$.pipe(
      distinctUntilChanged(),
      filter((term) => term.length >= 2),
      map((term) =>
        states
          .filter((state) => new RegExp(term, 'mi').test(state.name))
          .slice(0, 10)
      )
    );
}
