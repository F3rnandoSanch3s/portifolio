import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';

//interfaces
import { IKnowledge } from '../../../portifolio/interface/IKnowledge.interface';

@Component({
  selector: 'app-knowledge',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './knowledge.component.html',
  styleUrl: './knowledge.component.scss'
})
export class KnowledgeComponent {
  public arrayknowledge = signal<IKnowledge[]>([
    {
      src: 'assets/icons/knowledge/laravel.svg',
      alt: 'icone de conhecimento laravel',
    },
    {
      src: 'assets/icons/knowledge/angular.svg',
      alt: 'icone de conhecimento angular',
    },
    {
      src: 'assets/icons/knowledge/vue.svg',
      alt: 'icone de conhecimento vue.js',
    },
    {
      src: 'assets/icons/knowledge/typescript.svg',
      alt: 'icone de conhecimento typescript',
    },
    {
      src: 'assets/icons/knowledge/mysql.svg',
      alt: 'icone de conhecimento mysql',
    },
    {
      src: 'assets/icons/knowledge/node.svg',
      alt: 'icone de conhecimento node',
    },
    {
      src: 'assets/icons/knowledge/docker.svg',
      alt: 'icone de conhecimento docker',
    },
  ]);
}
