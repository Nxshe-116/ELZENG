import {RouterModule, Routes} from '@angular/router';
import {MusicComponent} from './pages/music/music.component';
import {ManagementComponent} from './pages/management/management.component';
import {PromotionComponent} from './pages/promotion/promotion.component';
import {AboutComponent} from './pages/about/about.component';
import {HomeComponent} from './pages/home/home.component';
import {NgModule} from '@angular/core';
import {CarouselComponent} from './components/carousel/carousel.component';

export const routes:  Routes = [
  { path: '', component: HomeComponent },
  { path: 'music', component: MusicComponent },
  { path: 'management', component: ManagementComponent },
  { path: 'promotion', component: PromotionComponent },
  { path: 'tv', component: ManagementComponent },
  { path: 'about', component: AboutComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
