import { Component } from "@angular/core";
import { RouterOutlet } from "@angular/router";
import { Header } from "../../shared/components/header/header";
import { Chatbot } from "../../shared/components/chatbot/chatbot";

@Component({
    selector: "app-main-layout",
    templateUrl: "./main-layout.html",
    styleUrls: ["./main-layout.scss"],
    imports: [RouterOutlet, Header, Chatbot]
})
export class MainLayoutComponent {

}