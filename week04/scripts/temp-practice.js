// Practice time
let aCourse = {
    code: "WDD131",
    title: "Dynamic Web Fundamentals",
    credits: 2,
    sections: [
        { section: "001", enrolled: 95, instructor: "Roberto Diaz Rodriguez" },
        { section: "002", enrolled: 80, instructor: "Sarah Gobble" }
    ]
};



function setCourseInformation(course) {

    const h1 = document.querySelector("h1");
    h1.innerHTML = `${course.code} – ${course.title}`;
    h1.style.color = "green";
    h1.style.fontWeight = "300";
}

const section = aCourse.sections.map(section =>
    `<tbody>
        <tr>
            <td>section: ${section.section}</td>
            <td>Enrolled: ${section.enrolled}</td>
            <td>Instructor: ${section.instructor}</td>
        </tr>
    </tbody>`);

document.getElementById("sections").innerHTML =
    `<thead>
        <th>Enrollments</th>
    </thead>
    ${section.join(" ")}`;



setCourseInformation(aCourse);



// Add dates (Practice)

const currentYear = new Date().getFullYear();
const lastModified = new Date().toLocaleDateString("en-GB", { weekday: "long", year: "numeric", month: "long", day: "numeric", hour: "2-digit", minute: "2-digit", second: "2-digit" });

document.getElementById("currentyear").textContent = currentYear;
document.querySelector("#lastModified").textContent = lastModified;


let names = ['Nancy', 'Blessing', 'Jorge', 'Svetlana', 'Bob'];

// getting the name.charAt(index_num)
const namesB = names.filter(name => name.charAt(0) === 'B');

const nameArray = names.map(name => name.length);
console.log(nameArray)



// Expert Practice 
const aCourses = {
    sections: [
        { section: "001", enrolled: 95 },
        { section: "002", enrolled: 80 },
        { section: "003", enrolled: 40 },
        { section: "004", enrolled: 120 },
        { section: "005", enrolled: 60 }
    ]
};

const nameSelection = aCourses.sections.map(name => name.section);




const selection = aCourses.sections.map(section => section.enrolled).filter(section => section > 70);

const avgSelection = selection.reduce((acc, num) => { return num + acc }, 0) / selection.length;

console.log(`section: ${nameSelection.join(" ")}, average: ${avgSelection}`);








