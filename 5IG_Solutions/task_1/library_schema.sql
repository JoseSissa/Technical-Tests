-- ============================================
-- Library Management System – SQLite Schema
-- ============================================

-- Library Items
CREATE TABLE library_items (
    id_item INTEGER PRIMARY KEY AUTOINCREMENT,
    title TEXT NOT NULL,
    author TEXT NOT NULL,
    year INTEGER NOT NULL,
    num_pages INTEGER NOT NULL,
    id_category INTEGER NOT NULL,
    item_type TEXT CHECK(item_type IN ('physical', 'digital', 'comic', 'magazine')) NOT NULL,
    FOREIGN KEY (id_category) REFERENCES categories(id_category)
);

-- Physical Shelves
CREATE TABLE shelves (
    id_shelf INTEGER PRIMARY KEY AUTOINCREMENT,
    location TEXT NOT NULL,
    id_category INTEGER NOT NULL,
    material TEXT NOT NULL,
    number_of_items INTEGER CHECK (number_of_items > 0) NOT NULL,
    FOREIGN KEY (id_category) REFERENCES categories(id_category)
);

-- List of Categories
CREATE TABLE categories (
    id_category INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL
);

-- Physical Books
CREATE TABLE physical_books (
    id_book INTEGER PRIMARY KEY AUTOINCREMENT,
    id_item INTEGER NOT NULL,  -- FK hacia LibraryItem
    id_shelf INTEGER NOT NULL,
    FOREIGN KEY (id_item) REFERENCES library_items(id_item),
    FOREIGN KEY (id_shelf) REFERENCES shelves(id_shelf)
);

-- Students
CREATE TABLE students (
    id_student INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    email TEXT UNIQUE NOT NULL,
    phone_number TEXT UNIQUE NOT NULL
);

-- Loans
CREATE TABLE loans (
    id_loan INTEGER PRIMARY KEY AUTOINCREMENT,
    id_student INTEGER NOT NULL,
    id_item INTEGER NOT NULL,
    loan_date DATE NOT NULL,
    estimated_return_date DATE,
    real_return_date DATE,
    FOREIGN KEY (id_student) REFERENCES students(id_student),
    FOREIGN KEY (id_item) REFERENCES library_items(id_item)
);