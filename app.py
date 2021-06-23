from flask import Flask, render_template, jsonify
import random
import json

app = Flask(__name__)

@app.route("/")
def index():
    return render_template('index.html')

@app.route("/data", methods=['POST'])
def getCurrData():
    value = random.randint(0, 100)

    json_data = {
        "value": value
    }

    print(json_data)
    return jsonify(Result=json.dumps(json_data))

if __name__ == "__main__":
    app.run()