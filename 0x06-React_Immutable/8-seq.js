const { Seq } = require('immutable');

export default function printBestStudents (object) {
  const students = Seq(object);
  const filtered = students.filter((student) => student.score > 70);
  const mapped = filtered.map((student) => {
    return {
      firstName: student.firstName.charAt(0).toUpperCase() + student.firstName.slice(1),
      lastName: student.lastName.charAt(0).toUpperCase() + student.firstName.slice(1)
    };
  });
  console.log(mapped.toJS());
}
