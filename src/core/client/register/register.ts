import * as alt from 'alt-client';
import { getWebView } from '../webviewManager';
import { WebViewEvents } from '../../shared/webviewEvents';
const F2_KEY = 113;

alt.on('keydown', async (keyCode: number) => {
    if (keyCode !== F2_KEY) {
        return;
    }

    let view = getWebView();

    if (view) {
        view.on(WebViewEvents.coreRegister, (data: any) => {
            // llega la informacion al cliente desde la webview.
            alt.log(data.username, data.password, data.email, 'llego la data man');
            // la mando al serverside para crear la cuenta
            alt.emitServer(WebViewEvents.coreRegister, data);
            // espero confirmacion del serverside para crear la cuenta.
            alt.onServer(WebViewEvents.coreRegisterDone, (data: boolean) => {
                alt.log('cuenta creada');
                view.emit(WebViewEvents.coreRegisterDone, data);
            });
        });
        view.on(WebViewEvents.coreLogin, (data: any) => {
            alt.log(data.loginUsername, data.loginPassword, 'llego la data man');

            alt.emitServer(WebViewEvents.coreLogin, data.loginUsername, data.loginPassword);
        });
    }
});
