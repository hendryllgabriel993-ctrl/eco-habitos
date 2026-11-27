import { Component, inject } from '@angular/core';
import { HabitoService } from '../habito';

@Component({
  selector: 'app-impacto',
  templateUrl: './impacto.html',
  styleUrl: './impacto.css',
})
export class Impacto {
  servico = inject(HabitoService);
    // Meta semanal de CO₂ que quero evitar, em kg. A barra de progresso usa esse valor.

  meta = 10;
  dicas = [
    'Desligue aparelhos da tomada.',
    'Leve sua garrafa reutilizável.',
    'Separe o lixo reciclável.',
  ];
    // A dica do dia é escolhida pelo dia do mês: pego o número do dia (getDate)
  // e uso o resto da divisão pelo tamanho da lista (%), então cada dia
  // cai numa dica diferente e ela só muda quando o dia muda.
  dica = this.dicas[new Date().getDate() % this.dicas.length];
}