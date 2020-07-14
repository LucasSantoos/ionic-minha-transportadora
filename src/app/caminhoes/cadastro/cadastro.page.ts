import { Component, OnInit } from '@angular/core';
import { CaminhaoService } from 'src/app/service/caminhao.service';
import { NavController, LoadingController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';
import { Caminhao } from 'src/app/model/caminhao.interface';
import { MotoristaService } from 'src/app/service/motorista.service';
import { Motorista } from 'src/app/model/Motorista.interface';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.page.html',
  styleUrls: ['./cadastro.page.scss'],
})
export class CadastroPage implements OnInit {

  caminhao: Caminhao;
  motoristas: Motorista[];

  constructor(
    private caminhaoService : CaminhaoService,
    private activatedRoute : ActivatedRoute,
    private navController : NavController,
    private loadingController : LoadingController,
    private motoristaSercive : MotoristaService
  ) { 
    this.caminhao = { placa: '', capacidade: 0, motorista: { id: 0,  nome: '', habilitacao: ''} };
  }
    
  ngOnInit() {
    this.listarMotoristas();
    this.carregarCadastro();
  }

  async listarMotoristas() {
    const loading = await this.loadingController.create({message:'Carregando motoristas...'});
    this.motoristaSercive.findAll().subscribe((motoristas) => {
      this.motoristas = motoristas;
      loading.dismiss();
    });
  }

  async carregarCadastro() {
    const id = this.activatedRoute.snapshot.params['id'];       
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
      }, () => {
        loading.dismiss()
      });
  }

  compare(e1: Motorista, e2: Motorista): boolean {
    return e1 && e2 ? e1.id === e2.id : e1 === e2;
  }
}
