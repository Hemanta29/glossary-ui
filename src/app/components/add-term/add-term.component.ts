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
    data: {
      term: "",
      definition: ""
    }
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
      console.log(res);
      this.glossary.data.term = res.data.term;
      this.glossary.data.definition = res.data.definition;
    })
  }
  updateTerm(): void {
    console.log(this.glossary);
    this.glossaryService.updateTerm(this.termId, this.glossary.data).subscribe((res: any) => {
      console.log(res)
      this.termAddSuccessful = true;
      this.message = res.data.message;
    })
  }

}
