import { NgFor, NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { SlickCarouselModule } from 'ngx-slick-carousel';

@Component({
  selector: 'app-artist',
  imports: [ SlickCarouselModule,
    FormsModule,
    NgIf,
    NgFor,
    RouterModule],
  templateUrl: './artist.component.html',
  styleUrl: './artist.component.css'
})
export class ArtistComponent implements OnInit {
  artist: any;

  constructor(
    private route: ActivatedRoute,

  ) { }


  ngOnInit(): void {
    this.artist = history.state.artist;
    console.log(this.artist.name);
    window.scrollTo(0,0);

  }


  slideConfig = {

    dots: false,
    infinite: true,
    speed: 10,
    arrows: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          arrows: false,
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
        }
      }
    ]
  };
}
