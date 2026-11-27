import { Routes } from '@angular/router';
import { Home } from './home/home';
import { Impacto } from './impacto/impacto';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'impacto', component: Impacto },
];
