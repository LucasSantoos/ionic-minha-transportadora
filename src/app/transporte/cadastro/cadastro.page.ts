import { Component, OnInit } from '@angular/core';
import { Transporte } from 'src/app/model/transporte.interface';
import { Carga } from 'src/app/model/carga.interface';
import { TransporteService } from 'src/app/service/transporte.service';
import { ActivatedRoute } from '@angular/router';
import { NavController, LoadingController } from '@ionic/angular';
import { CargaService } from 'src/app/service/carga.service';
import { Caminhao } from 'src/app/model/caminhao.interface';
import { CaminhaoService } from 'src/app/service/caminhao.service';
import { Status } from 'src/app/model/status.interface';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.page.html',
  styleUrls: ['./cadastro.page.scss'],
})
export class CadastroPage implements OnInit {


  transporte: Transporte;
  cargas: Carga[];
  caminhoes: Caminhao[];
  status: Status[];

  constructor(
    private transporteService : TransporteService,
    private activatedRoute : ActivatedRoute,
    private navController : NavController,
    private loadingController : LoadingController,
    private cargaSercive : CargaService,
    private caminhaoSercive : CaminhaoService,
  ) { 
    this.transporte = { status: ''};
    this.status = 
    [
      { id: 1, description:'Aguardando carregamento' },
      { id: 2, description:'Em transporte' },
      { id: 3, description:'Aguardando descarregamento' },
      { id: 4, description:'Concluído' }
    ];
  }
    
  ngOnInit() {
    this.listarCargas();
    this.listarCaminhoes();
    this.carregarCadastro();
  }

  async listarCargas() {
    const loading = await this.loadingController.create({message:'Carregando cargas...'});
    this.cargaSercive.findAll().subscribe((cargas) => {
      this.cargas = cargas;
      loading.dismiss();
    });
  }

  async listarCaminhoes() {
    const loading = await this.loadingController.create({message:'Carregando caminhões...'});
    this.caminhaoSercive.findAll().subscribe((caminhoes) => {
      this.caminhoes = caminhoes;
      loading.dismiss();
    });
  }

  async carregarCadastro() {
    const id = parseInt(this.activatedRoute.snapshot.params['id']);       
    if(id) {
      const loading = await this.loadingController.create({message: 'Carregando'});
      loading.present();
      this.transporteService.find(id).subscribe((transporte) => {
        this.transporte = transporte;
        loading.dismiss();
      });
    } 
  }


  async salvar() {
    let loading = await this.loadingController.create({message: 'Salvando'});
    loading.present();

    this.transporteService
      .save(this.transporte)
      .subscribe(() => {
        loading.dismiss();
        this.navController.navigateForward(['/transporte']);
      });
  }

  compareCarga(e1: Carga, e2: Carga): boolean {
    return e1 && e2 ? e1.id === e2.id : e1 === e2;
  }

  compareCaminhao(e1: Caminhao, e2: Caminhao): boolean {
    return e1 && e2 ? e1.id === e2.id : e1 === e2;
  }

  compareStatus(e1: Status, e2: Status): boolean {
    return e1 && e2 ? e1.id === e2.id : e1 === e2;
  }
}
