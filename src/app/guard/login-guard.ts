import {CanActivate} from "@angular/router";
/**
 * Created by mana on 2018-10-24.
 */

export class LoginGuard implements CanActivate {
   canActivate()
   {
      let logged:boolean = Math.random()<0.5;
      if(!logged){
        console.log("is > 0.5");
      }
      return logged ;
   }
}
