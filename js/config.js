// Configuración de conexión a Supabase (la clave publicable es pública por diseño)
const SUPABASE_URL = "https://ggbyeftqatnahlpunqek.supabase.co";
const SUPABASE_ANON_KEY = "sb_publishable_0F7QGgUjkWBI82qjfutdyQ_wF1e_6Jy";
const RESPUESTAS_TABLE = "pesv_respuestas";
const APP_VERSION = "v1";

// El SDK cargado por CDN ya define un global "supabase" (window.supabase), así que la
// variable propia se llama "sb" para no chocar con ese nombre. Si el SDK no carga
// (sin internet, CDN bloqueado, etc.) tampoco debe tumbar la página: se deja "sb" en
// null y cada función que lo usa revisa esto antes de llamarlo.
let sb = null;
try{
  if (window.supabase && window.supabase.createClient){
    sb = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
  } else {
    console.error("El SDK de Supabase no se cargó (revisa la conexión a internet).");
  }
}catch(e){
  console.error("Error inicializando Supabase:", e);
}
