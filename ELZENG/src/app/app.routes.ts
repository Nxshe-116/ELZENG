import {RouterModule, Routes} from '@angular/router';
import {MusicComponent} from './pages/music/music.component';
import {ManagementComponent} from './pages/management/management.component';
import {PromotionComponent} from './pages/promotion/promotion.component';
import {AboutComponent} from './pages/about/about.component';
import {HomeComponent} from './pages/home/home.component';
import {NgModule} from '@angular/core';
import {CarouselComponent} from './components/carousel/carousel.component';
import {ConstComponent} from './pages/const/const.component';
import { ArtistComponent } from './pages/artist/artist.component';

export const routes:  Routes = [
  { path: '', component: HomeComponent },
  { path: 'music/distribution', component: MusicComponent },
  { path: 'music/management', component: MusicComponent },
  { path: 'music/artists', component: MusicComponent },
  { path: 'management', component: ManagementComponent },
  { path: 'promotion', component: PromotionComponent },
  { path: 'tv', component: ManagementComponent },
  { path: 'about', component: AboutComponent },
  { path: 'artist/:name', component: ArtistComponent },
  { path: '**', component: ConstComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
