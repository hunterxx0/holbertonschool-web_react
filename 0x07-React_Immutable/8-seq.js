import {Seq} from 'immutable';

/**
 * Equality.
 * @param {obj} obj The first obj.
 */
export function printBestStudents(obj) {
  const student = Seq(obj)
      .filter((stud) => stud.score >= 70)
      .map((obj) => {
        const stud = obj;
        stud.firstName = (stud.firstName[0].toUpperCase() +
          stud.firstName.slice(1));
        stud.lastName = stud.lastName[0].toUpperCase() + stud.lastName.slice(1);
        return stud;
      }).toObject();
  console.log(student);
}


