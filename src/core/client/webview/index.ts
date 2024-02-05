import * as alt from 'alt-client';
import * as native from 'natives';
import { createWebView } from '../webviewManager';
import { WebViewEvents } from '../../shared/webviewEvents';

const F2_KEY = 113;
let isFocused = false;
let view = null;

export function focusWebView() {
    if (isFocused) {
        view.unfocus();
        view.emit(WebViewEvents.toggleVisibility, false);
        alt.showCursor(false);
        alt.toggleGameControls(true);
        native.triggerScreenblurFadeOut(100);
        isFocused = false;
    } else {
        if (!view) {
            view = createWebView();
        }
        view.focus();
        view.emit(WebViewEvents.toggleVisibility, true);
        alt.showCursor(true);
        alt.toggleGameControls(false);
        native.triggerScreenblurFadeIn(100);
        isFocused = true;
    }
}

alt.on('keydown', async (keyCode: number) => {
    if (keyCode !== F2_KEY) {
        return;
    }

    focusWebView();
});
