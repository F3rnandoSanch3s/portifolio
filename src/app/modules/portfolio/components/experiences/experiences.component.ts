import { Component, signal } from '@angular/core';
import { IExperiences } from '../../../portifolio/interface/IExperience.interface';

@Component({
  selector: 'app-experiences',
  standalone: true,
  imports: [],
  templateUrl: './experiences.component.html',
  styleUrl: './experiences.component.scss'
})
export class ExperiencesComponent {
  public arrayExperiences = signal<IExperiences[]>([
    {
      summary: {
        strong: "sistema login",
        p: "trabalho da faculdade",
      },
      text: "sistema login feito com PHP puro, HTML, CSS e usando mysql como banco de dados",
    },
    {
      summary: {
        strong: "site portifólio usando angular",
        p: "projeto pessoal",
      },
      text: "projeto portifólio, usando angular e laravel no backend, pretendo adicionar mais projetos dentro do proprio portifolio",
    },
    {
      summary: {
        strong: "sei lá, esse é só um site portifólio",
        p:"abra e encontrará o one piece",
      },
      text:"o tempo passou e eu sofri calado, não deu pra tirar ela do pensamento",
    },
  ])
}
