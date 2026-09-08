// ╭──────────────────────────────────────────────────────────╮
// │ Despachos Compartidos FAE — Configuración del backend    │
// │ EDITAR TODO LO DE ESTE FICHERO al hacer fork.            │
// ╰──────────────────────────────────────────────────────────╯

// ID de la Google Sheet (URL: .../d/<SHEET_ID>/edit).
const SHEET_ID = '1ZpwR2lbt7770X2vWKo4efrJTTrQ4ehIC092-9yfx7q0';

// Capacidad (nº de puestos) por despacho. Debe coincidir con ROOMS en config.js.
// Una reserva ocupa un puesto; se admiten reservas solapadas hasta la capacidad.
const ROOM_CAPACITY = {
  d1: 8,  // 0031P1045 — Económicas 1045
  d2: 5,  // 0035PB015 — Ciencias Sociales 015
};

// Emails con permisos de administrador.
// Admin = puede cancelar cualquier reserva, ver/eliminar usuarios y gestionar
// la allowlist.
//
// Para añadir más admins: añade el email a este array y despliega (en fish):
//   cd ~/Github/FAE_Despachos_Compartidos/apps_script
//   ./deploy.fish "add admin <email>"
const ADMIN_EMAILS = ['pedro.albarran@gmail.com'];

// OAuth Client ID creado en Google Cloud Console (Web application).
// Reutilizado del proyecto FAE_Room_Booking (mismos orígenes autorizados).
const GOOGLE_CLIENT_ID = '626032110486-21n999lfth0jf48373g4ttb97jrt5eq1.apps.googleusercontent.com';

// Dominios que se autentican con Google (sin contraseña).
const GOOGLE_AUTH_DOMAINS = ['gcloud.ua.es', 'gmail.com'];

// Dominios sin Google Workspace → contraseña en la app.
const PASSWORD_DOMAINS = ['ua.es'];

// Dominios auto-permitidos (no requieren estar en `allowlist`).
// Mismo esquema que FAE_Room_Booking: cualquier email de estos dominios
// puede registrarse / autenticarse.
const AUTO_ALLOWED_DOMAINS = ['gcloud.ua.es', 'ua.es', 'gmail.com'];

// Duración de la sesión (en ms).
const SESSION_TTL_MS = 7 * 24 * 60 * 60 * 1000; // 7 días
