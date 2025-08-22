import { Component } from "@angular/core";
import { ProduitService } from "../produit-service";
import { ProduitInterface } from "../produit-interface";
import { Router, RouterLink } from "@angular/router";

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
  deleteProduit(id: string) {
  // Demande de confirmation à l'utilisateur
  const confirmed = window.confirm('Êtes-vous sûr de vouloir supprimer ce produit ?❌🛑');

  if (confirmed) {
    this.produitService.delete(id).subscribe({
      next: () => {
        // Supprime le produit de la liste locale
        this.produits = this.produits.filter((produit) => produit._id !== id);
        // Message de succès
        alert('Produit supprimé avec succès !');
      },
      error: (err) => {
        // Message d'erreur en cas de problème
        alert('Impossible de supprimer ce produit. Veuillez réessayer !');
        console.error('Erreur lors de la suppression :', err);
      }
    });
  }
}
}
