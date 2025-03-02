from . import main
from ..schema import connectdb
from ..schema.tables import Users 
from flask import request, jsonify

@main.route('/')
def index():
    return 'Hello from Main Blueprint!'

@main.route('/register', methods=['POST'])
def createUser():
    data = request.json
    username = data['username']
    email = data['email']
    passwd = data['password']

    try:
        session = connectdb()
        new_user = Users(username=username, email=email)
        new_user.set_password(passwd)

        session.add(new_user)
        session.commit()
        return jsonify({'message': 'success'}), 200
    except Exception as e:
        return jsonify({'message': f'Create User Error {e}'}), 404


@main.route('/login', methods=['GET'])
def login():
    data = request.json
    email = data['email']
    passwd = data['passwd']

    try:
        session = connectdb()
        user = session.query(Users).filter_by(email=email).first()

        if not user:
            return jsonify({'success': False}), 404
        if user.verify_password(passwd):
            return jsonify({'success': True}), 200
        else:
            return jsonify({'success': False})
    
    except Exception as e:
        return jsonify({'success': False, 'message': str(e)}), 400
