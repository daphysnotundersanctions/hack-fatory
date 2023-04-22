from typing import Union
from pydantic import BaseModel
from fastapi import FastAPI
from db import *

class Item(BaseModel):
    value : int
    fromWho : str

app = FastAPI()

@app.get("/")
async def getCodesList():
    return returnDataFromPerformers()


@app.post("/sendMessage/")
async def postMessage(item : Item):
    return insertToPerformers(item)

@app.post("/addDocument")
async def postDocument():
    return 