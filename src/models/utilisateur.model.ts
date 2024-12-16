/**
 * Interface représentant un modèle d'utilisateur.
 * Cette interface définit la structure d'un utilisateur dans l'application.
 */
export interface UtilisateurModel {

  /**
   * Identifiant unique de l'utilisateur.
   */
  id: number;

  /**
   * Nom de l'utilisateur.
   */
  nom: string;

  /**
   * Prénom de l'utilisateur.
   */
  prenom: string;

  /**
   * Adresse email de l'utilisateur.
   */
  mail: string;

  /**
   * Mot de passe de l'utilisateur.
   */
  password: string;

  /**
   * Nom d'utilisateur unique.
   */
  username: string;
}
