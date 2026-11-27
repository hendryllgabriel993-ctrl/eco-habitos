import { Injectable, signal, computed } from '@angular/core';

export interface Habito {
  id: number;
  nome: string;
  impactoKg: number;
  concluido: boolean;
}

@Injectable({ providedIn: 'root' })
export class HabitoService {
  private chave = 'eco-habitos';
  habitos = signal<Habito[]>(this.carregar());

  totalKg = computed(() =>
    this.habitos().filter(h => h.concluido).reduce((soma, h) => soma + h.impactoKg, 0)
  );

  adicionar(nome: string, impactoKg: number) {
    const novo: Habito = { id: Date.now(), nome, impactoKg, concluido: false };
    this.habitos.update(lista => [...lista, novo]);
    this.salvar();
  }

  alternar(id: number) {
    this.habitos.update(lista =>
      lista.map(h => (h.id === id ? { ...h, concluido: !h.concluido } : h))
    );
    this.salvar();
  }

  remover(id: number) {
    this.habitos.update(lista => lista.filter(h => h.id !== id));
    this.salvar();
  }
// Essa função guarda a lista no navegador. Ela roda toda vez que a lista muda
// (quando adiciono, concluo ou removo um hábito). O localStorage só aceita texto,
// então primeiro uso JSON.stringify para transformar a lista em texto
// e depois guardo esse texto com a chave "eco-habitos".
  private salvar() {
    localStorage.setItem(this.chave, JSON.stringify(this.habitos()));
  }
// Essa função busca a lista que foi guardada antes. Ela roda quando o app abre
// (é por ela que a lista começa preenchida). Primeiro lê o texto do localStorage
// com a mesma chave. Se tiver algo guardado, uso JSON.parse para transformar o
// texto de volta em lista. Se não tiver nada (primeira vez usando), começa com lista vazia.
  private carregar(): Habito[] {
    const texto = localStorage.getItem(this.chave);
    return texto ? JSON.parse(texto) : [];
  }
}
