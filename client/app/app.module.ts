// Angular
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { JwtModule } from '@auth0/angular-jwt';
// Modules
import { AppRoutingModule } from './app-routing.module';
import { SharedModule } from './shared/shared.module';
// Services
import { CatService } from './services/cat.service';
import { CharacterService } from './services/character.service';
import { UserService } from './services/user.service';
import { AuthService } from './services/auth.service';
import { AuthGuardLogin } from './services/auth-guard-login.service';
import { AuthGuardAdmin } from './services/auth-guard-admin.service';
// Components
import { AppComponent } from './app.component';
import { CatsComponent } from './cats/cats.component';
import { AddCatFormComponent } from './add-cat-form/add-cat-form.component';
import { AboutComponent } from './about/about.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { AccountComponent } from './account/account.component';
import { AdminComponent } from './admin/admin.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { CharactersComponent } from './characters/characters.component';
import { AddCharacterFormComponent } from './add-character-form/add-character-form.component';
import { MoviesComponent } from './movies/movies.component';
import { AddMovieFormComponent } from './add-movie-form/add-movie-form.component';
import { MovieService } from './services/movie.service';

@NgModule({
  declarations: [
    AppComponent,
    CatsComponent,
    AddCatFormComponent,
    AboutComponent,
    RegisterComponent,
    LoginComponent,
    LogoutComponent,
    AccountComponent,
    AdminComponent,
    NotFoundComponent,
    CharactersComponent,
    AddCharacterFormComponent,
    MoviesComponent,
    AddMovieFormComponent,
   ],
  imports: [
    AppRoutingModule,
    SharedModule,
    JwtModule.forRoot({
      config: {
        tokenGetter: (): string => localStorage.getItem('token'),
        // allowedDomains: ['localhost:3000', 'localhost:4200']
      }
    })
  ],
  providers: [
    AuthService,
    AuthGuardLogin,
    AuthGuardAdmin,
    CatService,
    CharacterService,
    MovieService,
    UserService
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [AppComponent]
})

export class AppModule { }
