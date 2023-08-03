
Cajeros
{
  "_id": ObjectId("..."),         // El ID único generado por MongoDB
  "numeroSerie": "CAJ123456",     // Número de serie del cajero
  "ubicacion": "Dirección XYZ",   // Ubicación del cajero automático
  "estado": "activo",             // Estado del cajero (activo o inactivo)
  "efectivoDisponible": 5000,     // Cantidad de efectivo disponible en el cajero
  "fechaInstalacion": ISODate("2023-08-01T00:00:00Z"), // Fecha de instalación del cajero
  "ultimaFechaMantenimiento": ISODate("2023-07-25T00:00:00Z") // Última fecha de mantenimiento
}

movimientos
{
  "_id": ObjectId("..."),             // El ID único generado por MongoDB
  "tipoTransaccion": "depósito",      // Tipo de transacción (depósito, retiro, etc.)
  "monto": 1000,                      // Monto involucrado en la transacción
  "fechaHora": ISODate("2023-08-01T12:34:56Z"), // Fecha y hora de la transacción
  "numeroCuenta": "123456789",        // Número de cuenta asociado con el movimiento
  "descripcion": "Depósito en efectivo" // Descripción opcional
}

operaciones 
{
  "_id": ObjectId("..."),             // El ID único generado por MongoDB
  "tipoOperacion": "transacción financiera", // Tipo de operación (transacción financiera, inicio de sesión, etc.)
  "fechaHora": ISODate("2023-08-01T12:34:56Z"), // Fecha y hora de la operación
  "numeroCuenta": "123456789",        // Número de cuenta asociado con la operación
  "detalleOperacion": "Depósito en efectivo de $1000", // Detalles adicionales sobre la operación
  "resultadoOperacion": "éxito"      // Resultado de la operación (éxito, error, denegado, etc.)
}
usuario
{
  "_id": ObjectId("..."),             // El ID único generado por MongoDB
  "nombreCompleto": "Juan Pérez",     // Nombre completo del usuario
  "numeroCuenta": "123456789",        // Número de cuenta único del usuario
  "pin": "1234",                     // PIN numérico del usuario
  "saldo": 1500.00,                  // Saldo actual de la cuenta bancaria del usuario
  "fechaCreacion": ISODate("2023-08-01T10:00:00Z") // Fecha de creación de la cuenta
}
