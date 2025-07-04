import os
import psycopg2
from psycopg2.extras import RealDictCursor

DB_URL = os.getenv("NEON_DB_URL")

def clear_chat_memory():
    with psycopg2.connect(DB_URL, cursor_factory=RealDictCursor) as conn:
        with conn.cursor() as cur:
            cur.execute("DELETE FROM chat_memory;")
            conn.commit()
    print("Chat memory cleared.")

if __name__ == "__main__":
    clear_chat_memory()
