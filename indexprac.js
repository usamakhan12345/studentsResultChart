<!DOCTYPE html>
<html>
<head>
    <title>User Results</title>
</head>
<body>
    <h1>User Results</h1>

    <table>
        <tr>
            <th>Index</th>
            <th>Name</th>
            <th>Result 1</th>
            <th>Result 2</th>
            <th>Result 3</th>
        </tr>

        <script>
            for(var i=0 ; i < userResult.length ; i++){
                var tableRow = document.createElement("tr");

                var indexCell = document.createElement("td");
                indexCell.innerHTML = i;
                tableRow.appendChild(indexCell);

                var nameCell = document.createElement("td");
                nameCell.innerHTML = userResult[i].name;
                tableRow.appendChild(nameCell);

                var result1Cell = document.createElement("td");
                result1Cell.innerHTML = userResult[i].results[0].marks;
                tableRow.appendChild(result1Cell);

                var result2Cell = document.createElement("td");
                result2Cell.innerHTML = userResult[i].results[1].marks;
                tableRow.appendChild(result2Cell);

                var result3Cell = document.createElement("td");
                result3Cell.innerHTML = userResult[i].results[2].marks;
                tableRow.appendChild(result3Cell);

                document.querySelector("table").appendChild(tableRow);
            }
        </script>
    </table>

</body>
</html>
