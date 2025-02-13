document.addEventListener("DOMContentLoaded", () => {
    getDetails();
    document.getElementById("backtologin").addEventListener("click", gotoLoginPage);
});

// JavaScript Object with Getters, Setters, and Delete
let studentDetails = {
    stdname: "",
    stdreg: "",
    stdroll: "",
    pntname: "",
    pntpno: "",
    pntrel: "",
    pntocc: "",

    set details(data) {
        Object.assign(this, data);
    },

    get info() {
        return `
        Student: ${this.stdname}, Reg No: ${this.stdreg}, Roll No: ${this.stdroll}
        Parent: ${this.pntname}, Contact: ${this.pntpno}, Relation: ${this.pntrel}, Occupation: ${this.pntocc}`;
    }
};

function getDetails() {
    let details = new URLSearchParams(window.location.search);

    let studentData = {
        stdname: details.get("stdname"),
        stdreg: details.get("stdreg"),
        stdroll: details.get("stdroll"),
        pntname: details.get("pntname"),
        pntpno: details.get("pntpno"),
        pntrel: details.get("pntrel"),
        pntocc: details.get("pntocc"),
    };

    studentDetails.details = studentData; // Using setter

    // Using dot notation to update DOM
    document.getElementById("stdname").textContent += studentDetails.stdname;
    document.getElementById("stdreg").textContent += studentDetails.stdreg;
    document.getElementById("stdroll").textContent += studentDetails.stdroll;
    document.getElementById("pntname").textContent += studentDetails.pntname;
    document.getElementById("pntpno").textContent += studentDetails.pntpno;
    document.getElementById("pntrel").textContent += studentDetails.pntrel;
    document.getElementById("pntocc").textContent += studentDetails.pntocc;
    
    // Demonstrating call(), apply(), bind()
    logStudentDetails.call(studentDetails);
    logStudentDetails.apply(studentDetails);
    
    let boundLog = logStudentDetails.bind(studentDetails);
    boundLog();

    // Deleting a property (Example: Removing parent occupation)
    delete studentDetails.pntocc;
    console.log("After delete:", studentDetails);
}

// Function using call(), apply(), bind()
function logStudentDetails() {
    console.log(`CALL: ${this.info}`);
}

const gotoLoginPage = () => {
    window.location.href = "parentidlogin.html";
};
