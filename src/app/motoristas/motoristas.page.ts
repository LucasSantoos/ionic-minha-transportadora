import { Component, OnInit } from '@angular/core';
import { AlertController, LoadingController } from '@ionic/angular';
import { MotoristaService } from '../service/motorista.service';
import { Motorista } from '../model/Motorista.interface';

@Component({
  selector: 'app-motoristas',
  templateUrl: './motoristas.page.html',
  styleUrls: ['./motoristas.page.scss'],
})
export class MotoristasPage implements OnInit {

  motoristas: Motorista[];

  constructor(
    private alertController: AlertController,
    private motoristaService: MotoristaService,
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
    this.motoristaService.findAll().subscribe((data) => {
      this.motoristas = data;
      loading.dismiss();
    });
  }

  async confirmarExclusao(motorista: Motorista) {
    let alerta = await this.alertController.create({
      header: 'Confirmação de exclusão',
      message: `Deseja excluir o motorista ${motorista.nome}?`,
      buttons: [{
        text: 'SIM',
        handler: () => {
          this.excluir(motorista);
        }
      }, {
        text: 'NÃO'
      }]
    });
    alerta.present();
  }

  excluir(motorista: Motorista) {
    this.motoristaService.delete(motorista).subscribe(() => this.listar());
  }

}
