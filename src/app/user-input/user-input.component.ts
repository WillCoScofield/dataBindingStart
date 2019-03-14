import {
  Component,
  OnInit,
  EventEmitter,
  Output,
  ViewChild,
  ElementRef
} from "@angular/core";

@Component({
  selector: "app-user-input",
  templateUrl: "./user-input.component.html",
  styleUrls: ["./user-input.component.css"]
})
export class UserInputComponent implements OnInit {
  @Output() serverAdded = new EventEmitter<{
    serverName: string;
    serverContent: string;
  }>();
  @Output("bpCreated") bluePrintAdded = new EventEmitter<{
    bluePrintName: string;
    bluePrintContent: string;
  }>();

  // newServerName = '';
  // newServerContent = '';

  @ViewChild("serverContent") serverContent: ElementRef;


  constructor() {}

  ngOnInit() {
    // console.log(this.header.nativeElement.text);
  }

  addServer(nameInput: HTMLInputElement, serverContent: HTMLInputElement) {
    // console.log(nameInput.value);
    // console.log(this.serverContent)
    // console.log(this.serverContent.nativeElement.value) //equal to the value of what's input to the content input field
    this.serverAdded.emit({
      serverName: nameInput.value,
      serverContent: this.serverContent.nativeElement.value
    });
  }

  addBlueprint(nameInput: HTMLInputElement, serverContent: HTMLInputElement) {
    this.bluePrintAdded.emit({
      bluePrintName: nameInput.value,
      bluePrintContent: serverContent.value
    });
  }
}
