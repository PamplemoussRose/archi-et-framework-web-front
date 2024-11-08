import {HttpClient} from '@angular/common/http';
import {UtilisateurModel} from '../models/utilisateur.model';
import {ToastrService} from 'ngx-toastr';
import {Observable} from 'rxjs';

export class UtilisateurService {
  // indication de la page de l'api à laquelle est relier le service
  API_URL: string = "http://localhost:8080/api";  // URL du serveur
  API_ENTITY_NAME: string = "utilisateur";        // page de l'api

  // faire autant de methodes qu'il y en a dans les controllers du back
  // il doit y avoir une methode front pour une methode back

  // Constructeur
  constructor(private readonly http: HttpClient, private readonly toastrService: ToastrService) {
    ;
  }

  // PostMapping
  create(utilisateur: UtilisateurModel): Observable<UtilisateurModel> {
    return this.http.post<UtilisateurModel>(`${this.API_URL}/${this.API_ENTITY_NAME}/`, utilisateur);
  }

  // GetMapping
  get(utilisateur: UtilisateurModel): Observable<UtilisateurModel>{
    // A MODIFIER
    return this.http.post<UtilisateurModel>(`${this.API_URL}/${this.API_ENTITY_NAME}/`, utilisateur);
  }

  // GetMapping {id}
  getById(utilisateur: UtilisateurModel): Observable<UtilisateurModel>{
    // A MODIFIER
    return this.http.post<UtilisateurModel>(`${this.API_URL}/${this.API_ENTITY_NAME}/`, utilisateur);
  }

  // PutMapping
  update(utilisateur: UtilisateurModel): Observable<UtilisateurModel>{
    // A MODIFIER
    return this.http.post<UtilisateurModel>(`${this.API_URL}/${this.API_ENTITY_NAME}/`, utilisateur);
  }

  // DeleteMapping
  delete(utilisateur: UtilisateurModel): Observable<UtilisateurModel>{
    // A MODIFIER
    return this.http.post<UtilisateurModel>(`${this.API_URL}/${this.API_ENTITY_NAME}/`, utilisateur);
  }
}
