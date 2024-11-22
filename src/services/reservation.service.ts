import { HttpClient } from '@angular/common/http';
import { ReservationModel } from '../models/reservation.model';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';

/**
 * Service Angular pour gérer les opérations CRUD sur les réservations.
 * Chaque méthode de ce service correspond à une opération de contrôleur côté backend.
 */
export class TerrainService {

  /**
   * URL de base de l'API backend.
   * Utilisée pour construire les chemins d'API pour les opérations CRUD sur les réservations.
   */
  API_URL: string = "http://localhost:8080/api";

  /**
   * Nom de l'entité réservation utilisé dans les routes API.
   * Cela permet de facilement référencer l'entité réservation dans les requêtes HTTP.
   */
  API_ENTITY_NAME: string = "reservation";

  /**
   * Constructeur pour initialiser les dépendances du service.
   *
   * @param http HttpClient pour effectuer les requêtes HTTP.
   * @param toastrService ToastrService pour afficher des notifications utilisateur.
   */
  constructor(private readonly http: HttpClient, private readonly toastrService: ToastrService) {}

  /**
   * Crée une nouvelle réservation.
   *
   * Cette méthode envoie une requête POST à l'API backend pour créer une nouvelle réservation.
   *
   * @param reservation Instance de `ReservationModel` représentant la réservation à créer.
   * @returns Observable contenant l'objet `ReservationModel` créé.
   */
  create(reservation: ReservationModel): Observable<ReservationModel> {
    return this.http.post<ReservationModel>(`${this.API_URL}/${this.API_ENTITY_NAME}`, reservation);
  }

  /**
   * Récupère la liste des réservations.
   *
   * Cette méthode envoie une requête GET à l'API backend pour récupérer toutes les réservations.
   *
   * @param reservation Instance de `ReservationModel` pour effectuer la requête, même si cela n'est pas utilisé dans ce cas.
   * @returns Observable contenant un tableau d'instances `ReservationModel`.
   */
  get(reservation: ReservationModel): Observable<ReservationModel> {
    return this.http.get<ReservationModel>(`${this.API_URL}/${this.API_ENTITY_NAME}`);
  }

  /**
   * Récupère une réservation spécifique par l'ID de l'utilisateur et l'ID du terrain.
   *
   * Cette méthode envoie une requête GET à l'API backend pour récupérer une réservation en fonction des identifiants fournis.
   *
   * @param reservation Instance de `ReservationModel` contenant les identifiants de l'utilisateur et du terrain.
   * @returns Observable contenant l'objet `ReservationModel` correspondant aux identifiants.
   */
  getById(reservation: ReservationModel): Observable<ReservationModel> {
    return this.http.get<ReservationModel>(`${this.API_URL}/${this.API_ENTITY_NAME}/${reservation.idUtilisateur}/${reservation.idTerrain}`);
  }

  /**
   * Met à jour une réservation existante.
   *
   * Cette méthode envoie une requête PUT à l'API backend pour mettre à jour les informations d'une réservation existante.
   *
   * @param reservation Instance de `ReservationModel` contenant les nouvelles données de la réservation.
   * @returns Observable contenant l'objet `ReservationModel` mis à jour.
   */
  update(reservation: ReservationModel): Observable<ReservationModel> {
    return this.http.put<ReservationModel>(`${this.API_URL}/${this.API_ENTITY_NAME}`, reservation);
  }

  /**
   * Supprime une réservation existante.
   *
   * Cette méthode envoie une requête DELETE à l'API backend pour supprimer une réservation en fonction des identifiants de l'utilisateur et du terrain.
   *
   * @param reservation Instance de `ReservationModel` contenant les identifiants de l'utilisateur et du terrain à supprimer.
   * @returns Observable contenant l'objet `ReservationModel` supprimé.
   */
  delete(reservation: ReservationModel): Observable<ReservationModel> {
    return this.http.delete<ReservationModel>(`${this.API_URL}/${this.API_ENTITY_NAME}/${reservation.idUtilisateur}/${reservation.idTerrain}`);
  }
}
