import { GlossaryService } from './../../glossary.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-add-term',
  templateUrl: './add-term.component.html',
  styleUrls: ['./add-term.component.css']
})
export class AddTermComponent implements OnInit {
  glossary = {
    term: "",
    definition: ""
  };
  termAddSuccessful: Boolean = false;
  message: string = ""
  termId: string = ""
  addTerm: Boolean = true
  constructor(private glossaryService: GlossaryService, private actRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.termId = this.actRoute.snapshot.params['id'];
    if (this.termId !== "" && this.termId) {
      console.log(this.termId);
      this.fetchTermById(this.termId)
      this.addTerm = false;
    }
  }

  saveTerm(): void {
    this.glossaryService.addTerm(this.glossary).subscribe((res: any) => {
      this.termAddSuccessful = true;
      this.message = res.message;
    })
  }

  fetchTermById(id: string): void {
    this.glossaryService.getTermById(id).subscribe((res: any) => {
      this.glossary.term = res.term;
      this.glossary.definition = res.definition;
    })
  }
  updateTerm(): void {
    this.glossaryService.updateTerm(this.termId, this.glossary).subscribe((res: any) => {
      this.termAddSuccessful = true;
      this.message = res.message;
    })
  }

}
