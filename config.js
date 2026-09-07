// ╭──────────────────────────────────────────────────────────╮
// │ Despachos Compartidos FAE — Configuración del frontend   │
// │ EDITAR TODO LO DE ESTE FICHERO al hacer fork.            │
// ╰──────────────────────────────────────────────────────────╯

// URL del Web App de Apps Script (.../exec).
const API =
  "https://script.google.com/macros/s/AKfycbw-gqFeNIM3p6iiTsxF7cY1kdAsR-cvP82K8biZNJBjKItbNSZsKnPwuBTROlkvOl23Tg/exec";

// OAuth Client ID (mismo que en apps_script/Config.gs).
const GOOGLE_CLIENT_ID =
  "626032110486-21n999lfth0jf48373g4ttb97jrt5eq1.apps.googleusercontent.com";

// Dominios que se autentican con Google.
const GOOGLE_AUTH_DOMAINS = ["gcloud.ua.es", "gmail.com"];

// Despachos compartidos. No se reserva el despacho entero: cada reserva
// ocupa UN puesto y caben hasta `capacity` reservas solapadas.
const ROOMS = [
  {
    id: "d1",
    name: "Económicas 1045",
    code: "0031P1045",
    capacity: 8,
    desc: "Edificio de Económicas, primera planta. 8 puestos.",
    note: "",
    color: "var(--r1)",
    bg: "var(--r1-bg)",
    light: "var(--r1-light)",
  },
  {
    id: "d2",
    name: "Ciencias Sociales 015",
    code: "0035PB015",
    capacity: 5,
    desc: "Edificio de Ciencias Sociales, planta baja. 5 puestos.",
    note: "",
    color: "var(--r3)",
    bg: "var(--r3-bg)",
    light: "var(--r3-light)",
  },
];

// Bloqueos por rango de fechas (días enteros). Se expanden a un slot
// diario "todo el día" no reservable. Útil para cierres puntuales.
const BLOCKS = [];

// Slots concretos no reservables (equivalente a SEMINARS en FAE-Rooms).
const SEMINARS = [];
