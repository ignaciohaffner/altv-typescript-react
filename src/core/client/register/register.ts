import { WebView } from 'alt-client';
import * as alt from 'alt-client';

const webview = new alt.WebView('http://assets/webviews/index.html');

webview.on('register', (data: any) => {
    alt.log(data);
});
