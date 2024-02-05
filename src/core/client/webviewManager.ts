import * as alt from 'alt-client';

let view = null;

export function createWebView() {
    if (view) {
        return view;
    }

    view = new alt.WebView('http://assets/webviews/index.html');
    return view;
}

export function getWebView() {
    return view;
}
