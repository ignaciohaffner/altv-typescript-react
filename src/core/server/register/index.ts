import * as alt from 'alt-server';
import { WebViewEvents } from '../../shared/webviewEvents';

alt.onClient(WebViewEvents.coreRegister, (player: alt.Player, data: any) => {
    // Mostrar los datos al servidor
    console.log(data.username, data.password, data.email);

    // Enviar un evento de confirmación al cliente
    alt.emitClient(player, WebViewEvents.coreRegisterDone, true);
});
