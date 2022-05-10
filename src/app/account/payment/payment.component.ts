import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {luhnValidator, testValidator} from "./helpers/luhnValidator";
import {CrudService} from "../../services/crud.service";
import {Router} from "@angular/router";
import {Collection} from "../../data-types/collections";
import {AuthService} from "../../services/auth.service";
import {finalize, switchMap, take} from "rxjs";
import {NavigationService} from "../../services/navigation.service";
import {dateMask, getValidationConfigFromCardNo} from "./helpers/card.helper";



@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss']
})
export class PaymentComponent implements OnInit {

  public cardNumberGroup: FormGroup = new FormGroup({
    cardNumber: new FormControl('', [
      Validators.required,
      luhnValidator(),
    ]),
    cvv: new FormControl('', [Validators.required, Validators.min(100), Validators.max(9999)]),
    date: new FormControl('', [
      Validators.required,
      testValidator(),
    ]),
    value: new FormControl('', [Validators.required, Validators.min(1), Validators.max(1000000)]),
  });

  public dateMask = dateMask;

  public cardNumberControl: FormControl = new FormControl();

  constructor(private crudService: CrudService,
              private router: Router,
              private authService: AuthService,
              private navigationService: NavigationService) {
  }

  public getCardNumberControl(): FormControl {
    return this.cardNumberGroup.get('cardNumber') as FormControl;
  }

  ngOnInit() {
    this.cardNumberControl = this.getCardNumberControl();
  }

  public submitForm(): void {
    const {controls} = this.cardNumberGroup;
    if (this.cardNumberGroup.invalid) {
      Object.keys(controls).forEach((controlName) => controls[controlName].markAsTouched());
      return;
    }
    const data = {
      balance: controls['value'].value,
    };

    this.crudService.fetchOneDocumentFromFirestore(Collection.USERS, this.authService.getUser()!.uid)
      .pipe(
        take(1),
        switchMap((user: any) => {
          let finalBalance = +user.balance || 0;
          finalBalance += +data.balance;
          console.log(finalBalance);
          /*this.notification.success('Успех', 'Счёт пополнен', {
            timeOut: 1800,
            showProgressBar: true,
            clickToClose: true,
          });*/
          return this.crudService.updateDocument(Collection.USERS, this.authService.getUser()!.uid, {
            balance: finalBalance,
          })
        }),
        finalize(() => {
          void this.router.navigate([this.navigationService.getProfileLink()]);
        })
      ).subscribe()
  }

  public cardMaskFunction(rawValue: string): Array<RegExp> {
    const card = getValidationConfigFromCardNo(rawValue);
    if (card) {
      return card.mask;
    }
    return [/\d/];
  }
}
