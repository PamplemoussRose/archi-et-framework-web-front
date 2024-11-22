import { HttpClient } from '@angular/common/http';
import { UtilisateurModel } from '../models/utilisateur.model';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';



/**
 * Service Angular pour gérer les opérations CRUD sur les utilisateurs.
 * Chaque méthode de ce service correspond à une opération de contrôleur côté backend.
 */
export class UtilisateurService {

  /**
   * URL de base de l'API backend.
   * Utilisée pour construire les chemins d'API pour les opérations CRUD sur les utilisateurs.
   */
  API_URL: string = "http://localhost:8080/api";

  /**
   * Nom de l'entité utilisateur utilisé dans les routes API.
   * Cela permet de facilement référencer l'entité utilisateur dans les requêtes HTTP.
   */
  API_ENTITY_NAME: string = "utilisateur";

  /**
   * Constructeur pour initialiser les dépendances du service.
   *
   * @param http HttpClient pour effectuer les requêtes HTTP.
   * @param toastrService ToastrService pour afficher des notifications utilisateur.
   */
  constructor(private readonly http: HttpClient, private readonly toastrService: ToastrService) {}

  /**
   * Crée un nouvel utilisateur.
   *
   * Cette méthode envoie une requête POST à l'API backend pour créer un nouvel utilisateur.
   *
   * @param utilisateur Instance de `UtilisateurModel` représentant l'utilisateur à créer.
   * @returns Observable contenant l'objet `UtilisateurModel` créé.
   */
  create(utilisateur: UtilisateurModel): Observable<UtilisateurModel> {
    return this.http.post<UtilisateurModel>(`${this.API_URL}/${this.API_ENTITY_NAME}`, utilisateur);
  }

  /**
   * Récupère la liste des utilisateurs.
   *
   * Cette méthode envoie une requête GET à l'API backend pour récupérer tous les utilisateurs.
   *
   * @returns Observable contenant un tableau d'instances `UtilisateurModel`.
   */
  get(): Observable<UtilisateurModel> {
    return this.http.get<UtilisateurModel>(`${this.API_URL}/${this.API_ENTITY_NAME}`);
  }

  /**
   * Récupère un utilisateur spécifique par son ID.
   *
   * Cette méthode envoie une requête GET à l'API backend pour récupérer un utilisateur en fonction de son ID.
   *
   * @param utilisateur Instance de `UtilisateurModel` contenant l'ID de l'utilisateur à récupérer.
   * @returns Observable contenant l'objet `UtilisateurModel` correspondant à l'ID.
   */
  getById(utilisateur: UtilisateurModel): Observable<UtilisateurModel> {
    return this.http.get<UtilisateurModel>(`${this.API_URL}/${this.API_ENTITY_NAME}/${utilisateur.id}`);
  }

  /**
   * Met à jour un utilisateur existant.
   *
   * Cette méthode envoie une requête PUT à l'API backend pour mettre à jour les informations d'un utilisateur existant.
   *
   * @param utilisateur Instance de `UtilisateurModel` contenant les nouvelles données de l'utilisateur.
   * @returns Observable contenant l'objet `UtilisateurModel` mis à jour.
   */
  update(utilisateur: UtilisateurModel): Observable<UtilisateurModel> {
    return this.http.put<UtilisateurModel>(`${this.API_URL}/${this.API_ENTITY_NAME}/${utilisateur.id}`, utilisateur);
  }

  /**
   * Supprime un utilisateur existant.
   *
   * Cette méthode envoie une requête DELETE à l'API backend pour supprimer un utilisateur en fonction de son ID.
   *
   * @param utilisateur Instance de `UtilisateurModel` contenant l'ID de l'utilisateur à supprimer.
   * @returns Observable contenant l'objet `UtilisateurModel` supprimé.
   */
  delete(utilisateur: UtilisateurModel): Observable<UtilisateurModel> {
    return this.http.delete<UtilisateurModel>(`${this.API_URL}/${this.API_ENTITY_NAME}/${utilisateur.id}`);
  }
}
