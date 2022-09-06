import { ActivatedRoute, Router } from '@angular/router';
import { StadiumService } from './../../services/stadium.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-stadium-form',
  templateUrl: './stadium-form.component.html',
  styleUrls: ['./stadium-form.component.css']
})
export class StadiumFormComponent implements OnInit {

  id: any;
  stadiumForm: FormGroup;
  stadiumObj: any = {};
  title:string = "Add stadium"
  constructor(
    private fb: FormBuilder,
    private stadiumService: StadiumService,
    private activatedRoute: ActivatedRoute,
    private router:Router) { }

  ngOnInit() {
    this.id = this.activatedRoute.snapshot.paramMap.get("id");
    if (this.id) {
      this.title = "Edit stadium";
      // send request to get object
      this.stadiumService.getStadium(this.id).subscribe(
        (data) => {
          console.log("Here object", data.stadium);
          this.stadiumObj = data.stadium;
        }
      );
    }
    this.stadiumForm = this.fb.group({
      name: ["", [Validators.required]],
      capacity: [""],
      country: [""],
      foundation: [""]
    })
  }

  onSubmit() {
    console.log("Here object", this.stadiumForm.value);
    if (this.id) {
      this.stadiumService.editStadium(this.stadiumObj).subscribe(
        (data) => {
          console.log("Here response ", data.message);
          this.router.navigate(["admin"]);
        }
      )
    } else {
      this.stadiumService.addStadium(this.stadiumForm.value).subscribe(
        (data) => {
          console.log("Here response ", data.message);
          this.router.navigate(["admin"]);
        }
      )
    }
  }

}
