
import {
    HubConnection,
    MessagePackHubProtocol,
    JsonHubProtocol,
    ConsoleLogger,
    TransportType,
    LogLevel
} from "@aspnet/signalr-client";
import * as monaco from '@timkendrick/monaco-editor';

declare var require: any;

let connection = new HubConnection(`http://${window.location.host}/ws/test`, {
    transport: TransportType.WebSockets,
    logging: new ConsoleLogger(LogLevel.Information),
    protocol: new MessagePackHubProtocol()
});

connection.start().then(() => {
    console.log("Connected to the hub");   
});

let monacoEditor = monaco.editor.create(document.getElementById("container")!, {
    language: 'typescript'
});

let themes = document.getElementById("themes");

(<any>window).monacoEditor = monacoEditor;

connection.on('OnCodeChanged', (code) => {
    monacoEditor.getModel().setValue(code);
});

connection.on('OnThemeChanged', theme => {
    monaco.editor.setTheme(theme);
    (<HTMLSelectElement>themes!).value = theme;
});

monacoEditor.onKeyUp(event => {
    connection.send("EmitCodeChanges", monacoEditor.getModel().getValue());
});

themes!.onchange = function (event : any) {
    connection.send("ChangeTheme", event.target.value);    
}