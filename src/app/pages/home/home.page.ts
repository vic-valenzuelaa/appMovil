import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
data:any;
  constructor(private activatedRoute: ActivatedRoute,
    private router:Router) {

      // Se llama a la ruta activa y se obtiene sus parametros mediante una suscripción
      this.activatedRoute.queryParams.subscribe(params =>{//utilizo lambda
        if (this.router.getCurrentNavigation()?.extras.state) {
          this.data = this.router.getCurrentNavigation()?.extras.state?.["user"];
          console.log(this.data)
        }else{
          this.router.navigate(["/login"]);
        }
      });

    }


}
