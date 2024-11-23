import { HttpClient } from '@angular/common/http';
import { TerrainModel } from '../models/terrain.model';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';
import {Injectable} from '@angular/core';

/**
 * Service Angular pour gérer les opérations CRUD sur les terrains.
 * Chaque méthode de ce service correspond à une opération de contrôleur côté backend.
 */
@Injectable({providedIn: 'root'})
export class TerrainService {

  /**
   * URL de base de l'API backend.
   * Utilisée pour construire les chemins d'API pour les opérations CRUD.
   */
  API_URL: string = "http://localhost:8080/api";

  /**
   * Nom de l'entité terrain utilisé dans les routes API.
   * Cela permet de facilement référencer l'entité terrain dans les requêtes HTTP.
   */
  API_ENTITY_NAME: string = "terrain";

  /**
   * Constructeur pour initialiser les dépendances du service.
   *
   * @param http HttpClient pour effectuer les requêtes HTTP.
   * @param toastrService ToastrService pour afficher des notifications utilisateur.
   */
  constructor(private readonly http: HttpClient, private readonly toastrService: ToastrService) {}

  /**
   * Crée un nouveau terrain.
   *
   * Cette méthode envoie une requête POST à l'API backend pour créer un nouveau terrain.
   *
   * @param terrain Instance de `TerrainModel` représentant le terrain à créer.
   * @returns Observable contenant l'objet `TerrainModel` créé.
   */
  create(terrain: TerrainModel): Observable<TerrainModel> {
    return this.http.post<TerrainModel>(`${this.API_URL}/${this.API_ENTITY_NAME}`, terrain);
  }

  /**
   * Récupère la liste des terrains.
   *
   * Cette méthode envoie une requête GET à l'API backend pour récupérer tous les terrains.
   *
   * @returns Observable contenant un tableau d'instances `TerrainModel`.
   */
  get(): Observable<TerrainModel[]> {
    return this.http.get<TerrainModel[]>(`${this.API_URL}/${this.API_ENTITY_NAME}`);
  }

  /**
   * Récupère un terrain spécifique par son ID.
   *
   * Cette méthode envoie une requête GET à l'API backend pour récupérer un terrain précis en fonction de son ID.
   *
   * @param terrain Instance de `TerrainModel` contenant l'ID du terrain à récupérer.
   * @returns Observable contenant l'objet `TerrainModel` correspondant à l'ID.
   */
  getById(id: number): Observable<TerrainModel> {
    return this.http.get<TerrainModel>(`${this.API_URL}/${this.API_ENTITY_NAME}/${id}`);
  }

  /**
   * Met à jour un terrain existant.
   *
   * Cette méthode envoie une requête PUT à l'API backend pour mettre à jour les informations d'un terrain existant.
   *
   * @param terrain Instance de `TerrainModel` contenant les nouvelles données du terrain.
   * @returns Observable contenant l'objet `TerrainModel` mis à jour.
   */
  update(terrain: TerrainModel): Observable<TerrainModel> {
    return this.http.put<TerrainModel>(`${this.API_URL}/${this.API_ENTITY_NAME}/${terrain.id}`, terrain);
  }

  /**
   * Supprime un terrain existant.
   *
   * Cette méthode envoie une requête DELETE à l'API backend pour supprimer un terrain en fonction de son ID.
   *
   * @param terrain Instance de `TerrainModel` contenant l'ID du terrain à supprimer.
   * @returns Observable contenant l'objet `TerrainModel` supprimé.
   */
  delete(id: number): Observable<TerrainModel> {
    return this.http.delete<TerrainModel>(`${this.API_URL}/${this.API_ENTITY_NAME}/${id}`);
  }
}
