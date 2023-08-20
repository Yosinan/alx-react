import { Seq } from 'immutable';

export default function printBestStudents(object) {
  const students = Seq(object);
  const filtered = students.filter((student) => student.score > 70);
  
  Object.keys(filtered).map((key) => {
    const fname = filtered[key].firstName;
    const lname = filtered[key].lastName;

    fname.charAt(0).toUpperCase() + fname.slice(1);
    lname.charAt(0).toUpperCase() + lname.slice(1);
    return null;
  });

  console.log(filtered.toJS());
}
