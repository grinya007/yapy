from fastapi import FastAPI, HTTPException, WebSocket
from pydantic import BaseModel

app = FastAPI(
    openapi_url="/api/openapi.json",
    docs_url="/api/docs"
)

items = {}

class Item(BaseModel):
    id: int
    name: str

@app.get("/api/")
def read_root():
    return {"Hello": "World"}


@app.get("/api/items/{item_id}")
def read_item(item_id: int):
    if item_id not in items:
        raise HTTPException(status_code=404, detail="Item not found")
    return {"item": items[item_id]}

@app.post("/api/items/")
async def create_item(item: Item):
    items[item.id] = item
    return item

