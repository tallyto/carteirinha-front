import {Component} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Message, MessageService} from "primeng/api";
import {CarteirinhaService} from "../../services/carteirinha.service";

@Component({
  selector: 'app-cadastro-carteirinha',
  templateUrl: './cadastro-carteirinha.component.html',
  styleUrls: ['./cadastro-carteirinha.component.css']
})
export class CadastroCarteirinhaComponent {
  carteirinhaForm: FormGroup = new FormGroup({});
  msgs: Message[] = [];
  constructor(
    private fb: FormBuilder,
    private carteirinhaService: CarteirinhaService,
    private messageService: MessageService
  ) {
  }

  ngOnInit(): void {
    this.carteirinhaForm = this.fb.group({
      numero: ['', Validators.required],
      dataEmissao: ['', Validators.required],
      dataValidade: ['', Validators.required],
      usuario: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.carteirinhaForm.valid) {
      this.carteirinhaService.cadastrar(this.carteirinhaForm.value).subscribe(
        () => {
          this.carteirinhaForm.reset();
          this.messageService.add({
            severity: 'success',
            summary: 'Carteirinha cadastrada com sucesso!',
            life: 3000
          });
        },
        () => {
          this.messageService.add({
            severity: 'error',
            summary: 'Erro ao cadastrar carteirinha',
            life: 3000
          });
        }
      );
    } else {
      this.markFormGroupTouched(this.carteirinhaForm);
    }
  }

  markFormGroupTouched(formGroup: FormGroup) {
    Object.values(formGroup.controls).forEach(control => {
      control.markAsTouched();
      if (control instanceof FormGroup) {
        this.markFormGroupTouched(control);
      }
    });
  }

}
