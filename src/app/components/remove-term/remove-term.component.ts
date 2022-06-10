import { ActivatedRoute } from '@angular/router';
import { GlossaryService } from './../../glossary.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-remove-term',
  templateUrl: './remove-term.component.html',
  styleUrls: ['./remove-term.component.css']
})
export class RemoveTermComponent implements OnInit {
  glossary = {
    term: "",
    definition: ""
  };
  termRemoveSuccessful: Boolean = false;
  message: string = ""
  termId: string = ""
  constructor(private glossaryService: GlossaryService, private actRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.termId = this.actRoute.snapshot.params['id'];
    if (this.termId !== "" && this.termId) {
      console.log(this.termId);
      this.fetchTermById(this.termId)
    }
  }

  fetchTermById(id: string): void {
    this.glossaryService.getTermById(id).subscribe((res: any) => {
      this.glossary.term = res.term;
      this.glossary.definition = res.definition;
    })
  }

  removeTerm(): void {
    this.glossaryService.removeTerm(this.termId).subscribe((res: any) => {
      this.termRemoveSuccessful = true;
      this.message = res.message;
    })
  }

}
