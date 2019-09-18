import { Component } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss']
})
export class HomePage {
  constructor(private fb: AngularFireDatabase) {
    fb.list('/alunos')
      .valueChanges()
      .subscribe(dados => console.log('atualizado ', dados));
  }

  gravar() {
    const dados = {
      matricula: 2017007477,
      nome: 'Rafael',
      sobrenome: 'Martins'
    };
    this.fb.list('/alunos').push(dados);
  }
}
