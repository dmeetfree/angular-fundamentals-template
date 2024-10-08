import { Component, Input } from "@angular/core";

@Component({
  selector: "app-info",
  standalone: true,
  imports: [],
  templateUrl: "./info.component.html",
  styleUrls: ["./info.component.scss"],
})
export class InfoComponent {
  @Input()
  title = "";

  @Input()
  text = "";
}
// Use the names `title` and `text`.
