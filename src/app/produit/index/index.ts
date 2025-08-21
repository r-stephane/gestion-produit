import { Component } from "@angular/core";
import { ProduitService } from "../produit-service";
import { ProduitInterface } from "../produit-interface";
import {Router, RouterLink } from "@angular/router";

@Component({
  selector: 'app-index',
  imports: [RouterLink],
  templateUrl: './index.html',
  styleUrl: './index.css'
})
export class Index {
  produits: ProduitInterface[] = [];

  constructor(public produitService: ProduitService, private router: Router) { }

  ngOnInit() {
    console.log(this.router.url);

    this.produitService.getAll().subscribe((data: ProduitInterface[]) => {
      this.produits = data;
      console.log(this.produits);
    });
  }
  deleteProduit(id: string){
    this.produitService.delete(id).subscribe(() => {
      this.produits = this.produits.filter((produit) => produit._id !== id);
    })
  }
}
