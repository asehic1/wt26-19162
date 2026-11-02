
function napraviTablicu() {

    document.write("<table>");

    // Zaglavlje tabele
    document.write("<tr>");
    document.write("<th>*</th>");

    for (let i = 1; i <= 10; i++) {
        document.write("<th>" + i + "</th>");
    }

    document.write("</tr>");

    // Redovi i kolone tablice množenja
    for (let i = 1; i <= 10; i++) {

        document.write("<tr>");

        // Zaglavlje reda
        document.write("<th>" + i + "</th>");

        for (let j = 1; j <= 10; j++) {

            document.write("<td>" + (i * j) + "</td>");

        }

        document.write("</tr>");
    }

    document.write("</table>");
}
