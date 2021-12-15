import Teacher from './Teacher';

namespace Subjects {
	export class Subject {
		teacher = Teacher;
		setTeacher(teacher) {
			this.teacher = teacher;
		}
	}
}
