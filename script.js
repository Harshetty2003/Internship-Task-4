const courses = [
    {
        id: 1,
        title: 'Introduction to HTML',
        description: 'Learn the basics of HTML.',
        instructor: 'John Doe',
        price: 'RS.3999/-',
        duration: '2 weeks',
    },
    {
        id: 2,
        title: 'Introduction to CSS',
        description: 'Learn the fundamentals of CSS.',
        instructor: 'Jane Smith',
        price: 'RS.2999/-',
        duration: '3 weeks',
    },
    {
        id: 3,
        title: 'Introduction to JAVA',
        description:'Learn the basics of JAVA',
        instructor:'Atharv Shetty',
        price: 'Rs.1999/-',
        duration:'2 weeks'

    },
    {
        id: 4,
        title: 'Introduction to JAVASCRIPT',
        description:'Learn the Advanced JAVA',
        instructor:'Atharv Shetty',
        price: 'Rs.4999/-',
        duration:'4 weeks'
    },
    {
        id: 5,
        title: 'Introduction to PYTHON',
        description:'Learn the basics of PYTHON',
        instructor:'Kunal Yadav',
        price: 'Rs.4999/-',
        duration:'4 weeks'

    },
    {
        id: 6,
        title: 'Introduction to SQL',
        description:'Learn the basics of SQL',
        instructor:'Kunal Yadav',
        price: 'Rs.4999/-',
        duration:'4 weeks'
    }
  
];

const courseList = document.getElementById('course-list');
const courseDetailSection = document.getElementById('course-detail');


function showCourseDetail(courseId) {
    const selectedCourse = courses.find(course => course.id === courseId);

    if (selectedCourse) {
        courseDetailSection.innerHTML = `
            <h2>${selectedCourse.title}</h2>
            <p><strong>Instructor:</strong> ${selectedCourse.instructor}</p>
            <p><strong>Price:</strong> ${selectedCourse.price}</p>
            <p><strong>Duration:</strong> ${selectedCourse.duration}</p>
            <p>${selectedCourse.description}</p>
            <button id="enroll-button" onclick="enrollCourse(${selectedCourse.id})">Enroll Now</button>
        `;
    }
}


function populateCourseList() {
    courses.forEach(course => {
        const listItem = document.createElement('li');
        listItem.innerHTML = `
            <h3>${course.title}</h3>
            <p>${course.description}</p>
        `;
        listItem.addEventListener('click', () => {
           
            window.location.href = `course.html?id=${course.id}`;
        });
        courseList.appendChild(listItem);
    });
}


function getUserName() {
    const storedName = localStorage.getItem('user_name');
    if (storedName) {
        document.getElementById('user-greeting').textContent = `Hello, ${storedName}!`;
    }
}


function enrollCourse(courseId) {
    alert(`You have enrolled in the course with ID ${courseId}.`);
}


populateCourseList();
getUserName();
