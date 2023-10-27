import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Email } from "app/models/email";
import { EmailSenderService } from "app/services/email-sender.service";

@Component({
  selector: "app-form",
  templateUrl: "./form.component.html",
  styleUrls: ["./form.component.css"]
})
export class FormComponent implements OnInit {
  formulario!: FormGroup;

  constructor(private formBuilder: FormBuilder, private emailService: EmailSenderService) {}

  ngOnInit(): void {
    this.formulario = this.formBuilder.group({
      name: ["", Validators.compose([
        Validators.required,
          Validators.pattern("^[a-zA-ZÀ-ÿ]+(?: [a-zA-ZÀ-ÿ]+)*$")
        ])],
        email: ["", Validators.compose([
          Validators.required,
          Validators.pattern("^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.(com|br)$")
        ])],
        phone: ["", Validators.compose([
          Validators.required,
          Validators.pattern("^(1[1-9]|[4689][0-9]|2[12478]|3([1-5]|[7-8])|5([13-5])|7[193-7])9[0-9]{8}$")
        ])],
        subject: ["", Validators.compose([
          Validators.required,
          Validators.pattern("^[a-zA-ZÀ-ÿ]+(?: [a-zA-ZÀ-ÿ]+)*$")
        ])],
        message: ["", Validators.compose([
          Validators.required,
        ])],
      });

      const savedData = localStorage.getItem("formData");
      if(savedData){
        this.formulario.patchValue(JSON.parse(savedData));
      }

      // Observar mudanças nos valores do formulário e salvar no localStorage
      this.formulario.valueChanges.subscribe(value => {
        localStorage.setItem("formData", JSON.stringify(value));
      });
  }

  submitForm(): void {
    if (this.formulario.valid) {
      let email: Email= {
        name: this.formulario?.get('name')?.value,
        to: this.formulario?.get('email')?.value,
        subject: this.formulario?.get('subject')?.value,
        message: this.formulario?.get('message')?.value,
      };

      this.emailService.sendEmail(email).subscribe((res) => {
        email = res;
      });

      localStorage.removeItem("formData");
      this.formulario.reset();
    } else {
      console.log("O formulário é inválido. Por favor, corrija os campos destacados.");
    }
  }

  onClearData(): void{
    localStorage.removeItem("formData");
    this.formulario.reset();
  }
}
