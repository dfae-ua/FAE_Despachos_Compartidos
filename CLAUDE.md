# Despachos Compartidos — FAE

Sistema de reserva de **puestos** (no despachos enteros) en los dos despachos compartidos
para asociados y sustitutos del DFAE (UA). Derivado de `~/Github/FAE_Room_Booking` —
misma arquitectura, con modelo de **aforo** en lugar de exclusividad.

---

## Diferencia clave con FAE_Room_Booking

- FAE_Room_Booking: un solape = conflicto (el espacio se reserva entero).
- Aquí: cada reserva ocupa **1 puesto**; se admiten reservas solapadas hasta la
  capacidad del despacho (`ROOM_CAPACITY` en `Config.gs`, `capacity` en `ROOMS`
  de `config.js` — **mantener sincronizados**).
- Regla extra: un usuario no puede tener dos reservas solapadas en el mismo despacho.
- El máximo de solapes simultáneos en [start,end) se calcula evaluando la ocupación
  en `start` y en el inicio de cada reserva solapada (funciones `maxOccupancy` /
  `freeSeats` en `index.html`; lógica espejo en `addBooking` de `Code.gs`, dentro
  del `LockService`).

## Arquitectura

- **Frontend**: `index.html` único (HTML/CSS/JS puro, UI en castellano) + `config.js`.
- **Backend**: Google Apps Script (`apps_script/`) desplegado como Web App; sincroniza con `clasp`.
- **BD**: Google Sheets, pestañas `users | bookings | allowlist` (mismo schema que FAE_Room_Booking).
- **Hosting**: GitHub Pages, espejo doble `albarran` (origen) + `dfae-ua` (mirror, push doble).
- **OAuth**: se REUTILIZA el Client ID de FAE_Room_Booking (mismos orígenes autorizados
  `https://albarran.github.io` y `https://dfae-ua.github.io`).

## Espacios

| ID | Código    | Nombre                | Puestos |
|----|-----------|-----------------------|---------|
| d1 | 0031P1045 | Económicas 1045       | 8       |
| d2 | 0035PB015 | Ciencias Sociales 015 | 5       |

## Autorización de usuarios

`AUTO_ALLOWED_DOMAINS = ['gcloud.ua.es', 'ua.es']` — **sin** `gmail.com` (a diferencia
de FAE_Room_Booking): los puestos son para personal del departamento. Emails de otros
dominios → allowlist explícita desde el panel admin. Los `ADMIN_EMAILS` siempre entran.
Admin: `pedro.albarran@gmail.com`.

## Sheet y despliegue

- `SHEET_ID` en `apps_script/Config.gs` (Sheet restringida, propietario Pedro; NO publicar el ID).
- Las pestañas se auto-crean en el primer request (`getOrCreateSheet`).
- Backend: `cd apps_script && ./deploy.fish "mensaje"` (clasp push + create-deployment).
- Frontend: `git push origin main` actualiza los dos Pages (push doble, mismo setup
  de remotes/credenciales que FAE_Room_Booking — ver su CLAUDE.md §mirror).

## Herencia

Todo lo demás (auth Google + session tokens, allowlist, panel admin, escapado XSS,
LockService, auto-logout, privacidad de emails, formato texto en columnas B:D) es
idéntico a FAE_Room_Booking; su `CLAUDE.md` es la referencia técnica extendida.
`SEMINARS`/`BLOCKS` existen pero están vacíos.
