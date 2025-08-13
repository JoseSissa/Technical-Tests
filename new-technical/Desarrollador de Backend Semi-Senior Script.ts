/**
 * 🧪 PRUEBA TÉCNICA EN VIVO - DESARROLLADOR BACKEND SEMI-SENIOR
 *
 * Duración estimada: 30 minutos
 * Modalidad: En vivo, con cámara y pantalla compartida
 * Herramientas: VSCode local o plataforma online (Replit, StackBlitz, etc.)
 *
 * 📝 Enunciado:
 * Implementa un pequeño servicio de cotizaciones que:
 * - Reciba los datos de un cliente y una lista de ítems
 * - Valide los datos básicos
 * - Calcule el total de la cotización
 * - Devuelva un objeto con los datos y el total calculado
 *
 * ✔️ Requisitos mínimos:
 * - Validar que la cantidad de los ítems sea mayor a 0
 * - Validar que el email del cliente tenga un formato válido
 * - Calcular el total correctamente
 * - Tipado fuerte con interfaces o types
 *
 * 🔍 Se evaluará:
 * - Lógica y legibilidad del código
 * - Buenas prácticas de desarrollo
 * - Modularidad (si aplica)
 * - Explicación del razonamiento en voz alta
 *
 */

interface Item {
  description: string;
  quantity: number;
  unitPrice: number;
}

interface Client {
  name: string;
  email: string;
}

interface QuotationInput {
  client: Client;
  items: Item[];
}

interface QuotationResult {
  client: Client;
  items: Item[];
  total: number;
}

const REGEX = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/

// Implementa la clase o servicio que genere una cotización

class QuotationService {
  generate(input: QuotationInput): QuotationResult {

    /**
     * Aquí va tu implementación:
     * - Validar que las cantidades de los ítems sean mayores a 0
     * - Validar el formato del email del cliente
     * - Calcular el total sumando (cantidad * precio unitario) de cada ítem
     * - Devolver un objeto con el cliente, ítems y total
     */

    // Items with quantity < 0 are ignored
    if (input.items.length === 0) throw new Error("No existen ítems para cotizar");
    const itemsValidation = input.items.filter((item) => item.quantity > 0 && item.unitPrice > 0)
    if (itemsValidation.length === 0) throw new Error("Los ítems no cuentan con con cantidades o valores aceptables.");

    const emailUser = input.client.email
    const resultEmailValidation = REGEX.test(emailUser);
    if (!resultEmailValidation) throw new Error("Email inválido.");

    let total = 0
    itemsValidation.forEach(item => {
      total += item.quantity * item.unitPrice
    })

    if (itemsValidation.length > 0 && emailUser && total > 0) {
      return {
        client: {
          name: input.client.name,
          email: input.client.email
        },
        items: itemsValidation,
        total
      }
    } else {
      throw new Error("No se puede realizar la cotización correctamente.");
    }

    // throw new Error("Método no implementado.");
  }
}

// Puedes usar este bloque para probar tu solución

const quotationService = new QuotationService();

const input: QuotationInput = {
  client: {
    name: "Nombre del Cliente",
    email: "cliente@ejemplo.com",
  },
  items: [
    { description: "Servicio A", quantity: 1, unitPrice: 100 },
    { description: "Servicio B", quantity: 2, unitPrice: 200 },
  ],
};

try {
  const result = quotationService.generate(input);
  console.log("Resultado de la cotización:", result);
} catch (error) {
  console.error("Error al generar la cotización:", (error as Error).message);
}

/**
 * 💡 Ejemplo de salida esperada en consola:
 *
 * Resultado de la cotización: {
 *   client: {
 *     name: 'Nombre del Cliente',
 *     email: 'cliente@ejemplo.com'
 *   },
 *   items: [
 *     { description: 'Servicio A', quantity: 1, unitPrice: 100 },
 *     { description: 'Servicio B', quantity: 2, unitPrice: 200 }
 *   ],
 *   total: 500
 * }
 */
