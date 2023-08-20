import { Seq } from 'immutable';

export default function printBestStudents(obj) {
  const seq = Seq(obj);
  const filteredStudents = seq.filter((val) => val.score > 70).toJS();

  Object.keys(filteredStudents).map((key) => {
    const fname = filteredStudents[key].firstName;
    const lname = filteredStudents[key].lastName;

    filteredStudents[key].firstName = fname.charAt(0).toUpperCase() + fname.slice(1);
    filteredStudents[key].lastName = lname.charAt(0).toUpperCase() + lname.slice(1);
    return null;
  });

  console.log(filteredStudents);
}
