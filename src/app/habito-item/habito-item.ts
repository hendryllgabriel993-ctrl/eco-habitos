import { Component, input, output } from '@angular/core';
import { Habito } from '../habito';

@Component({
  selector: 'app-habito-item',
  template: `
    <li>
      <input type="checkbox" [checked]="habito().concluido" (change)="alternar.emit(habito().id)" />
      <span [style.text-decoration]="habito().concluido ? 'line-through' : 'none'">
        {{ habito().nome }} ({{ habito().impactoKg }} kg CO₂)
      </span>
      <button (click)="remover.emit(habito().id)">Remover</button>
    </li>
  `,
})
export class HabitoItem {
  // input() é por onde este componente recebe o hábito que a tela home manda.
  // Ele só mostra o hábito, não guarda a lista.
  habito = input.required<Habito>();

  // output() é como este componente avisa a tela home que algo aconteceu:
  // "alternar" avisa que marquei ou desmarquei o hábito, e "remover" avisa
  // que cliquei em Remover. Quem muda a lista de verdade é o service.
  alternar = output<number>();
  remover = output<number>();
}