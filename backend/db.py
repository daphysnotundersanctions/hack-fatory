import sqlite3

conection = sqlite3.connect("data.db")

cursor = conection.cursor()

cursor.execute("""CREATE TABLE IF NOT EXISTS performers 
        (id INTEGER PRIMARY KEY AUTOINCREMENT,
         value SMALLINT,
         fromWho TEXT
        );
    """)

cursor.execute("""CREATE TABLE IF NOT EXISTS docs 
        (id INTEGER PRIMARY KEY AUTOINCREMENT,
         value SMALLINT,
         fromWho TEXT
        );
    """)

def insertToPerformers(arg):
        try:
                cursor.execute("INSERT INTO performers (value, fromWho) VALUES (?, ?)", (arg.value, arg.fromWho))
                conection.commit()
                print(arg)
                return 200
        except Exception as error:
                print(error)
                return 404

def insertToDocs(arg):
        try:
                cursor.execute("INSERT INTO docs (value, fromWho) VALUES (?, ?)", (arg.value, arg.fromWho))
                conection.commit()
                print(arg)
                return 200
        except Exception as error:
                print(error)
                return 404


def returnDataFromPerformers():
        cursor.execute("SELECT * FROM performers;")
        row = cursor.fetchall() 
        headers = ['id','value','fromWho']
        result = [zip(headers,i) for i in row]
        return result

def returnDataFromDocs():
        cursor.execute("SELECT * FROM docs;")
        row = cursor.fetchall() 
        headers = ['id','value','fromWho']
        result = [zip(headers,i) for i in row]
        return result


cursor.execute("SELECT * FROM performers;")
print([cursor.fetchall()])