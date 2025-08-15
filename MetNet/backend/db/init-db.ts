import Database from "better-sqlite3";

// Crear/conectar base de datos
const db = new Database("./db/task.db");

const tables_db = `
    CREATE TABLE IF NOT EXISTS tasks (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        title TEXT NOT NULL,
        description TEXT NOT NULL,
        status TEXT NOT NULL DEFAULT 'pending' CHECK (status IN ('pending', 'completed'))
    );

    INSERT INTO tasks (title, description, status) VALUES ('Configurar entorno de desarrollo', 'Instalar Node.js, configurar TypeScript y establecer estructura de proyecto', 'completed');
    INSERT INTO tasks (title, description, status) VALUES ('Implementar API REST', 'Crear endpoints para CRUD de tareas con Express y validación de datos', 'pending');
    INSERT INTO tasks (title, description, status) VALUES ('Diseñar base de datos', 'Definir esquema de tablas y relaciones para el sistema de gestión de tareas', 'completed');
    INSERT INTO tasks (title, description, status) VALUES ('Escribir documentación', 'Crear documentación técnica de la API y guías de uso para desarrolladores', 'pending');
    INSERT INTO tasks (title, description, status) VALUES ('Implementar autenticación', 'Agregar sistema de login con JWT y middleware de autorización', 'pending');
    INSERT INTO tasks (title, description, status) VALUES ('Crear tests unitarios', 'Desarrollar suite de pruebas para controladores y modelos usando Jest', 'completed');
    INSERT INTO tasks (title, description, status) VALUES ('Optimizar rendimiento', 'Revisar consultas SQL, implementar cache y mejorar tiempo de respuesta', 'pending');
`;

// Ejecutar el script
try {
  db.exec(tables_db);
  console.log("✅ Base de datos creada y poblada con éxito.");
} catch (err) {
  console.error("❌ Error ejecutando SQL:", err);
}

// Cerrar la base de datos
db.close();
