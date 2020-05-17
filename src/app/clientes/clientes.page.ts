import { Component, OnInit } from '@angular/core';
import { Cliente } from '../model/cliente.interface';
import { AlertController, LoadingController } from '@ionic/angular';
import { ClienteService } from '../service/cliente.service';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.page.html',
  styleUrls: ['./clientes.page.scss'],
})
export class ClientesPage implements OnInit {

  clientes: Cliente[];

  constructor(
    private alertController: AlertController,
    private clienteService: ClienteService,
    private loadingController: LoadingController
  ) { }

  ngOnInit() {
  }

  ionViewWillEnter() {
    this.listar();
  }

  async listar() {
    const loading = await this.loadingController.create({
      message: 'Carregando'
    });
    loading.present();
    this.clienteService.findAll().subscribe((data) => {
      this.clientes = data;
      loading.dismiss();
    });
  }

  async confirmarExclusao(cliente: Cliente) {
    let alerta = await this.alertController.create({
      header: 'Confirmação de exclusão',
      message: `Deseja excluir o cliente ${cliente.razao} ?`,
      buttons: [{
        text: 'SIM',
        handler: () => {
          this.excluir(cliente);
        }
      }, {
        text: 'NÃO'
      }]
    });
    alerta.present();
  }

  excluir(cliente: Cliente) {
    this.clienteService.delete(cliente).subscribe(() => this.listar());
  }
}
