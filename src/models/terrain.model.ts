/**
 * Interface représentant un modèle de terrain.
 * Cette interface définit la structure d'un terrain dans l'application.
 */
export interface TerrainModel {

  /**
   * Identifiant unique du terrain.
   */
  id: number;

  /**
   * Nom du terrain.
   */
  nom: string;

  /**
   * Quantité disponible du terrain.
   */
  quantite: number;

  /**
   * Description du terrain.
   */
  description: string;

  /**
   * Point géographique du terrain.
   */
  point_geo: string;
}
