import { Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "environments/environment";
import { Email } from "app/models/email";

@Injectable({
  providedIn: "root"
})
export class EmailSenderService {
  apiUrl: string = environment.api_email;

  constructor(private http: HttpClient ) { }

  sendEmail( email: Email): Observable<Email>{
    return this.http.post<Email>(`${this.apiUrl}`,email);
  }
}
