import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavController, LoadingController } from '@ionic/angular';
import { Cliente } from 'src/app/model/cliente.interface';
import { ClienteService } from 'src/app/service/cliente.service';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.page.html',
  styleUrls: ['./cadastro.page.scss'],
})
export class CadastroPage implements OnInit {

  cliente: Cliente;

  constructor(
    private clienteService : ClienteService,
    private activatedRoute : ActivatedRoute,
    private navController : NavController,
    private loadingController : LoadingController
  ) { 
    this.cliente = { razao: '', cnpj: '', email: '' };
  }

  async ngOnInit() {
    const id = parseInt(this.activatedRoute.snapshot.params['id']);       
    if(id) {
      const loading = await this.loadingController.create({message: 'Carregando'});
      loading.present();
      this.clienteService.find(id).subscribe((cliente) => {
        this.cliente = cliente;
        loading.dismiss();
      });
    } 
  }


  async salvar() {
    let loading = await this.loadingController.create({message: 'Salvando'});
    loading.present();

    this.clienteService
      .save(this.cliente)
      .subscribe(() => {
        loading.dismiss();
        this.navController.navigateForward(['/clientes']);
      });
  }
}