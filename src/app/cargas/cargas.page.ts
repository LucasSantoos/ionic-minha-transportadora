import { Component, OnInit } from '@angular/core';
import { Carga } from '../model/carga.interface';
import { AlertController, LoadingController } from '@ionic/angular';
import { CargaService } from '../service/carga.service';

@Component({
  selector: 'app-cargas',
  templateUrl: './cargas.page.html',
  styleUrls: ['./cargas.page.scss'],
})
export class CargasPage implements OnInit {

  cargas: Carga[];

  constructor(
    private alertController: AlertController,
    private cargaService: CargaService,
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
    this.cargaService.findAll().subscribe((data) => {
      this.cargas = data;
      loading.dismiss();
    });
  }

  async confirmarExclusao(carga: Carga) {
    let alerta = await this.alertController.create({
      header: 'Confirmação de exclusão',
      message: `Deseja excluir o carga ${carga.destino} -> ${carga.destino}?`,
      buttons: [{
        text: 'SIM',
        handler: () => {
          this.excluir(carga);
        }
      }, {
        text: 'NÃO'
      }]
    });
    alerta.present();
  }

  excluir(carga: Carga) {
    this.cargaService.delete(carga).subscribe(() => this.listar());
  }
}
