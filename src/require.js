export default async function require(array,intents,py) {
  //intents top, array bottom
  if(py.includes("Flask")){
    intents.push("from flask import Flask")
  }
  if(py.includes("Thread")){
    intents.push("import Thread")
  }
  if(py.includes("os.")){
    intents.push("import os")
  }
  if(py.includes("flask")){
    array.push(`keep_alive()`)
  }
  if(py.includes("time.sleep(")){
    intents.push(`import time`)
  }
  if(py.includes("base64.b64")){
    intents.push(`import base64`)
  }
  if(py.includes("Fernet")){
    intents.push(`from cryptography.fernet import Fernet`)
  }
  if(py.includes("replit.db")){
    intents.push(`import replit`)
  }
}