import { Component, OnInit } from '@angular/core';
import { MotoristaService } from 'src/app/service/motorista.service';
import { Motorista } from 'src/app/model/Motorista.interface';
import { ActivatedRoute } from '@angular/router';
import { NavController, LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.page.html',
  styleUrls: ['./cadastro.page.scss'],
})
export class CadastroPage implements OnInit {

  motorista: Motorista;

  constructor(
    private motoristaService : MotoristaService,
    private activatedRoute : ActivatedRoute,
    private navController : NavController,
    private loadingController : LoadingController
  ) { 
    this.motorista = { nome: '', habilitacao: '' };
  }

  async ngOnInit() {
    const id = this.activatedRoute.snapshot.params['id'];       
    if(id) {
      const loading = await this.loadingController.create({message: 'Carregando'});
      loading.present();
      this.motoristaService.find(id).subscribe((motorista) => {
        this.motorista = motorista;
        loading.dismiss();
      });
    } 
  }


  async salvar() {
    let loading = await this.loadingController.create({message: 'Salvando'});
    loading.present();

    this.motoristaService
      .save(this.motorista)
      .subscribe(() => {
        loading.dismiss();
        this.navController.navigateForward(['/motoristas']);
      }, () => {
        loading.dismiss()
      });
  }
}
