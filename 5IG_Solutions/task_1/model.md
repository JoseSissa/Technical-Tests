# 📚 Library Management System

## Entities

### library_items **(DE)**

- id_item **(PK)**
- title
- author
- year
- num_pages
- id_category **(FK)**
- item_type

### physical_book **(PE)**

- id_book
- id_item
- id_shelf

### shelves **(PE)**

- id_shelf **(PK)**
- location
- id_category **(FK)**
- shelf_material
- number_of_items

### students **(DE)**

- id_student **(PK)**
- name
- email
- phone_number

### loans **(PE)**

- id_loan **(PK)**
- id_item **(FK)**
- id_student **(FK)**
- loan_date
- estimated_return_date
- real_return_date

### categories **(CE)**

- id_category
- name

## 🔁 Relaciones

- `library_item` 1 --- 0..1 `physical_book`
- `library_item` 1..N --- 1 `category`
- `library_item` 1 --- N `loan`
- `shelf` 1 --- N `library_items`
- `shelf` 1..N --- 1..N `category`
- `student` 1 --- 0..N `loan`

## 📌 Glossary

- **(PK)** _Primary key_
- **(FK)** _Foreing key_
- **(DE)** _Data Entity_
- **(PE)** _Pivot Entity_
- **(CE)** _Catalog Entity_
