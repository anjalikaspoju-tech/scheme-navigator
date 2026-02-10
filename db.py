import psycopg2

conn = psycopg2.connect(
    host=" http://127.0.0.1:8000",
    database="scheme_db",
    user="root",
    password="Root"
)
