from flask import Flask, request, jsonify, session
from flask_session import Session
from sqlalchemy import null
from config import ApplicationConfig

app = Flask(__name__)
app.config.from_object(ApplicationConfig)


if __name__ == '__main__':
    app.run(debug = True)