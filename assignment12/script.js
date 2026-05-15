function countStudents() {

    // While Loop
    let i = 1;
    let whileText = "While Loop: ";

    while (i <= 5) {

        whileText += "Student" + i + " ";

        i++;
    }

    document.getElementById("whileResult").innerHTML = whileText;


    // Do While Loop
    let j = 1;
    let doText = "Do While Loop: ";

    do {

        doText += "Student" + j + " ";

        j++;

    } while (j <= 5);

    document.getElementById("doResult").innerHTML = doText;
}
