import {
  Component,
  OnInit,
  Input,
  SimpleChange,
  SimpleChanges,
  OnChanges,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  ViewChild,
  ElementRef,
  AfterViewInit,
  ContentChild
} from "@angular/core";

@Component({
  selector: "app-server-element",
  templateUrl: "./server-element.component.html",
  styleUrls: ["./server-element.component.css"]
})
export class ServerElementComponent implements OnInit, AfterViewInit, AfterContentInit {
  @Input() element: {
    type: string;
    name: string;
    content: string;
  };

  @ContentChild("serverContents") serverContents: ElementRef;
  @ViewChild("heading") header: ElementRef;

  constructor() {
    // console.log("constructor called now  !");
  }

  ngOnInit() {
    // console.log("ngOnInit called now!");
    console.log(this.header.nativeElement.textContent); //blank because element has not been rendered
  }

  ngAfterViewInit(): void {
    //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
    //Add 'implements AfterViewInit' to the class.
    console.log(this.header.nativeElement.textContent); // the actual content because After the view has been initialized, this text content will exist at that point.
  }

  ngAfterContentInit(): void {
    //Called after ngOnInit when the component's or directive's content has been initialized.
    //Add 'implements AfterContentInit' to the class.
    console.log(this.serverContents)

  }
}
