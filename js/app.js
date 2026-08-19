// ---------- Iconos ----------
const ICONS = {
  id: `<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="5" width="18" height="14" rx="2"/><circle cx="8.5" cy="12" r="2"/><path d="M6 16.2c.5-1.6 1.7-2.5 2.5-2.5s2 .9 2.5 2.5"/><path d="M14 10h4"/><path d="M14 13.5h4"/></svg>`,
  route: `<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4c0 6 6 4 6 10s6 4 6 6"/><circle cx="4" cy="4" r="1.6"/><circle cx="16" cy="20" r="1.6"/></svg>`,
  alert: `<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3 2 20h20L12 3Z"/><path d="M12 10v4"/><path d="M12 17h.01"/></svg>`,
  users: `<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="9" cy="8" r="3"/><path d="M2 20c0-3.3 3.1-6 7-6s7 2.7 7 6"/><circle cx="17" cy="9" r="2.4"/><path d="M15.5 14.2c2.6.5 4.5 2.6 4.5 5.8"/></svg>`,
  check: `<svg viewBox="0 0 24 24" width="30" height="30" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="m5 12.5 4.5 4.5L19 7"/></svg>`,
};
const sectionIcons = [ICONS.route, ICONS.alert, ICONS.users];


// ---------- Datos de la encuesta ----------
const generalFields = [
  {id:"cedula", label:"Cédula"},
  {id:"nombre", label:"Nombre completo"},
  {id:"cargo", label:"Cargo"},
  {id:"area", label:"Área / dependencia"},
];

const sections = [
  {
    title: "Sección 1. Caracterización laboral y de movilidad",
    questions: [
      {id:"q1", text:"1. Experiencia en conducción (años)", type:"single",
        options:["1 - 3 años","4 - 6 años","7 - 9 años","10 - 15 años","Más de 15 años"]},
      {id:"q2", text:"2. Cargo / área en la empresa", type:"single",
        options:["Administrativo","Comercial","Técnico","Operativo","Otro"]},
      {id:"q3", text:"3. Horario de trabajo", type:"single",
        options:["Por turnos","Tiempo completo","Jornada continua","No tiene horario fijo"]},
      {id:"q4", text:"4. ¿Trabaja más de 8 horas diarias?", type:"single",
        options:["Sí","No","Algunas veces"]},
      {id:"q5", text:"5. Tipo de contrato", type:"single",
        options:["Indefinido","Fijo","Contratista","Prestación de servicios","Otro"]},
      {id:"q6", text:"6. ¿Cuenta con vehículo propio?", type:"single",
        options:["Sí","No"]},
      {id:"q7", text:"7. Tipo de vehículo que utiliza", type:"single",
        options:["Motocicleta","Automóvil","Camioneta","Bicicleta"]},
      {id:"q8", text:"8. ¿Ha tenido en los últimos cinco años algún accidente de tránsito?", type:"single",
        options:["Sí","No"]},
      {id:"q9", text:"9. ¿Ha tenido en los últimos cinco años algún incidente de tránsito con daños materiales pero no personales?", type:"single",
        options:["Sí","No"]},
      {id:"q10", text:"10. ¿Con qué frecuencia realiza desplazamientos en misión?", type:"single",
        options:["A diario","Una o dos veces al mes","Alguna vez a la semana","Varias veces al año"]},
      {id:"q11", text:"11. Medio de desplazamiento que utiliza para los trayectos en misión", type:"single",
        options:["A pie","En bicicleta","Transporte público","Moto o ciclomotor","Vehículo de la empresa","Vehículo propio","Bicicleta eléctrica","Otro"]},
      {id:"q12", text:"12. Mis desplazamientos en misión son, en general, planificados por:", type:"single",
        options:["Mí mismo","La empresa"]},
      {id:"q13", text:"13. ¿Con cuánto tiempo de antelación se suelen prever mis misiones?", type:"single",
        options:["El mismo día","Con un día de anticipación","Con una semana de anticipación","Con dos semanas de anticipación","Con un mes de anticipación"]},
      {id:"q14", text:"14. Medio de desplazamiento que utiliza para los trayectos casa - trabajo", type:"single",
        options:["A pie","En bicicleta","Transporte público","Moto o ciclomotor","Transporte colectivo de empresa","Vehículo propio","Bicicleta eléctrica"]},
    ]
  },
  {
    title: "Sección 2. Percepción de riesgo",
    hint: "Principales factores de riesgo con los que se encuentra (trayectos casa - trabajo y desplazamientos en misión)",
    questions: [
      {id:"q15", text:"15. Motivados por el factor humano", type:"multi",
        options:["Exceso de velocidad","Exceso de confianza","Fatiga","Desconocimiento de las normas de tránsito","Imprudencia de peatones y/o pasajeros"]},
      {id:"q16", text:"16. Motivados por la vía", type:"multi",
        options:["Clima","Estado de la vía","Falta de iluminación","Falta de señalización"]},
      {id:"q17", text:"17. Motivados por el vehículo", type:"multi",
        options:["Falta de mantenimiento","Fallas mecánicas","Ergonomía","Inadecuada capacidad de carga y/o pasajeros"]},
      {id:"q18", text:"18. Causas que motivan el riesgo (indique todas las que considere adecuadas)", type:"multi",
        options:["Intensidad del tráfico","Condiciones climatológicas","Tipo de vehículo o sus características / estado del vehículo",
          "Organización del trabajo (agenda, reuniones, tiempos de entrega, etc.)","Su propia conducción",
          "Su estado psicofísico (cansancio, estrés, sueño, etc.)","Otros conductores","Estado de la infraestructura / vía",
          "Falta de información o formación en seguridad vial","Otras"]},
      {id:"q19", text:"19. ¿Qué riesgo percibe con mayor frecuencia?", type:"multi",
        options:["Mal estado de las vías","Uso del celular","Peatones"]},
    ]
  },
  {
    title: "Sección 3. Riesgos viales por rol",
    questions: [
      {id:"q20", text:"20. De acuerdo con el rol con el que más se identifica al desplazarse, señale la opción correspondiente", type:"single",
        options:["Peatón","Pasajero","Ciclista","Conductor","Acompañante","Motociclista"]},
    ]
  }
];

// Preguntas condicionadas al rol seleccionado en q20
const roleQuestions = {
  "Peatón": {id:"q21", text:"21. Peatón — señale las conductas de riesgo con las que más se identifica", type:"multi",
    options:["Atravesar el tráfico vehicular en lugares donde existen pasos peatonales","Hacer uso del celular y/o audífonos mientras camina","No respetar las señales de tránsito","Cruzar la calle cuando el semáforo está en amarillo o rojo"]},
  "Pasajero": {id:"q22", text:"22. Pasajero — señale las conductas de riesgo con las que más se identifica", type:"multi",
    options:["Bajarse del transporte público en movimiento","No hacer uso de paraderos para subir y bajar del bus","Viajar colgado del vehículo"]},
  "Ciclista": {id:"q23", text:"23. Ciclista — señale las conductas de riesgo con las que más se identifica", type:"multi",
    options:["Hacer uso del celular y/o audífonos","No usar elementos de protección personal (casco, rodilleras, reflectores, gafas, etc.)","Movilizarse por el centro de la vía y entre los vehículos","Mantenimiento inadecuado de la bicicleta","No respetar las señales de tránsito","Conducir en estado de embriaguez o después de consumir sustancias alucinógenas"]},
  "Motociclista": {id:"q24", text:"24. Motociclista — señale las conductas de riesgo con las que más se identifica", type:"multi",
    options:["Uso del celular y/o audífonos","Transitar usando varios carriles o entre los vehículos","No respetar las señales de tránsito","Conducir en estado de embriaguez o después de consumir sustancias alucinógenas","Exceso de velocidad","Llevar carga excesiva","Llevar el casco del parrillero colgado en la mano","Tomar medicamentos que puedan producir sueño antes de conducir"]},
  "Conductor": {id:"q25", text:"25. Conductor — señale las conductas de riesgo con las que más se identifica", type:"multi",
    options:["Uso del celular, audífonos, etc. mientras conduce","No respetar las señales de tránsito","Conducir en estado de embriaguez o después de consumir sustancias alucinógenas","Exceso de velocidad","Tomar medicamentos que puedan producir sueño antes de conducir","No usar el cinturón de seguridad","No asegurar adecuadamente la carga en el vehículo","Transitar ocupando varios carriles"]},
};

// ---------- Estado ----------
let step = 0; // 0 = datos generales, 1..sections.length = secciones
const answers = {}; // {qid: string | string[]}
const generalData = {};

function totalSteps(){ return sections.length + 1; }

function getRoleQuestionForCurrentAnswer(){
  const role = answers["q20"];
  return role && roleQuestions[role] ? roleQuestions[role] : null;
}

// ---------- Render encuesta ----------
function renderSurvey(){
  const container = document.getElementById("surveyView");
  container.innerHTML = "";

  const pct = Math.round((step/(totalSteps())) * 100);
  document.getElementById("progressBar").style.width = pct + "%";
  document.getElementById("progressPct").textContent = pct + "%";
  document.getElementById("progressLabel").textContent = step === 0
    ? "Datos generales"
    : `Sección ${step} de ${sections.length}`;

  const card = document.createElement("div");
  card.className = "card";

  if (step === 0){
    const matched = findEmployeeByCedula(generalData.cedula);
    const revealExtra = !!generalData.cedula && (!!matched || manualEntryMode);

    card.innerHTML = `<div class="section-head">
      <span class="section-icon">${ICONS.id}</span>
      <div><span class="step-eyebrow">Paso 1 de ${totalSteps()}</span><h2 class="section-title">Datos generales</h2></div>
    </div>
    <div class="field">
      <label class="field-label">Cédula</label>
      <input type="text" id="gf_cedula" inputmode="numeric" autocomplete="off" list="employeeCedulas"
        placeholder="Escribe tu número de cédula" value="${generalData.cedula||""}">
      <datalist id="employeeCedulas">${EMPLOYEES.map(e=>`<option value="${e.cedula}">${e.nombre}</option>`).join("")}</datalist>
    </div>
    <div class="note" id="employeeMatchNote" style="min-height:16px; margin:-6px 0 4px;"></div>
    <div class="note" id="employeeManualFallback" style="display:none; margin-bottom:8px;">
      No encontramos esa cédula en la base de empleados activos.
      <a href="#" id="manualEntryLink">Continuar de forma manual</a>
    </div>
    <div id="employeeDuplicateBanner" style="display:none; margin-bottom:14px;">
      Esta cédula ya tiene una respuesta registrada. Solo se permite una respuesta por persona — no es posible volver a enviar la encuesta.
    </div>
    <div id="employeeExtraFields" style="display:${revealExtra ? "block" : "none"};"></div>`;

    const extraWrap = card.querySelector("#employeeExtraFields");
    generalFields.filter(f=>f.id!=="cedula").forEach(f=>{
      const div = document.createElement("div");
      div.className = "field";
      const listAttr = f.id === "nombre" ? ' list="employeeNames" autocomplete="off"' : '';
      const lockedAttr = matched ? ' readonly' : '';
      div.innerHTML = `<label class="field-label">${f.label}</label>
        <input type="text" id="gf_${f.id}" value="${generalData[f.id]||""}"${listAttr}${lockedAttr}>`;
      extraWrap.appendChild(div);
    });
    const dlNames = document.createElement("datalist");
    dlNames.id = "employeeNames";
    dlNames.innerHTML = EMPLOYEES.map(e=>`<option value="${e.nombre}">`).join("");
    extraWrap.appendChild(dlNames);

    if (matched){
      const note = card.querySelector("#employeeMatchNote");
      note.textContent = `✓ ${matched.nombre} — ${matched.cargo} · ${matched.area}`;
      note.style.color = "var(--green-600)";
    }
  } else {
    const sec = sections[step-1];
    const head = document.createElement("div");
    head.className = "section-head";
    head.innerHTML = `<span class="section-icon">${sectionIcons[step-1]}</span>
      <div><span class="step-eyebrow">Paso ${step+1} de ${totalSteps()}</span><h2 class="section-title">${sec.title}</h2></div>`;
    card.appendChild(head);
    if (sec.hint){
      const hint = document.createElement("div");
      hint.className = "q-hint";
      hint.style.marginBottom = "14px";
      hint.textContent = sec.hint;
      card.appendChild(hint);
    }
    getStepQuestions(step).forEach(q=>renderQuestion(card, q));
  }

  container.appendChild(card);
  if (step === 0) wireEmployeeLookup();
  renderNavButtons(container);
}

// ---------- Autocompletado paso a paso: cédula -> identidad verificada ----------
let manualEntryMode = false;

function applyEmployeeMatch(match){
  generalData.cedula = match.cedula;
  generalData.nombre = match.nombre;
  generalData.cargo = match.cargo;
  generalData.area = match.area;
}

function onCedulaInput(){
  const cedulaInput = document.getElementById("gf_cedula");
  const note = document.getElementById("employeeMatchNote");
  const fallback = document.getElementById("employeeManualFallback");
  const extraWrap = document.getElementById("employeeExtraFields");
  const duplicateBanner = document.getElementById("employeeDuplicateBanner");
  if (!cedulaInput || !note || !fallback || !extraWrap) return;

  const cedulaVal = cedulaInput.value.trim();
  generalData.cedula = cedulaVal;
  fallback.style.display = "none";
  if (duplicateBanner) duplicateBanner.style.display = "none";

  const match = findEmployeeByCedula(cedulaVal);
  if (match){
    manualEntryMode = false;
    applyEmployeeMatch(match);
    const nombreInput = document.getElementById("gf_nombre");
    const cargoInput = document.getElementById("gf_cargo");
    const areaInput = document.getElementById("gf_area");
    if (nombreInput){ nombreInput.value = match.nombre; nombreInput.readOnly = true; }
    if (cargoInput){ cargoInput.value = match.cargo; cargoInput.readOnly = true; }
    if (areaInput){ areaInput.value = match.area; areaInput.readOnly = true; }
    extraWrap.style.display = "block";
    note.textContent = `✓ ${match.nombre} — ${match.cargo} · ${match.area}`;
    note.style.color = "var(--green-600)";
  } else {
    note.textContent = "";
    if (!manualEntryMode){
      extraWrap.style.display = "none";
    }
  }
}

function onCedulaBlur(){
  const cedulaInput = document.getElementById("gf_cedula");
  const fallback = document.getElementById("employeeManualFallback");
  if (!cedulaInput || !fallback) return;
  const cedulaVal = cedulaInput.value.trim();
  const hasEnoughDigits = cedulaVal.replace(/\D/g,"").length >= 5;
  const match = findEmployeeByCedula(cedulaVal);
  fallback.style.display = (hasEnoughDigits && !match && !manualEntryMode) ? "block" : "none";
}

function wireEmployeeLookup(){
  const cedulaInput = document.getElementById("gf_cedula");
  const manualLink = document.getElementById("manualEntryLink");
  if (cedulaInput){
    cedulaInput.addEventListener("input", onCedulaInput);
    cedulaInput.addEventListener("blur", onCedulaBlur);
  }
  if (manualLink){
    manualLink.addEventListener("click", (e)=>{
      e.preventDefault();
      manualEntryMode = true;
      document.getElementById("employeeManualFallback").style.display = "none";
      const extraWrap = document.getElementById("employeeExtraFields");
      extraWrap.style.display = "block";
      ["gf_nombre","gf_cargo","gf_area"].forEach(id=>{
        const el = document.getElementById(id);
        if (el) el.readOnly = false;
      });
      const nombreInput = document.getElementById("gf_nombre");
      if (nombreInput) nombreInput.focus();
    });
  }
  onCedulaBlur();
}

// ---------- Validación: todas las preguntas de la sección son obligatorias ----------
function getStepQuestions(stepNum){
  const sec = sections[stepNum-1];
  let qList = [...sec.questions];
  // Insertar pregunta condicional de rol al final de la sección 3
  if (sec.title.includes("rol")){
    const rq = getRoleQuestionForCurrentAnswer();
    if (rq) qList = [...qList, rq];
  }
  return qList;
}

function isQuestionAnswered(q){
  const val = answers[q.id];
  return q.type === "multi" ? (Array.isArray(val) && val.length > 0) : !!val;
}

function validateStepAnswers(stepNum){
  const missing = getStepQuestions(stepNum).filter(q=>!isQuestionAnswered(q));
  document.querySelectorAll(".q").forEach(el=>el.classList.remove("q-missing"));
  if (missing.length === 0) return true;
  missing.forEach(q=>{
    const el = document.querySelector(`.q[data-qid="${q.id}"]`);
    if (el) el.classList.add("q-missing");
  });
  const firstEl = document.querySelector(`.q[data-qid="${missing[0].id}"]`);
  if (firstEl) firstEl.scrollIntoView({ behavior:"smooth", block:"center" });
  alert(`Debes responder todas las preguntas antes de continuar. Te falta${missing.length>1?"n":""} ${missing.length} pregunta${missing.length>1?"s":""}.`);
  return false;
}

function renderQuestion(card, q){
  const qDiv = document.createElement("div");
  qDiv.className = "q";
  qDiv.dataset.qid = q.id;
  const hintText = q.type === "multi" ? "(Puede seleccionar varias opciones)" : "(Seleccione una opción)";
  qDiv.innerHTML = `<div class="q-title">${q.text}</div><div class="q-hint">${hintText}</div>`;

  q.options.forEach(opt=>{
    const optDiv = document.createElement("label");
    const inputType = q.type === "multi" ? "checkbox" : "radio";
    const current = answers[q.id];
    const isChecked = q.type === "multi"
      ? Array.isArray(current) && current.includes(opt)
      : current === opt;
    optDiv.className = "opt" + (isChecked ? " checked" : "");
    optDiv.innerHTML = `<input type="${inputType}" name="${q.id}" value="${opt}" ${isChecked?"checked":""}> <span>${opt}</span>`;
    optDiv.querySelector("input").addEventListener("change", (e)=>{
      if (q.type === "multi"){
        const arr = Array.isArray(answers[q.id]) ? answers[q.id] : [];
        if (e.target.checked){ if(!arr.includes(opt)) arr.push(opt); }
        else { const idx = arr.indexOf(opt); if (idx>-1) arr.splice(idx,1); }
        answers[q.id] = arr;
      } else {
        answers[q.id] = opt;
      }
      renderSurvey();
    });
    qDiv.appendChild(optDiv);
  });
  card.appendChild(qDiv);
}

function renderNavButtons(container){
  const nav = document.createElement("div");
  nav.className = "nav-btns";

  const backBtn = document.createElement("button");
  backBtn.className = "secondary";
  backBtn.textContent = "Atrás";
  backBtn.disabled = step === 0;
  backBtn.onclick = ()=>{ step--; renderSurvey(); };
  nav.appendChild(backBtn);

  const nextBtn = document.createElement("button");
  nextBtn.id = "navNextBtn";
  if (step === totalSteps()-1){
    nextBtn.className = "primary success";
    nextBtn.textContent = "Enviar encuesta";
    nextBtn.onclick = ()=>{
      if (!validateStepAnswers(step)) return;
      submitSurvey();
    };
  } else {
    nextBtn.className = "primary";
    nextBtn.textContent = "Siguiente";
    nextBtn.onclick = async ()=>{
      if (step === 0){
        generalFields.forEach(f=> generalData[f.id] = document.getElementById("gf_"+f.id).value);
        const cedula = (generalData.cedula || "").trim();
        if (!cedula){
          alert("Por favor ingresa tu número de cédula.");
          return;
        }
        const matched = findEmployeeByCedula(cedula);
        if (!matched && !manualEntryMode){
          const fallback = document.getElementById("employeeManualFallback");
          if (fallback) fallback.style.display = "block";
          return;
        }
        if (!(generalData.nombre || "").trim()){
          alert("Por favor completa tu nombre antes de continuar.");
          return;
        }
        const originalText = nextBtn.textContent;
        nextBtn.disabled = true;
        nextBtn.textContent = "Verificando...";
        let exists = false;
        try{ exists = await cedulaHasResponse(cedula); }
        catch(e){ console.error("Error verificando cédula:", e); }
        nextBtn.disabled = false;
        nextBtn.textContent = originalText;
        if (exists){
          const banner = document.getElementById("employeeDuplicateBanner");
          const extraWrap = document.getElementById("employeeExtraFields");
          const note = document.getElementById("employeeMatchNote");
          if (banner) banner.style.display = "block";
          if (extraWrap) extraWrap.style.display = "none";
          if (note) note.textContent = "";
          return;
        }
      } else {
        if (!validateStepAnswers(step)) return;
      }
      step++; renderSurvey();
    };
  }
  nav.appendChild(nextBtn);

  container.appendChild(nav);
}

// ---------- Acceso a datos (Supabase) ----------
// Tabla: public.pesv_respuestas (cedula UNIQUE, nombre, cargo, area, respuestas jsonb, submitted_at)
// RLS: anon puede INSERT y SELECT; sin UPDATE/DELETE público (ver notas de configuración).
async function cedulaHasResponse(cedula){
  const c = (cedula || "").trim();
  if (!c) return false;
  if (!sb){ alert("No hay conexión con la base de datos. Revisa tu internet y recarga la página."); return true; }
  const { data, error } = await sb
    .from(RESPUESTAS_TABLE)
    .select("id")
    .eq("cedula", c)
    .maybeSingle();
  if (error){ console.error("Error verificando cédula:", error); return false; }
  return !!data;
}

async function insertResponse(payload){
  if (!sb){ return { ok:false, duplicate:false, error:"sin-conexion" }; }
  const { error } = await sb.from(RESPUESTAS_TABLE).insert(payload);
  if (error){
    if (error.code === "23505"){ return { ok:false, duplicate:true }; }
    console.error("Error guardando respuesta:", error);
    return { ok:false, duplicate:false, error };
  }
  return { ok:true };
}

async function fetchAllResponses(){
  if (!sb) return [];
  const { data, error } = await sb
    .from(RESPUESTAS_TABLE)
    .select("cedula, nombre, cargo, area, respuestas, submitted_at")
    .order("submitted_at", { ascending:true });
  if (error){ console.error("Error cargando respuestas:", error); return []; }
  return (data || []).map(row => ({
    general: { nombre: row.nombre, cedula: row.cedula, cargo: row.cargo, area: row.area },
    answers: row.respuestas || {},
    submittedAt: row.submitted_at
  }));
}

// ---------- Envío ----------
async function submitSurvey(){
  generalFields.forEach(f=> generalData[f.id] = (document.getElementById("gf_"+f.id)||{}).value || generalData[f.id] || "");

  const submitBtn = document.getElementById("navNextBtn");
  const originalText = submitBtn ? submitBtn.textContent : "";
  if (submitBtn){ submitBtn.disabled = true; submitBtn.textContent = "Enviando..."; }

  const payload = {
    cedula: (generalData.cedula || "").trim(),
    nombre: (generalData.nombre || "").trim(),
    cargo: (generalData.cargo || "").trim(),
    area: (generalData.area || "").trim(),
    respuestas: answers
  };

  const result = await insertResponse(payload);
  if (!result.ok){
    if (submitBtn){ submitBtn.disabled = false; submitBtn.textContent = originalText; }
    if (result.duplicate){
      alert("Esta cédula ya tiene una respuesta registrada. Solo se permite una respuesta por persona.");
    } else {
      alert("Ocurrió un error al guardar tu respuesta. Intenta nuevamente.");
    }
    return;
  }
  showThankYou();
}

function showThankYou(){
  const container = document.getElementById("surveyView");
  document.getElementById("progressBar").style.width = "100%";
  document.getElementById("progressPct").textContent = "100%";
  document.getElementById("progressLabel").textContent = "Completado";
  container.innerHTML = `
    <div class="card thankyou">
      <div class="check-icon">${ICONS.check}</div>
      <h2>¡Gracias por responder!</h2>
      <p>Tu respuesta fue registrada correctamente y hace parte de la caracterización del PESV.</p>
      <button class="primary" onclick="resetSurvey()">Responder otra vez</button>
    </div>`;
}

function resetSurvey(){
  step = 0;
  manualEntryMode = false;
  Object.keys(answers).forEach(k=>delete answers[k]);
  Object.keys(generalData).forEach(k=>delete generalData[k]);
  renderSurvey();
}

// ---------- Resultados tabulados ----------

function allQuestions(){
  let all = [];
  sections.forEach(s=> all = all.concat(s.questions));
  all = all.concat(Object.values(roleQuestions));
  return all;
}

let resultsSubView = "tabulacion"; // "tabulacion" | "crudos"

async function renderResults(){
  const view = document.getElementById("resultsView");
  view.innerHTML = `<div class="card"><div class="section-title">Cargando resultados...</div></div>`;

  if (!sb){
    view.innerHTML = `<div class="card empty-state">
      No hay conexión con la base de datos (revisa tu internet y recarga la página).
    </div>`;
    return;
  }

  const responses = await fetchAllResponses();

  if (responses.length === 0){
    view.innerHTML = `<div class="card empty-state">
      Todavía no hay respuestas registradas. Comparte el enlace de la encuesta con los colaboradores para empezar a recopilar datos.
    </div>`;
    return;
  }

  let html = `<div class="card">
    <span class="total-badge"><b>${responses.length}</b> respuesta(s) recibida(s)</span>
    <div class="results-tabs">
      <div class="toggle-btn small ${resultsSubView==='tabulacion'?'active':''}" onclick="setResultsSubView('tabulacion')">Tabulación por pregunta</div>
      <div class="toggle-btn small ${resultsSubView==='crudos'?'active':''}" onclick="setResultsSubView('crudos')">Datos crudos (una fila por persona)</div>
    </div>
    <div class="note">Los resultados se actualizan automáticamente a medida que llegan nuevas respuestas guardadas en Supabase.</div>
  </div>`;

  if (resultsSubView === "tabulacion"){
    html += buildTabulationTables(responses);
  } else {
    html += buildRawDataTable(responses);
  }

  view.innerHTML = html;
}

function setResultsSubView(v){
  resultsSubView = v;
  renderResults();
}

function buildTabulationTables(responses){
  const qs = allQuestions();
  let html = "";
  qs.forEach(q=>{
    const counts = {};
    q.options.forEach(o=> counts[o] = 0);
    let answeredCount = 0;
    responses.forEach(r=>{
      const val = r.answers ? r.answers[q.id] : undefined;
      if (val === undefined || val === null) return;
      if (Array.isArray(val)){
        if (val.length>0) answeredCount++;
        val.forEach(v=>{ if (counts[v] !== undefined) counts[v]++; });
      } else {
        answeredCount++;
        if (counts[val] !== undefined) counts[val]++;
      }
    });
    if (answeredCount === 0) return; // omit unanswered questions
    const max = Math.max(1, ...Object.values(counts));
    html += `<div class="card result-q"><h4>${q.text}</h4>
      <table class="xlsx"><thead><tr>
        <th>Opción</th><th style="width:90px;">Frecuencia</th><th style="width:90px;">%</th><th>Gráfico</th>
      </tr></thead><tbody>`;
    q.options.forEach(o=>{
      const c = counts[o];
      const pct = answeredCount ? Math.round((c/answeredCount)*1000)/10 : 0;
      const barPct = Math.round((c/max)*100);
      html += `<tr>
        <td>${o}</td>
        <td class="num">${c}</td>
        <td class="num">${pct}%</td>
        <td><span class="cell-bar" style="width:${barPct}%"></span></td>
      </tr>`;
    });
    html += `<tr><td>Total respuestas</td><td class="num">${answeredCount}</td><td class="num">100%</td><td></td></tr>`;
    html += `</tbody></table></div>`;
  });
  return html;
}

function buildRawDataTable(responses){
  const qs = allQuestions();
  let head = `<th>#</th><th>Nombre</th><th>Cédula</th><th>Cargo</th><th>Área</th><th>Fecha envío</th>`;
  qs.forEach(q=> head += `<th>${q.id.toUpperCase()}</th>`);

  let rows = "";
  responses
    .slice()
    .sort((a,b)=> new Date(a.submittedAt) - new Date(b.submittedAt))
    .forEach((r, idx)=>{
      const g = r.general || {};
      const fecha = r.submittedAt ? new Date(r.submittedAt).toLocaleString("es-CO") : "";
      rows += `<tr><td>${idx+1}</td><td class="wrap">${g.nombre||""}</td><td>${g.cedula||""}</td><td class="wrap">${g.cargo||""}</td><td class="wrap">${g.area||""}</td><td>${fecha}</td>`;
      qs.forEach(q=>{
        const val = r.answers ? r.answers[q.id] : undefined;
        let display = "";
        if (Array.isArray(val)) display = val.join(", ");
        else if (val) display = val;
        rows += `<td class="wrap">${display}</td>`;
      });
      rows += `</tr>`;
    });

  return `<div class="card"><div class="table-scroll">
    <table class="raw"><thead><tr>${head}</tr></thead><tbody>${rows}</tbody></table>
  </div></div>`;
}

function showView(view){
  document.getElementById("tabSurvey").classList.toggle("active", view==="survey");
  document.getElementById("tabResults").classList.toggle("active", view==="results");
  document.getElementById("surveyView").style.display = view==="survey" ? "block" : "none";
  document.getElementById("surveyProgressWrap").style.display = view==="survey" ? "block" : "none";
  document.getElementById("resultsView").style.display = view==="results" ? "block" : "none";
  if (view === "results") renderResults();
}

// ---------- Init ----------
if (!sb){
  const warn = document.getElementById("connectionWarning");
  if (warn){
    warn.style.display = "block";
    warn.textContent = "⚠ No se pudo conectar con la base de datos (revisa tu conexión a internet y recarga la página). La encuesta se puede ver, pero no podrás enviarla ni ver resultados hasta que se restablezca la conexión.";
  }
}
renderSurvey();
