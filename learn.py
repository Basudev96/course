#Create curd operation using python for student details
class Student:
    def __init__(self, name, age, rollno):
        self.name = name
        self.age = age
        self.rollno = rollno
        self.curd = []
    def add_student(self):
        self.curd.append({
            'name': self.name,
            'age': self.age,
            'rollno': self.rollno
        })
    def delete_student(self, rollno):
        for student in self.curd:
            if student['rollno'] == rollno:
                self.curd.remove(student)
            break
    def update_student(self, rollno, name, age):
        for student in self.curd:
            if student['rollno'] == rollno:
                student['name'] = name
                student['age'] = age
            break
    def get_student(self, rollno):
        for student in self.curd:
            if student['rollno'] == rollno:
                return student
            return None
