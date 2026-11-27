import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HabitoService } from '../habito';
import { HabitoItem } from '../habito-item/habito-item';

@Component({
  selector: 'app-home',
  imports: [FormsModule, HabitoItem],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  servico = inject(HabitoService);
  nome = '';
  impacto = 1;
  // Roda quando clico em Adicionar. Se o campo estiver vazio, não faz nada.
  // Se tiver texto, manda o nome e o impacto para o service guardar na lista
  // e depois limpa o formulário para eu digitar outro hábito.
  adicionar() {
    if (!this.nome.trim()) return;
    this.servico.adicionar(this.nome, this.impacto);
    this.nome = '';
    this.impacto = 1;
  }
}
