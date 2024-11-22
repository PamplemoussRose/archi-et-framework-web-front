/**
 * Interface représentant un modèle de réservation.
 * Cette interface définit la structure d'une réservation dans l'application.
 */
export interface ReservationModel {

  /**
   * Identifiant de l'utilisateur qui effectue la réservation.
   */
  idUtilisateur: number;

  /**
   * Identifiant du terrain réservé.
   */
  idTerrain: number;

  /**
   * Identifiant de la réservation.
   */
  reservation: number;
}
