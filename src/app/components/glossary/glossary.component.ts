import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators'

import { GlossaryService } from './../../glossary.service';


@Component({
  selector: 'app-glossary',
  templateUrl: './glossary.component.html',
  styleUrls: ['./glossary.component.css']
})
export class GlossaryComponent implements OnInit {
  listOfTerm: any[] = []
  constructor(private glossary: GlossaryService) { }

  ngOnInit(): void {
    this.fetchTerms();
  }

  fetchTerms(): void {
    this.glossary.getListOfTerm().pipe(
      map((res: any) => res.sort((a: any, b: any) => {
        if (a.term < b.term) { return -1; }
        if (a.term > b.term) { return 1; }
        return 0;
      }))
    ).subscribe((res: any) => {
      this.listOfTerm = res
    })
  }
}
