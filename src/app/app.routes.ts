import { Routes } from '@angular/router';
import { Home } from './home/home';
import { Impacto } from './impacto/impacto';

// Aqui eu defino as telas do app e o endereço de cada uma.
// O Angular lê essa lista para saber qual componente mostrar
// no lugar do <router-outlet /> quando o endereço muda.
export const routes: Routes = [
  // Endereço vazio (localhost:4200): abre a tela principal com a lista de hábitos.
  { path: '', component: Home },

  // Endereço /impacto: abre a segunda tela, com o total de CO₂ evitado,
  // a meta semanal e a dica do dia. O menu chega nela pelo routerLink.
  { path: 'impacto', component: Impacto },
];