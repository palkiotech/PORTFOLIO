/**
 * =========================================================================
 * GOOGLE APPS SCRIPT: VINCULACIÓN DE FORMULARIO PALKIOTECH -> GOOGLE SHEETS
 * =========================================================================
 * 
 * Este script recibe los datos del formulario de diagnóstico de PalkioTech y los
 * guarda automáticamente en una hoja de cálculo en tiempo real con columnas
 * perfectamente estructuradas y formateadas.
 * 
 * PASOS PARA ACTIVAR EN TU GOOGLE DRIVE (Toma 2 minutos):
 * 1. Entra a https://sheets.new y crea una hoja nueva (ej: "PalkioTech - Leads & Clientes").
 * 2. En el menú superior, haz clic en: Extensiones -> Apps Script.
 * 3. Borra cualquier código existente en el editor y pega todo este código.
 * 4. Haz clic en el icono de disco 💾 ("Guardar proyecto").
 * 5. Arriba a la derecha, haz clic en el botón azul "Implementar" (Deploy) -> "Nueva implementación".
 * 6. En el engranaje ⚙️ de la izquierda, selecciona: "Aplicación web".
 * 7. Llena los campos:
 *    - Descripción: "PalkioTech Webhook"
 *    - Ejecutar como: "Yo" (tu correo de Google)
 *    - Quién tiene acceso: "Cualquiera" (Anyone) -> ¡MUY IMPORTANTE!
 * 8. Haz clic en "Implementar" y autoriza los permisos con tu cuenta de Google si lo solicita.
 * 9. Copia la "URL de la aplicación web" que termina en "/exec".
 * 10. Si deseas usar una hoja nueva, reemplaza esa URL en `src/data/company.ts` en:
 *     googleSheetsWebhookUrl: "TU_URL_DE_APPS_SCRIPT_AQUI"
 * 
 * ¡Listo! Cada vez que alguien envíe el formulario, se guardará en tu hoja de inmediato.
 */

function doPost(e) {
  var lock = LockService.getScriptLock();
  lock.tryLock(10000); // Evita colisiones si entran envíos simultáneos

  try {
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();

    // Si la hoja es nueva o está vacía, crea los encabezados con estilo profesional
    if (sheet.getLastRow() === 0) {
      var headers = [
        "Fecha de Registro",
        "Folio de Seguimiento",
        "Nombre Completo",
        "Empresa / Negocio & Cargo",
        "WhatsApp / Teléfono",
        "Correo Electrónico",
        "Solución o Producto de Interés",
        "Horario Preferido",
        "Detalles / Requerimiento",
        "Canal de Entrada",
        "Estado del Lead"
      ];
      
      sheet.appendRow(headers);
      
      // Estilo oscuro elegante para los encabezados
      var headerRange = sheet.getRange(1, 1, 1, headers.length);
      headerRange.setBackground("#0d0e14"); // Fondo grafito oscuro
      headerRange.setFontColor("#f59e0b"); // Texto dorado PalkioTech
      headerRange.setFontWeight("bold");
      headerRange.setFontSize(10);
      headerRange.setHorizontalAlignment("center");
      headerRange.setVerticalAlignment("middle");
      sheet.setRowHeight(1, 35);
      sheet.setFrozenRows(1);
    }

    // Parsear el cuerpo de la petición (JSON o Form Params)
    var data = {};
    if (e.postData && e.postData.contents) {
      try {
        data = JSON.parse(e.postData.contents);
      } catch (err) {
        data = e.parameter || {};
      }
    } else if (e.parameter) {
      data = e.parameter;
    }

    // Extraer campos normalizados (soporta español e inglés)
    var fechaRegistro = data.fecha_registro || Utilities.formatDate(new Date(), "America/Bogota", "yyyy-MM-dd HH:mm:ss");
    var folio = data.folio || ("PLK-" + Math.floor(100000 + Math.random() * 900000));
    var nombre = data.nombre || data.name || "Sin nombre";
    var empresa = data.empresa || data.company || "Sin empresa";
    var telefono = data.telefono || data.phone || "Sin teléfono";
    var correo = data.correo || data.email || "No especificado";
    var solucion = data.solucion || data.service || "Solución General";
    var horario = data.hora_cita || data.prefTime || "A convenir por WhatsApp";
    var notas = data.notas || data.details || "Sin notas adicionales";
    var canal = data.canal || "WhatsApp Oficial";
    var estado = data.estado || "Nuevo / Por Contactar";

    // Insertar la fila al final de la hoja
    sheet.appendRow([
      fechaRegistro,
      folio,
      nombre,
      empresa,
      telefono,
      correo,
      solucion,
      horario,
      notas,
      canal,
      estado
    ]);

    // Retornar JSON exitoso
    return ContentService.createTextOutput(JSON.stringify({
      status: "success",
      folio: folio,
      message: "Lead guardado correctamente en la hoja de cálculo"
    })).setMimeType(ContentService.MimeType.JSON);

  } catch (error) {
    return ContentService.createTextOutput(JSON.stringify({
      status: "error",
      message: error.toString()
    })).setMimeType(ContentService.MimeType.JSON);

  } finally {
    lock.releaseLock();
  }
}

function doGet(e) {
  return ContentService.createTextOutput("✓ Webhook de Google Sheets PalkioTech Activo y Funcionando.")
    .setMimeType(ContentService.MimeType.TEXT);
}
