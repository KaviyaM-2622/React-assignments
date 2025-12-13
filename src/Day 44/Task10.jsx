function StudentAttendance() {
  const students = [
    { id: 1, name: "Divya", isPresent: true },
    { id: 2, name: "Kaviya", isPresent: false },
    { id: 3, name: "Gopi", isPresent: true },
  ];

  return (
    <ul>
      {students.map((student) => (
        <li key={student.id}>
          {student.name} - {student.isPresent ? "Present" : "Absent"}
        </li>
      ))}
    </ul>
  );
}

export default StudentAttendance;
