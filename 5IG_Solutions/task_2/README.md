# Task 2: Working with REST APIs

## Overview

This Python script demonstrates interaction with the JSONPlaceholder REST API.

## Features

- ✅ GET request to retrieve data
- ✅ Process and extract specific information from responses
- ✅ POST request to add new data
- ✅ Comprehensive error handling for HTTP status codes

## Installation and Setup

### Prerequisites

- Python 3.7 or higher installed on your system
- Internet connection to access the JSONPlaceholder API

### Step-by-Step Setup

1. **Clone or download the project:**

   ```bash
   # Navigate to the task_2 directory
   cd task_2
   ```

2. **Create a virtual environment:**

   ```bash
   python -m venv venv
   ```

3. **Activate the virtual environment:**

   **Windows (PowerShell):**

   ```powershell
   venv\Scripts\Activate.ps1
   ```

   **Windows (Command Prompt):**

   ```cmd
   venv\Scripts\activate.bat
   ```

   **macOS/Linux:**

   ```bash
   source venv/bin/activate
   ```

4. **Install Python dependencies:**

   ```bash
   pip install -r requirements.txt
   ```

5. **Run the script:**

   ```bash
   python rest_api_client.py
   ```

6. **Deactivate the virtual environment (when finished):**
   ```bash
   deactivate
   ```

## How it Works

### API Information

- **Base URL:** https://jsonplaceholder.typicode.com
- **Purpose:** Free REST API for testing and prototyping
- **Data:** Provides fake data for posts, users, comments, etc.
- **Authentication:** None required
- **HTTP Methods:** GET and POST supported

### Script Functionality

#### 1. GET Request (`get_posts()`)

- Retrieves posts from the `/posts` endpoint
- Configurable limit parameter
- Returns structured response with success/error status

#### 2. POST Request (`create_post()`)

- Creates new posts via POST to `/posts` endpoint
- Sends JSON data with title, body, and user ID
- Returns the created post with assigned ID
