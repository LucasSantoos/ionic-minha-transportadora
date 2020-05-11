import { Component, OnInit } from '@angular/core';
import { CaminhaoService } from 'src/app/service/caminhao.service';
import { NavController, LoadingController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';
import { Caminhao } from 'src/app/model/caminhao.interface';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.page.html',
  styleUrls: ['./cadastro.page.scss'],
})
export class CadastroPage implements OnInit {

  caminhao: Caminhao;

  constructor(
    private caminhaoService : CaminhaoService,
    private activatedRoute : ActivatedRoute,
    private navController : NavController,
    private loadingController : LoadingController
  ) { 
    this.caminhao = { placa: '', capacidade: 0 };
  }

  async ngOnInit() {
    const id = parseInt(this.activatedRoute.snapshot.params['id']);       
    if(id) {
      const loading = await this.loadingController.create({message: 'Carregando'});
      loading.present();
      this.caminhaoService.find(id).subscribe((caminhao) => {
        this.caminhao = caminhao;
        loading.dismiss();
      });
    } 
  }


  async salvar() {
    let loading = await this.loadingController.create({message: 'Salvando'});
    loading.present();

    this.caminhaoService
      .save(this.caminhao)
      .subscribe(() => {
        loading.dismiss();
        this.navController.navigateForward(['/caminhoes']);
      });
  }
}
