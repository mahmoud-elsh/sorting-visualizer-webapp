from flask import Flask, request, jsonify
from flask_cors import CORS
from algorithms.bubble_sort import bubble_sort
from algorithms.quick_sort import quick_sort
from algorithms.merge_sort import merge_sort

app = Flask(__name__)
CORS(app)

@app.route('/api/sort', methods = ['POST'])
def sort():
    data = request.json
    algorithm = data['algorithm']
    array = data['array']

    if algorithm == "bubble_sort":
        steps = bubble_sort(array)
    elif algorithm == "quick_sort":
        steps = quick_sort(array)
    elif algorithm == "merge_sort":
        steps = merge_sort(array)
    
    return jsonify({"steps" : steps})

if __name__ == "__main__":
    app.run()