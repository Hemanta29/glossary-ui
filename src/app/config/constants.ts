import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class Constants {
  public readonly API_ENDPOINT: string = 'http://localhost:9001/api/glossary';
  public static TitleOfSite: string = "Glossary App";
}
