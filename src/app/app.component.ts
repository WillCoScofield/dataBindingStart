import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  serverElements = [];

  onServerAdded(serverInfo:
    { serverName: string;
      serverContent: string }) {
    this.serverElements.push({
      type: "server",
      name: serverInfo.serverName,
      content: serverInfo.serverContent
    });
  }

  onBlueprintAdded(bluePrintInfo: {
    bluePrintName: string;
    bluePrintContent: string;
  }) {
    this.serverElements.push({
      type: "blueprint",
      name: bluePrintInfo.bluePrintName,
      content: bluePrintInfo.bluePrintContent
    });
  }
}
