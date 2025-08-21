import { Component } from '@angular/core';
import { ProduitService } from '../produit-service';
import { ActivatedRoute, Router } from '@angular/router';
import { ProduitInterface } from '../produit-interface';

@Component({
  selector: 'app-read',
  imports: [],
  templateUrl: './read.html',
  styleUrl: './read.css'
})

export class Read {
  id!: number;
  produit!: ProduitInterface;
  constructor(public produitService: ProduitService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.id = this.route.snapshot.params['produitId'];
    this.produitService.getSingle(this.id).subscribe((data: ProduitInterface) => {
      console.log(this.id);
      this.produit = data;

    }    );       
  }
}
