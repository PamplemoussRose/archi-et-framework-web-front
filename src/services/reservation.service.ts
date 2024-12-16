import { HttpClient } from '@angular/common/http';
import { ReservationModel } from '../models/reservation.model';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

/**
 * Service Angular pour gérer les opérations CRUD sur les réservations.
 * Chaque méthode correspond à une opération côté backend.
 *
 * Ce service est injecté au niveau racine grâce au décorateur `@Injectable`.
 */
@Injectable({ providedIn: 'root' })
export class ReservationService {

  /**
   * URL de base de l'API backend.
   * Utilisée pour construire les chemins d'accès aux ressources réservation.
   */
  private readonly API_URL: string = "http://localhost:8080/api";

  /**
   * Nom de l'entité réservation utilisée pour les routes API.
   * Permet de centraliser et simplifier la gestion des chemins.
   */
  private readonly API_ENTITY_NAME: string = "reservation";

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
   * Crée une nouvelle réservation dans le système.
   *
   * Cette méthode effectue une requête POST pour envoyer les données de réservation au backend.
   *
   * @param reservation Instance de `ReservationModel` contenant les informations de la réservation à créer.
   * @returns Observable contenant l'objet `ReservationModel` créé par le backend.
   */
  create(reservation: ReservationModel): Observable<ReservationModel> {
    return this.http.post<ReservationModel>(`${this.API_URL}/${this.API_ENTITY_NAME}`, reservation);
  }

  /**
   * Récupère la liste de toutes les réservations.
   *
   * Cette méthode effectue une requête GET pour récupérer les réservations disponibles.
   *
   * @returns Observable contenant un tableau d'instances `ReservationModel`.
   */
  get(): Observable<ReservationModel[]> {
    return this.http.get<ReservationModel[]>(`${this.API_URL}/${this.API_ENTITY_NAME}`);
  }

  /**
   * Récupère une réservation spécifique par l'ID de l'utilisateur et l'ID du terrain.
   *
   * Cette méthode effectue une requête GET en incluant les identifiants dans l'URL.
   *
   * @param idUser Identifiant unique de l'utilisateur associé à la réservation.
   * @param idTerrain Identifiant unique du terrain associé à la réservation.
   * @returns Observable contenant l'objet `ReservationModel` correspondant aux identifiants.
   */
  getById(idUser: number, idTerrain: number): Observable<ReservationModel> {
    return this.http.get<ReservationModel>(`${this.API_URL}/${this.API_ENTITY_NAME}/${idUser}/${idTerrain}`);
  }

  /**
   * Met à jour une réservation existante dans le système.
   *
   * Cette méthode effectue une requête PUT pour mettre à jour les informations d'une réservation spécifique.
   *
   * @param reservation Instance de `ReservationModel` contenant les nouvelles données de la réservation.
   * @returns Observable contenant l'objet `ReservationModel` mis à jour.
   */
  update(reservation: ReservationModel): Observable<ReservationModel> {
    return this.http.put<ReservationModel>(`${this.API_URL}/${this.API_ENTITY_NAME}`, reservation);
  }

  /**
   * Supprime une réservation existante par l'ID de l'utilisateur et l'ID du terrain.
   *
   * Cette méthode effectue une requête DELETE pour retirer une réservation du système.
   *
   * @param idUser Identifiant unique de l'utilisateur associé à la réservation.
   * @param idTerrain Identifiant unique du terrain associé à la réservation.
   * @returns Observable contenant l'objet `ReservationModel` supprimé.
   */
  delete(idUser: number, idTerrain: number): Observable<ReservationModel> {
    return this.http.delete<ReservationModel>(`${this.API_URL}/${this.API_ENTITY_NAME}/${idUser}/${idTerrain}`);
  }
}
