import { Component, OnInit } from '@angular/core';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { CommonModule, NgFor, NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-music',
  imports: [
    SlickCarouselModule,
    NgFor,
    FormsModule,
    RouterModule,
    NgIf,
    CommonModule
  ],
  templateUrl: './music.component.html',
  styleUrl: './music.component.css'
})



export class MusicComponent implements OnInit {
  ngOnInit() {
    this.filteredArtists = [...this.artists];
    window.scrollTo(0, 0); // Reset scroll to top on route change
  };


  constructor(private router: Router) { }


  filteredArtists: any[] = [];
  searchQuery: string = '';
  activeFilter: string = 'all';


  onSearch() {
    this.applyFilters();
  }

  filterContent(category: string) {
    this.activeFilter = category;
    this.applyFilters();
  }

  applyFilters() {
    this.filteredArtists = this.artists.filter(artist => {
      // Apply category filter
      const categoryMatch =
        this.activeFilter === 'all' ||
        artist.category === this.activeFilter;

      // Apply search filter
      const searchMatch =
        !this.searchQuery ||
        artist.name.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
        (artist.bio && artist.bio.toLowerCase().includes(this.searchQuery.toLowerCase()));

      return categoryMatch && searchMatch;
    });
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

      primaryText: 'Listen Now',
      primaryLink: '/music',

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
      name: 'Lecrae',
      image: 'assets/images/lecrae.jpg',
      bio: 'Lecrae Moore, known mononymously as Lecrae, is a Grammy-winning Christian hip-hop artist, record producer, and entrepreneur. As the co-founder of Reach Records and ReachLife Ministries, he has been instrumental in bringing Christian hip-hop to mainstream audiences. His albums often explore themes of faith, social justice, and personal redemption, with his 2014 album "Anomaly" debuting at #1 on the Billboard 200. Beyond music, Lecrae is an advocate for education reform and has established scholarship programs for underprivileged youth.',
      category: 'ARTIST',
      social: {
        instagram: 'https://instagram.com/lecrae',
        twitter: 'https://twitter.com/lecrae',
        facebook: 'https://facebook.com/lecrae',
        youtube: 'https://youtube.com/lecrae',
        spotify: 'https://open.spotify.com/artist/28lE7zrAAOw2c7NaFNbWoa',
        tiktok: 'https://tiktok.com/@lecrae',
        website: 'https://lecrae.com'
      },
      stats: {
        monthlyListeners: '3.2M',
        followers: '1.8M',
        albums: 12,
        awards: ['2 Grammy Awards', '7 Dove Awards', 'Billboard Music Award']
      },
      notableWorks: ['Anomaly', 'Gravity', 'Restoration']
    },
    {
      id: 2,
      name: 'Kirk Franklin',
      image: 'assets/images/kirk-franklin.jpg',
      bio: 'Kirk Franklin is a 19-time Grammy Award-winning gospel legend who revolutionized gospel music by blending traditional hymns with contemporary hip-hop and R&B. As the leader of The Family and God\'s Property choirs, Franklin brought gospel to mainstream audiences in the 1990s. His innovative approach earned him recognition as one of the most influential figures in contemporary Christian music. Beyond performing, Franklin is a renowned choir director, author, and television personality who has mentored countless artists in the gospel community.',
      category: 'ARTIST',
      social: {
        instagram: 'https://instagram.com/kirkfranklin',
        twitter: 'https://twitter.com/kirkfranklin',
        facebook: 'https://facebook.com/kirkfranklin',
        youtube: 'https://youtube.com/kirkfranklin',
        spotify: 'https://open.spotify.com/artist/6XyY86QOPPrYVGvF9ch6wz',
        tiktok: 'https://tiktok.com/@kirkfranklin',
        website: 'https://kirkfranklin.com'
      },
      stats: {
        monthlyListeners: '2.9M',
        followers: '1.5M',
        albums: 15,
        awards: ['19 Grammy Awards', '16 Stellar Awards', 'NAACP Image Award']
      },
      notableWorks: ['Stomp', 'Imagine Me', 'Love Theory']
    },
    {
      id: 3,
      name: 'Hle',
      image: 'assets/images/hle.jpg',
      bio: 'Hlengiwe "Hle" Mhlaba is a South African gospel powerhouse known for her soul-stirring vocals and dynamic worship leadership. Rising to fame through her viral live worship sessions, Hle has become one of Africa\'s most streamed gospel artists. Her music blends traditional African gospel with contemporary worship, creating a unique sound that resonates across generations. Beyond recording, she leads worship at major conferences across Africa and mentors young worship leaders through her ministry school.',
      category: 'ARTIST',
      social: {
        instagram: 'https://instagram.com/hlelive',
        twitter: 'https://twitter.com/hlelive',
        facebook: 'https://facebook.com/hlelive',
        youtube: 'https://youtube.com/hlelive',
        spotify: 'https://open.spotify.com/artist/6YleHvL4p4vC5t5zx6j3H9',
        tiktok: 'https://tiktok.com/@hlelive',
        website: 'https://hleministries.org'
      },
      stats: {
        monthlyListeners: '850K',
        followers: '420K',
        albums: 5,
        awards: ['SABC Crown Gospel Award', 'Afrika Mzansi Award']
      },
      notableWorks: ['Ngiyakuthanda', 'UnguJehova', 'Thina Sobabili']
    },
    {
      id: 4,
      name: 'Maverick City Music',
      image: 'assets/images/maverickcitymusic.jpg',
      bio: 'Maverick City Music is a diverse collective of worship leaders and songwriters creating culturally relevant worship music that bridges generations and ethnicities. Founded in 2018, the group has quickly become one of the most influential forces in modern worship, known for their spontaneous worship recordings and emphasis on authenticity. Their collaborative approach brings together established and emerging artists, creating space for diverse voices in worship. The collective has partnered with major churches and organizations worldwide to develop new expressions of worship.',
      category: 'ARTIST',
      social: {
        instagram: 'https://instagram.com/maverickcitymusic',
        twitter: 'https://twitter.com/mavcitymusic',
        facebook: 'https://facebook.com/maverickcitymusic',
        youtube: 'https://youtube.com/maverickcitymusic',
        spotify: 'https://open.spotify.com/artist/3wYyutjgII8LJVVOLrGI0D',
        tiktok: 'https://tiktok.com/@maverickcitymusic',
        website: 'https://maverickcitymusic.com'
      },
      stats: {
        monthlyListeners: '4.1M',
        followers: '1.3M',
        albums: 8,
        awards: ['2 Grammy Awards', '5 Dove Awards']
      },
      notableWorks: ['Jireh', 'Promises', 'Man of Your Word']
    },
    {
      id: 5,
      name: 'Ignite Music',
      image: 'assets/images/7.png',
      bio: 'Ignite Music is a pioneering gospel music label and distribution company dedicated to amplifying faith-based artists globally. Founded in 2010, the company has grown into one of the most respected independent Christian music distributors, specializing in digital strategy and artist development. Ignite\'s innovative approach combines traditional label services with cutting-edge digital distribution, helping artists reach global audiences while maintaining creative control. The company also hosts annual worship leader intensives and songwriting camps to nurture new talent.',
      category: 'DISTRIBUTION',
      headquarters: 'Nashville, Tennessee',
      founded: 2010,
      employees: 85,
      subsidiaries: ['Kingdom Sound Records', 'Revive Publishing', 'Faith Beats Productions'],
      social: {
        instagram: 'https://instagram.com/ignitemusic',
        twitter: 'https://twitter.com/ignitemusic',
        facebook: 'https://facebook.com/ignitemusic',
        linkedin: 'https://linkedin.com/company/ignite-music',
        website: 'https://ignitemusicgroup.com'
      },
      notableClients: ['Fresh Life Worship', 'The Belonging Co', 'UPPERROOM']
    },
    {
      id: 6,
      name: 'Bethel Music',
      image: 'assets/images/bethel-music.jpg',
      bio: 'Bethel Music is a worship movement originating from Bethel Church in Redding, California, that has grown into a global force in worship music. Known for anthems like "Reckless Love" and "No Longer Slaves," the collective has redefined modern worship with their distinctive sound and emphasis on spontaneous worship. Beyond recording, Bethel Music operates a worship school, hosts conferences worldwide, and maintains a strong emphasis on mentoring the next generation of worship leaders. Their music is sung in churches across denominations and languages globally.',
      category: 'ARTIST',
      social: {
        instagram: 'https://instagram.com/bethelmusic',
        twitter: 'https://twitter.com/bethelmusic',
        facebook: 'https://facebook.com/bethelmusic',
        youtube: 'https://youtube.com/bethelmusic',
        spotify: 'https://open.spotify.com/artist/1c22GXH30ijlOfXhfLzV10',
        tiktok: 'https://tiktok.com/@bethelmusic',
        website: 'https://bethelmusic.com'
      },
      stats: {
        monthlyListeners: '3.8M',
        followers: '1.2M',
        albums: 25,
        awards: ['GMA Dove Award', 'Billboard Music Award']
      },
      notableWorks: ['Reckless Love', 'No Longer Slaves', 'Goodness of God']
    },
    {
      id: 7,
      name: 'Elevation Worship',
      image: 'assets/images/elevation-worship.jpg',
      bio: 'Elevation Worship is the Grammy-nominated worship team from Elevation Church in Charlotte, North Carolina, known for powerful live recordings and congregational anthems. Since forming in 2007, the team has become one of the most influential worship collectives, with songs like "Do It Again" and "Graves Into Gardens" being sung worldwide. Their recording process often captures spontaneous moments of worship during actual church services, creating an authentic sound that resonates with churches globally. The team is committed to raising up worship leaders through their annual conference and training initiatives.',
      category: 'ARTIST',
      social: {
        instagram: 'https://instagram.com/elevationworship',
        twitter: 'https://twitter.com/elevation_wrshp',
        facebook: 'https://facebook.com/elevationworship',
        youtube: 'https://youtube.com/elevationworship',
        spotify: 'https://open.spotify.com/artist/5JZ7CnR6gTvEMKX4g70Amv',
        tiktok: 'https://tiktok.com/@elevationworship',
        website: 'https://elevationworship.com'
      },
      stats: {
        monthlyListeners: '5.2M',
        followers: '1.6M',
        albums: 18,
        awards: ['Billboard Music Award', 'Multiple Dove Awards']
      },
      notableWorks: ['Do It Again', 'Graves Into Gardens', 'See a Victory']
    },

    {
      id: 8,
      name: 'Unveiled',
      image: 'assets/images/unveiled.jpg',
      bio: 'Unveiled is a contemporary worship collective known for their intimate, prophetic worship style and powerful live recordings. Emerging from the UK worship scene, they\'ve gained global recognition for songs that bridge charismatic worship with congregational accessibility. Their music often features extended spontaneous moments and lyrics rich with biblical theology. The group collaborates with churches and worship schools worldwide to equip worship leaders in developing both musical excellence and spiritual depth.',
      category: 'ARTIST',
      social: {
        instagram: 'https://instagram.com/unveiledworship',
        twitter: 'https://twitter.com/unveiledworship',
        facebook: 'https://facebook.com/unveiledworship',
        youtube: 'https://youtube.com/unveiledworship',
        spotify: 'https://open.spotify.com/artist/5g3Ot1s3jO1dQ53s4O9Wq5',
        tiktok: 'https://tiktok.com/@unveiledworship',
        website: 'https://unveiledworship.com'
      },
      stats: {
        monthlyListeners: '1.2M',
        followers: '680K',
        albums: 4,
        awards: ['Worship Leader Magazine Award']
      },
      notableWorks: ['All Heaven Declares', 'Weight of Glory', 'Nothing Else']
    },
    {
      id: 9,
      name: 'Tasha Cobbs Leonard',
      image: 'assets/images/tasha-cobbs.jpg',
      bio: 'Tasha Cobbs Leonard is a Grammy-winning gospel powerhouse whose voice has become synonymous with modern gospel worship. The Georgia-born artist rose to fame with her breakthrough hit "Break Every Chain" which crossed over to mainstream audiences. Her music blends traditional gospel with contemporary worship, creating a sound that resonates in both churches and concert venues. Beyond performing, she pastors a church with her husband and mentors young female artists through her "Women\'s Empowerment" conferences.',
      category: 'ARTIST',
      social: {
        instagram: 'https://instagram.com/tashacobbsleonard',
        twitter: 'https://twitter.com/tashacobbs',
        facebook: 'https://facebook.com/tashacobbsleonard',
        youtube: 'https://youtube.com/tashacobbsleonard',
        spotify: 'https://open.spotify.com/artist/2YVxwcB3B5q3KcdTMZq4O1',
        tiktok: 'https://tiktok.com/@tashacobbsleonard',
        website: 'https://tashacobbsleonard.com'
      },
      stats: {
        monthlyListeners: '2.3M',
        followers: '950K',
        albums: 6,
        awards: ['Grammy Award', 'Multiple Dove Awards', 'BET Award']
      },
      notableWorks: ['Break Every Chain', 'For Your Glory', 'This Is a Move']
    },
    {
      id: 10,
      name: 'Hillsong Young & Free',
      image: 'assets/images/youngandfree.jpg',
      bio: 'Hillsong Young & Free is the youth-focused worship team from Hillsong Church that has revolutionized worship music for younger generations with their EDM-influenced sound. Since their 2013 debut, they\'ve brought a fresh, energetic approach to worship that resonates with digital-native believers. Their lyrics address faith struggles relevant to young adults while maintaining deep theological roots. The team invests heavily in mentoring teenage worship leaders through their global youth conferences and training programs.',
      category: 'ARTIST',
      social: {
        instagram: 'https://instagram.com/youngandfree',
        twitter: 'https://twitter.com/youngandfree',
        facebook: 'https://facebook.com/hillsongyoungandfree',
        youtube: 'https://youtube.com/hillsongyoungandfree',
        spotify: 'https://open.spotify.com/artist/7mQdAYcMxajs5LyCoUo8S1',
        tiktok: 'https://tiktok.com/@youngandfree',
        website: 'https://hillsong.com/youngandfree'
      },
      stats: {
        monthlyListeners: '3.5M',
        followers: '1.1M',
        albums: 5,
        awards: ['ARIA Award', 'Dove Award']
      },
      notableWorks: ['Wake', 'Real Love', 'Best Friends']
    }

  ];
  // Handle "Learn More" button click
  onLearnMore(artist: any): void {
    console.log('Learn More clicked for:', artist);
    this.router.navigate(['/artist', artist.id], {state: {artist}}).then();
   }

}
