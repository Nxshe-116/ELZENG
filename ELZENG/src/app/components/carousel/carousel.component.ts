import { Component } from '@angular/core';
import {SlickCarouselModule} from 'ngx-slick-carousel';
import {CommonModule} from '@angular/common';

@Component({
  selector: 'app-carousel',
  standalone: true,
  imports: [
    CommonModule,
    SlickCarouselModule
  ],
  templateUrl: './carousel.component.html',
  styleUrl: './carousel.component.css'
})
export class CarouselComponent {
  slides = [
    {
      image: 'https://placehold.co/600x400', // Ensure leading '/'
      title: 'Welcome to Elzeng Music',
      description: 'Discover our latest music releases and events.',
      primaryText: 'Listen Now',
      primaryLink: '/music',
      secondaryText: 'Learn More',
      secondaryLink: '/about'
    },
    {
      image: 'https://placehold.co/600x400',
      title: 'Join Elzeng Promotions',
      description: 'Elevate your brand with our music promotions.',
      primaryText: 'Get Started',
      primaryLink: '/promotions',
      secondaryText: 'Contact Us',
      secondaryLink: '/contact'
    },
    {
      image: 'https://placehold.co/600x400',
      title: 'Meet Our Management Team',
      description: 'We manage top artists in the industry.',
      primaryText: 'View Artists',
      primaryLink: '/management',
      secondaryText: 'Work With Us',
      secondaryLink: '/careers'
    },
    {
      image: 'https://placehold.co/600x400',
      title: 'Meet Our Management Team',
      description: 'We manage top artists in the industry.',
      primaryText: 'View Artists',
      primaryLink: '/management',
      secondaryText: 'Work With Us',
      secondaryLink: '/careers'
    }

  ];


  slideConfig = {

    dots: true,
    infinite: true,
    speed: 500,
    arrows: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          arrows: true,
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
        }
      }
    ]
  };

}
