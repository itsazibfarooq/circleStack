from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker
from sqlalchemy import create_engine
from .tables import Base, Users 

def connectdb():
    DATABASE_URL = "postgresql://postgres:123@localhost:5432/circlestack"
    engine = create_engine(DATABASE_URL)
    Base.metadata.create_all(engine)
    Session = sessionmaker(bind=engine)
    session = Session()
    return session 

if __name__ == '__main__':
    session = connectdb()
    users = session.query(Users).all()
    for user in users:
        print(user)
    print('query success')