import {HttpClient} from '@angular/common/http';
import {ReservationModel} from '../models/reservation.model';
import {ToastrService} from 'ngx-toastr';
import {Observable} from 'rxjs';

export class TerrainService {
  // indication de la page de l'api à laquelle est relier le service
  API_URL: string = "http://localhost:8080/api";  // URL du serveur
  API_ENTITY_NAME: string = "reservation";        // page de l'api

  // faire autant de methodes qu'il y en a dans les controllers du back
  // il doit y avoir une methode front pour une methode back

  // Constructeur
  constructor(private readonly http: HttpClient, private readonly toastrService: ToastrService) {
    ;
  }

  // PostMapping
  create(reservation: ReservationModel): Observable<ReservationModel> {
    return this.http.post<ReservationModel>(`${this.API_URL}/${this.API_ENTITY_NAME}/`, reservation);
  }

  // GetMapping
  get(reservation: ReservationModel): Observable<ReservationModel>{
    // A MODIFIER
    return this.http.post<ReservationModel>(`${this.API_URL}/${this.API_ENTITY_NAME}/`, reservation);
  }

  // GetMapping {id}
  getById(reservation: ReservationModel): Observable<ReservationModel>{
    // A MODIFIER
    return this.http.post<ReservationModel>(`${this.API_URL}/${this.API_ENTITY_NAME}/`, reservation);
  }

  // PutMapping
  update(reservation: ReservationModel): Observable<ReservationModel>{
    // A MODIFIER
    return this.http.post<ReservationModel>(`${this.API_URL}/${this.API_ENTITY_NAME}/`, reservation);
  }

  // DeleteMapping
  delete(reservation: ReservationModel): Observable<ReservationModel>{
    // A MODIFIER
    return this.http.post<ReservationModel>(`${this.API_URL}/${this.API_ENTITY_NAME}/`, reservation);
  }
}
