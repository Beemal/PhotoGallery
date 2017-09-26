import {Component, OnInit} from '@angular/core';
import { ImageService } from './shared/image.service';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'image-detail',
    templateUrl: './image-detail.component.html',
    styleUrls: ['./image-detail.component.css']
})

export class ImageDetailComponent implements OnInit{
   image: any;


    constructor(private imageService: ImageService, private route:ActivatedRoute){}

   ngOnInit(){
        this.image = this.imageService.getImage(
            +this.route.snapshot.params['id']   // + sign is going to convert id to number
            // this.route.snapshot will provide the initail value of routing params
        )
   }
}