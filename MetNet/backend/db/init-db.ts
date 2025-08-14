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

    INSERT INTO tasks (title, description, status) VALUES ('Tarea 1', 'Descripción de la tarea 1', 'pending');
    INSERT INTO tasks (title, description, status) VALUES ('Tarea 2', 'Descripción de la tarea 2', 'completed');
    INSERT INTO tasks (title, description, status) VALUES ('Tarea 3', 'Descripción de la tarea 3', 'pending');
    INSERT INTO tasks (title, description, status) VALUES ('Tarea 4', 'Descripción de la tarea 4', 'completed');
    INSERT INTO tasks (title, description, status) VALUES ('Tarea 5', 'Descripción de la tarea 5', 'pending');
    INSERT INTO tasks (title, description, status) VALUES ('Tarea 6', 'Descripción de la tarea 6', 'completed');
    INSERT INTO tasks (title, description, status) VALUES ('Tarea 7', 'Descripción de la tarea 7', 'pending');
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
