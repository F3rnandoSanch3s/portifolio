import { Component, inject, signal } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { IProjetcs } from '../../../portifolio/interface/IProjects.interface';

//material
import {MatDialog, MatDialogModule} from '@angular/material/dialog';
import { EDialogPanelClass } from '../../../portifolio/enum/EDialogPanelClass.enum';
import { DialogProjectsComponent } from '../../../portifolio/components/dialog/dialog-projects/dialog-projects.component';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [MatDialogModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {
  #dialog = inject(MatDialog);

  public arrayProjects = signal<IProjetcs[]>([
    {
      src:"assets/img/Luffy.jpg",
      alt:"",
      title:"teste",
      with:"100px",
      height:"51px",
      description:
        '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec non suscipit leo, eu faucibus diam. Praesent tincidunt suscipit egestas. Maecenas vehicula arcu et gravida commodo. Morbi tempus a nisi sed vehicula. Proin placerat magna purus, fermentum tincidunt nisl volutpat eget. Cras suscipit, leo id fringilla molestie, libero lectus dapibus lacus, nec gravida nunc mauris a orci.</p>',
      links: [
        {
          name: "clica ai mano",
          href: "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
        },
      ],
    },
    {
      src:"assets/img/Luffy.jpg",
      alt:"",
      title:"teste",
      with:"100px",
      height:"51px",
      description:
        '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec non suscipit leo, eu faucibus diam. Praesent tincidunt suscipit egestas. Maecenas vehicula arcu et gravida commodo. Morbi tempus a nisi sed vehicula. Proin placerat magna purus, fermentum tincidunt nisl volutpat eget. Cras suscipit, leo id fringilla molestie, libero lectus dapibus lacus, nec gravida nunc mauris a orci.</p>',
      links: [
        {
          name: "clica ai mano",
          href: "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
        },
      ],
    },
    {
      src:"assets/img/Luffy.jpg",
      alt:"",
      title:"teste",
      with:"100px",
      height:"51px",
      description:
        '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec non suscipit leo, eu faucibus diam. Praesent tincidunt suscipit egestas. Maecenas vehicula arcu et gravida commodo. Morbi tempus a nisi sed vehicula. Proin placerat magna purus, fermentum tincidunt nisl volutpat eget. Cras suscipit, leo id fringilla molestie, libero lectus dapibus lacus, nec gravida nunc mauris a orci.</p>',
      links: [
        {
          name: "clica ai mano",
          href: "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
        },
      ],
    },
    {
      src:"assets/img/Luffy.jpg",
      alt:"",
      title:"teste",
      with:"100px",
      height:"51px",
      description:
        '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec non suscipit leo, eu faucibus diam. Praesent tincidunt suscipit egestas. Maecenas vehicula arcu et gravida commodo. Morbi tempus a nisi sed vehicula. Proin placerat magna purus, fermentum tincidunt nisl volutpat eget. Cras suscipit, leo id fringilla molestie, libero lectus dapibus lacus, nec gravida nunc mauris a orci.</p>',
      links: [
        {
          name: "clica ai mano",
          href: "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
        },
      ],
    },
    {
      src:"assets/img/Luffy.jpg",
      alt:"",
      title:"teste",
      with:"100px",
      height:"51px",
      description:
        '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec non suscipit leo, eu faucibus diam. Praesent tincidunt suscipit egestas. Maecenas vehicula arcu et gravida commodo. Morbi tempus a nisi sed vehicula. Proin placerat magna purus, fermentum tincidunt nisl volutpat eget. Cras suscipit, leo id fringilla molestie, libero lectus dapibus lacus, nec gravida nunc mauris a orci.</p>',
      links: [
        {
          name: "clica ai mano",
          href: "/ProjectsPHP"
        },
      ],
    },
  ])

  public openDialog(data: IProjetcs){
    this.#dialog.open(DialogProjectsComponent, {
      data,
      panelClass: EDialogPanelClass.PROJECTS
    })
  }
}
