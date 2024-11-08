import {HttpClient} from '@angular/common/http';
import {TerrainModel} from '../models/terrain.model';
import {ToastrService} from 'ngx-toastr';
import {Observable} from 'rxjs';

export class TerrainService {
  // indication de la page de l'api à laquelle est relier le service
  API_URL: string = "http://localhost:8080/api";  // URL du serveur
  API_ENTITY_NAME: string = "terrain";            // page de l'api

  // faire autant de methodes qu'il y en a dans les controllers du back
  // il doit y avoir une methode front pour une methode back

  // Constructeur
  constructor(private readonly http: HttpClient, private readonly toastrService: ToastrService) {
    ;
  }

  // PostMapping
  create(terrain: TerrainModel): Observable<TerrainModel> {
    return this.http.post<TerrainModel>(`${this.API_URL}/${this.API_ENTITY_NAME}/`, terrain);
  }

  // GetMapping
  get(terrain: TerrainModel): Observable<TerrainModel>{
      // A MODIFIER
    return this.http.post<TerrainModel>(`${this.API_URL}/${this.API_ENTITY_NAME}/`, terrain);
  }

  // GetMapping {id}
  getById(terrain: TerrainModel): Observable<TerrainModel>{
    // A MODIFIER
    return this.http.post<TerrainModel>(`${this.API_URL}/${this.API_ENTITY_NAME}/`, terrain);
  }

  // PutMapping
  update(terrain: TerrainModel): Observable<TerrainModel>{
    // A MODIFIER
    return this.http.post<TerrainModel>(`${this.API_URL}/${this.API_ENTITY_NAME}/`, terrain);
  }

  // DeleteMapping
  delete(terrain: TerrainModel): Observable<TerrainModel>{
    // A MODIFIER
    return this.http.post<TerrainModel>(`${this.API_URL}/${this.API_ENTITY_NAME}/`, terrain);
  }
}
