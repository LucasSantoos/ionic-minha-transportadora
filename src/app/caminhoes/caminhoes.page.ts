import { Component, OnInit } from '@angular/core';
import { Caminhao } from '../model/caminhao.interface';
import { CaminhaoService } from '../service/caminhao.service'
import { LoadingController, AlertController } from '@ionic/angular';

@Component({
  selector: 'app-caminhoes',
  templateUrl: './caminhoes.page.html',
  styleUrls: ['./caminhoes.page.scss'],
})
export class CaminhoesPage implements OnInit {
  
  caminhoes: Caminhao[];

  constructor(
    private alertController: AlertController,
    private caminhaoService: CaminhaoService,
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
    this.caminhaoService.findAll().subscribe((data) => {
      this.caminhoes = data;
      loading.dismiss();
    });
  }

  async confirmarExclusao(caminhao: Caminhao) {
    let alerta = await this.alertController.create({
      header: 'Confirmação de exclusão',
      message: `Deseja excluir o caminhão ${caminhao.placa}?`,
      buttons: [{
        text: 'SIM',
        handler: () => {
          this.excluir(caminhao);
        }
      }, {
        text: 'NÃO'
      }]
    });
    alerta.present();
  }

  excluir(caminhao: Caminhao) {
    this.caminhaoService.delete(caminhao).subscribe(() => this.listar());
  }
}
