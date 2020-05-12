import { Component, OnInit } from '@angular/core';
import { Transporte } from '../model/transporte.interface';
import { AlertController, LoadingController } from '@ionic/angular';
import { TransporteService } from '../service/transporte.service';

@Component({
  selector: 'app-transporte',
  templateUrl: './transporte.page.html',
  styleUrls: ['./transporte.page.scss'],
})
export class TransportePage implements OnInit {

  transportes: Transporte[];

  constructor(
    private alertController: AlertController,
    private transporteService: TransporteService,
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
    this.transporteService.findAll().subscribe((data) => {
      this.transportes = data;
      loading.dismiss();
    });
  }

  async confirmarExclusao(transporte: Transporte) {
    let alerta = await this.alertController.create({
      header: 'Confirmação de exclusão',
      message: `Deseja excluir o caminhão ${transporte.carga}?`,
      buttons: [{
        text: 'SIM',
        handler: () => {
          this.excluir(transporte);
        }
      }, {
        text: 'NÃO'
      }]
    });
    alerta.present();
  }

  excluir(transporte: Transporte) {
    this.transporteService.delete(transporte).subscribe(() => this.listar());
  }
}
