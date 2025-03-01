from . import main
from ..schema import connectdb
from ..schema.tables import Users 
from flask import jsonify

@main.route('/')
def index():
    return 'Hello from Main Blueprint!'

@main.route('/createUser', methods=['GET'])
def createUser():
    try:
        session = connectdb()
        new_user = Users(username='john_doe', email='john@example.com')
        new_user.set_password('securepassword123')

        session.add(new_user)
        session.commit()
        return jsonify({'message': 'success'}), 200
    except Exception as e:
        return jsonify({'message': f'Create User Error {e}'}), 404
