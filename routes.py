from fastapi import APIRouter
from db import conn

router = APIRouter()

@router.get("/schemes")
def get_schemes(state: str, land: float):
    cur = conn.cursor()
    cur.execute(
        "SELECT scheme FROM schemes WHERE state=%s AND %s BETWEEN min_land AND max_land",
        (state, land)
    )
    return cur.fetchall()
