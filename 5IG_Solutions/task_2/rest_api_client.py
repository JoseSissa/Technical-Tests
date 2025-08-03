import requests

# URL a la que quieres hacer la petición
BASE_URL = 'https://jsonplaceholder.typicode.com/posts/100'

# Realiza la petición GET
respuesta = requests.get(BASE_URL)


def get_posts():
    print("📥 Enviando petición GET...")
    try:
        response = requests.get(BASE_URL)
        response.raise_for_status()
        posts = response.json()
        print("✅ Posts recibidos correctamente.")
        
        # Mostrar los primeros 5 títulos
        print("\n📝 Títulos de los primeros 5 posts:")
        for post in posts[:5]:
            print(f"- {post['title']}")
    except requests.exceptions.HTTPError as http_err:
        print(f"❌ Error HTTP: {http_err}")
    except Exception as err:
        print(f"❌ Error inesperado: {err}")

def create_post():
    print("\n📤 Enviando petición POST...")
    new_post = {
        "title": "Mi nuevo post",
        "body": "Este es el contenido de mi nuevo post.",
        "userId": 1
    }

    try:
        response = requests.post(BASE_URL, json=new_post)
        if response.status_code == 201:
            created_post = response.json()
            print("✅ Post creado exitosamente:")
            print(created_post)
        else:
            print(f"⚠️ Error al crear post. Código de estado: {response.status_code}")
    except requests.exceptions.RequestException as e:
        print(f"❌ Error al conectar con la API: {e}")

if __name__ == "__main__":
    get_posts()
    create_post()