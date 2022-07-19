import PersonClass from './Person';
import Teacher from './Teacher';

const personObj= new PersonClass('XXX');
personObj.walk();

const teacherObj= new Teacher('YYY','english');
teacherObj.teach();
teacherObj.walk();