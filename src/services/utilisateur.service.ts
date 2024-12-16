import { HttpClient } from '@angular/common/http';
import { UtilisateurModel } from '../models/utilisateur.model';
import { ToastrService } from 'ngx-toastr';
import {map, Observable} from 'rxjs';
import { Injectable } from '@angular/core';

/**
 * Service Angular pour gérer les opérations CRUD sur les utilisateurs.
 * Chaque méthode correspond à une opération côté backend.
 *
 * Ce service est fourni au niveau racine grâce au décorateur `@Injectable`.
 */
@Injectable({ providedIn: 'root' })
export class UtilisateurService {

  /**
   * URL de base de l'API backend.
   * Utilisée pour construire les chemins d'accès aux ressources utilisateur.
   */
  private readonly API_URL: string = "http://localhost:8080/api";

  /**
   * Nom de l'entité utilisateur utilisé pour les routes API.
   * Permet une gestion centralisée et simplifiée des chemins.
   */
  private readonly API_ENTITY_NAME: string = "utilisateur";

  /**
   * Constructeur pour initialiser les dépendances nécessaires au service.
   *
   * @param http Service HttpClient pour effectuer les requêtes HTTP.
   * @param toastrService Service ToastrService pour afficher des notifications.
   */
  constructor(
    private readonly http: HttpClient,
    private readonly toastrService: ToastrService
  ) {}

  /**
   * Crée un nouvel utilisateur dans le système.
   *
   * Cette méthode effectue une requête POST pour envoyer les données utilisateur au backend.
   *
   * @param utilisateur Instance de `UtilisateurModel` contenant les informations de l'utilisateur à créer.
   * @returns Observable contenant l'objet `UtilisateurModel` créé par le backend.
   */
  create(utilisateur: UtilisateurModel): Observable<UtilisateurModel> {
    return this.http.post<UtilisateurModel>(`${this.API_URL}/${this.API_ENTITY_NAME}`, utilisateur);
  }

  /**
   * Récupère la liste de tous les utilisateurs.
   *
   * Cette méthode effectue une requête GET pour récupérer les utilisateurs disponibles.
   *
   * @returns Observable contenant un tableau d'instances `UtilisateurModel`.
   */
  get(): Observable<UtilisateurModel[]> {
    return this.http.get<UtilisateurModel[]>(`${this.API_URL}/${this.API_ENTITY_NAME}`);
  }

  /**
   * Récupère un utilisateur spécifique par son ID.
   *
   * Cette méthode effectue une requête GET en incluant l'ID de l'utilisateur dans l'URL.
   *
   * @param id Identifiant unique de l'utilisateur à récupérer.
   * @returns Observable contenant l'objet `UtilisateurModel` correspondant.
   */
  getById(id: number): Observable<UtilisateurModel> {
    return this.http.get<UtilisateurModel>(`${this.API_URL}/${this.API_ENTITY_NAME}/${id}`);
  }

  /**
   * Met à jour un utilisateur existant dans le système.
   *
   * Cette méthode effectue une requête PUT pour mettre à jour les informations d'un utilisateur spécifique.
   *
   * @param utilisateur Instance de `UtilisateurModel` contenant les nouvelles données, y compris son ID.
   * @returns Observable contenant l'objet `UtilisateurModel` mis à jour.
   */
  update(utilisateur: UtilisateurModel): Observable<UtilisateurModel> {
    return this.http.put<UtilisateurModel>(
      `${this.API_URL}/${this.API_ENTITY_NAME}/${utilisateur.id}`, utilisateur);
  }

  /**
   * Supprime un utilisateur existant par son ID.
   *
   * Cette méthode effectue une requête DELETE pour retirer un utilisateur du système.
   *
   * @param id Identifiant unique de l'utilisateur à supprimer.
   * @returns Observable contenant l'objet `UtilisateurModel` supprimé.
   */
  delete(id: number): Observable<UtilisateurModel> {
    return this.http.delete<UtilisateurModel>(`${this.API_URL}/${this.API_ENTITY_NAME}/${id}`);
  }
}
