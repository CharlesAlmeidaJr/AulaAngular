import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { EnderecoService } from '../Services/endereco.service';

@Component({
  selector: 'app-hello',
  templateUrl: './hello.component.html',
  styleUrls: ['./hello.component.css']
})
export class HelloComponent {

  constructor(private route:Router, private endereco: EnderecoService) {}

  @Input() name: string = 'Turma'

  cont: number = 0

  isVisible: boolean = true;
  status: string = 'Esconder'

  nome: string = ''

  submit(): void {
    console.log(this.nome)
  }

  changeVisibility(): void{
    this.isVisible = !this.isVisible

    this.status = this.isVisible ? 'Esconder' : 'Mostrar'
  }

  clicked(): void {
    window.alert('Ola!!!')
  }

  increment(): void {
    this.cont += this.cont < 10 ? 1 : 0
  }

  decrement(): void {
    this.cont -= this.cont > 0 ? 1 : 0
  }

  mudarRota(): void{
    this.route.navigate(['/rota']) //this.route.navigateByUrl('/rota')
  }

  buscar(){
    this.endereco.getEndereco('14180000').subscribe({
      next: (response) => {
        console.log(response.localidade)
      }
    })
  }

  lista: any[] = [
    {name: 'Adamastor', idade: 60},
    {name: 'Bartolomeu', idade: 63},
    {name: 'Clovis', idade: 65}
  ]

}
