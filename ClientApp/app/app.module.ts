import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { UniversalModule } from 'angular2-universal';
import { AppComponent } from './components/app/app.component'
import { HomeComponent } from './components/home/home.component';
import { HeaderComponent } from './components/Shared/header/header.component';
import { StoryDetailComponent } from './components/story-detail/story-detail.component';
import { StorySummaryComponent } from './components/story-summary/story-summary.component';
import { StoryService } from './components/Shared/story.service';

@NgModule({
    bootstrap: [ AppComponent ],
    declarations: [
        AppComponent,
        HomeComponent,
        HeaderComponent,
        StoryDetailComponent,
        StorySummaryComponent
    ],
    imports: [
        UniversalModule, // Must be first import. This automatically imports BrowserModule, HttpModule, and JsonpModule too.
        RouterModule.forRoot([
            { path: '', redirectTo: 'home', pathMatch: 'full' },
            { path: 'home', component: HomeComponent },
            { path: 'detail/:id', component: StoryDetailComponent },
            { path: '**', redirectTo: 'home' }
        ])
    ],
    providers: [ StoryService ]
})
export class AppModule {
}
