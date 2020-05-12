import { Component, OnInit } from '@angular/core';
import { Carga } from 'src/app/model/carga.interface';
import { CargaService } from 'src/app/service/carga.service';
import { ActivatedRoute } from '@angular/router';
import { NavController, LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.page.html',
  styleUrls: ['./cadastro.page.scss'],
})
export class CadastroPage implements OnInit {

  carga: Carga;

  constructor(
    private cargaService : CargaService,
    private activatedRoute : ActivatedRoute,
    private navController : NavController,
    private loadingController : LoadingController
  ) { 
    this.carga = { origem: '', destino: '', descricao: '', peso: 0, frete: 0 };
  }

  async ngOnInit() {
    const id = parseInt(this.activatedRoute.snapshot.params['id']);       
    if(id) {
      const loading = await this.loadingController.create({message: 'Carregando'});
      loading.present();
      this.cargaService.find(id).subscribe((carga) => {
        this.carga = carga;
        loading.dismiss();
      });
    } 
  }


  async salvar() {
    let loading = await this.loadingController.create({message: 'Salvando'});
    loading.present();

    this.cargaService
      .save(this.carga)
      .subscribe(() => {
        loading.dismiss();
        this.navController.navigateForward(['/cargas']);
      });
  }

  isDisabled() {
    return !this.carga.origem || !this.carga.destino || !this.carga.descricao || !this.carga.peso || !this.carga.frete;
  }
}