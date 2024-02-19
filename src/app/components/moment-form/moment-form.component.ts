import { HttpClient } from '@angular/common/http';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Moment } from 'src/app/Moments';

@Component({
  selector: 'app-moment-form',
  templateUrl: './moment-form.component.html',
  styleUrls: ['./moment-form.component.scss']
})
export class MomentFormComponent implements OnInit {
  @Output() onSubmit = new EventEmitter<Moment>();
  @Input() btnText!: string;
  @Input() momentData: Moment | null = null;

  momentForm!: FormGroup;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.momentForm = new FormGroup({
      id: new FormControl(this.momentData ? this.momentData.id : ''),
      title: new FormControl(this.momentData ? this.momentData.title : '', [Validators.required]),
  /*  description: new FormControl(this.momentData ? this.momentData.description : '', [Validators.required]), */
      image: new FormControl(''),
    });
  }

  get title() {
    return this.momentForm.get('title')!;
  }

  get name() {
    return this.momentForm.get('name');
  }

  /* get description() {
    return this.momentForm.get('description')!;
  } */

  onFileSelected(event: any){
    const file: FileList = event.target.files[0]

    this.momentForm.patchValue({ image: file })
  }

  submit() {
    if(this.momentForm.invalid) {
      return;
    }

    this.onSubmit.emit(this.momentForm.value);
  }
}
