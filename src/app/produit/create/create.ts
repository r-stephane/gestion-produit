import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms'
import { Component } from '@angular/core';
import { ProduitService } from '../produit-service';
import { Router } from '@angular/router';
import { produits } from '../produit';

@Component({
  selector: 'app-create',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './create.html',
  styleUrl: './create.css'
})
export class Create {
  form!: FormGroup;

  constructor(public ProduitService: ProduitService, private router: Router) { }

  ngOnInit() {
    this.form = new FormGroup({
      nom: new FormControl('', [Validators.required]),
      prix: new FormControl('', [Validators.required]),
      description: new FormControl('', [Validators.required]),
      categorie: new FormControl('', [Validators.required]),
      stock: new FormControl('', [Validators.required])

    })
  }
  onSubmit() {
    console.log(this.form.value);
    if (this.form.invalid) {
      return;
    }
    this.ProduitService.create(this.form.value).subscribe((res: any) => {
      console.log("produit created successfully!");
      this.router.navigateByUrl('produit');
    });
  }
}

