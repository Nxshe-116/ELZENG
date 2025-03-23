import { Component } from '@angular/core';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { NgFor } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-music',
  imports: [
    SlickCarouselModule,
    NgFor,
    FormsModule,
    RouterModule
  ],
  templateUrl: './music.component.html',
  styleUrl: './music.component.css'
})



export class MusicComponent {


  constructor(private router: Router) {}



  
  searchQuery: string = ''; // Holds the search input value
  activeFilter: string | null = null; // Tracks the active filter


  onSearch(): void {
    console.log('Search Query:', this.searchQuery);

  }

  // Method to handle tag clicks
  filterContent(type: string): void {
    this.activeFilter = type;
    console.log('Filtering by:', type);

  }
  slides = [
    {
      image: 'assets/images/7.png', // Ensure leading '/'
      title: 'Ignite Music',
      primaryText: 'Listen Now',
      primaryLink: '/music',

    },
    {
      image: 'assets/images/image1.jpg',
      title: 'W.O.F Band',

      primaryText: 'Get Started',
      primaryLink: '/promotions',

    },


  ];


  slideConfig = {

    dots: true,
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

  artists = [
    {
      id: 1,
      name: 'Artist 1',
      image: 'assets/images/image1.jpg',
      bio: 'This is a brief bio of Artist 1.'
    },
    {
      id: 2,
      name: 'Artist 2',
      image: 'assets/images/img4.jpg',
      bio: 'This is a brief bio of Artist 2.'
    },
    {
      id: 3,
      name: 'Artist 3',
      image: 'assets/images/img4.jpg',
      bio: 'This is a brief bio of Artist 3.'
    },
    {
      id: 4,
      name: 'Artist 4',
      image: 'assets/images/img4.jpg',
      bio: 'This is a brief bio of Artist 4.'
    },
    {
      id: 5,
      name: 'Artist 5',
      image: 'assets/images/img1.jpg',
      bio: 'This is a brief bio of Artist 5.'
    },
    {
      id: 6,
      name: 'Artist 6',
      image: 'assets/images/img1.jpg',
      bio: 'This is a brief bio of Artist 6.'
    },
    {
      id: 7,
      name: 'Artist 7',
      image: 'assets/images/img1.jpg',
      bio: 'This is a brief bio of Artist 7.'
    },
    {
      id: 8,
      name: 'Artist 8',
      image: 'assets/images/img1.jpg',
      bio: 'This is a brief bio of Artist 8.'
    },
    {
      id: 9,
      name: 'Artist 9',
      image: 'assets/images/img1.jpg',
      bio: 'This is a brief bio of Artist 9.'
    },
    {
      id: 10,
      name: 'Artist 10',
      image: 'assets/images/img1.jpg',
      bio: 'This is a brief bio of Artist 10.'
    },
    // Add more artists as needed
  ];
  // Handle "Learn More" button click
  onLearnMore(artist: any): void {
    console.log('Learn More clicked for:', artist);
    this.router.navigate(['/artist', artist.id], { state: { artist } });
  }

}
