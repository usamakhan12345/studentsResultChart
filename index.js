
var userResult = [
    {
        name: "John Doe",
        results: [
            { subject: "Math", marks: 85 },
            { subject: "English", marks: 92 },
            { subject: "Science", marks: 78 },
            // Add more subjects and marks for John Doe
        ]
    },
    {
        name: "Jane Smith",
        results: [
            { subject: "Math", marks: 60 },
            { subject: "English", marks: 38 },
            { subject: "Science", marks: 76 },
            // Add more subjects and marks for Jane Smith
        ]
    },
    {
        name: "Alice Johnson",
        results: [
            { subject: "Math", marks: 100 },
            { subject: "English", marks: 100 },
            { subject: "Science", marks: 100 },
            // Add more subjects and marks for Alice Johnson
        ]
    },
    {
        name: "Robert Davis",
        results: [
            { subject: "Math", marks: 78 },
            { subject: "English", marks: 82 },
            { subject: "Science", marks: 79 },
            // Add more subjects and marks for Robert Davis
        ]
    },
    {
        name: "Emily Wilson",
        results: [
            { subject: "Math", marks: 92 },
            { subject: "English", marks: 86 },
            { subject: "Science", marks: 94 },
            // Add more subjects and marks for Emily Wilson
        ]
    },
    {
        name: "Michael Brown",
        results: [
            { subject: "Math", marks: 87 },
            { subject: "English", marks: 90 },
            { subject: "Science", marks: 83 },
            // Add more subjects and marks for Michael Brown
        ]
    },
    {
        name: "Olivia Taylor",
        results: [
            { subject: "Math", marks: 79 },
            { subject: "English", marks: 91 },
            { subject: "Science", marks: 84 },
            // Add more subjects and marks for Olivia Taylor
        ]
    },
    {
        name: "James Anderson",
        results: [
            { subject: "Math", marks: 86 },
            { subject: "English", marks: 84 },
            { subject: "Science", marks: 90 },
            // Add more subjects and marks for James Anderson
        ]
    },
    {
        name: "Sophia Martinez",
        results: [
            { subject: "Math", marks: 93 },
            { subject: "English", marks: 79 },
            { subject: "Science", marks: 88 },
            // Add more subjects and marks for Sophia Martinez
        ]
    },
    {
        name: "Benjamin Thomas",
        results: [
            { subject: "Math", marks: 88 },
            { subject: "English", marks: 83 },
            { subject: "Science", marks: 91 },
            // Add more subjects and marks for Benjamin Thomas
        ]
    }
];
var totalNum = 80 + 80 + 80
var per = (totalNum / 300 ) * 100
// console.log(per)

// console.log(userResult[0].results[0].marks)
var inputRow = document.getElementById('tablerow')

for(var i=0 ; i < userResult.length ; i++){
    
    var tableRow = document.createElement('tr')
    var noCell = document.createElement('td')
    noCell.innerHTML = i
    tableRow.appendChild(noCell)

    var nameCell = document.createElement('td')
    nameCell.innerHTML = userResult[i].name
    tableRow.appendChild(nameCell)

    var mathCell = document.createElement('td')
    mathCell.innerHTML = userResult[i].results[0].marks
    tableRow.appendChild(mathCell)

    var engCell = document.createElement('td')
    engCell.innerHTML = userResult[i].results[1].marks
    tableRow.appendChild(engCell)

    var sciCell = document.createElement('td')
    sciCell.innerHTML = userResult[i].results[2].marks
    tableRow.appendChild(sciCell)
    
    var total =  userResult[i].results[0].marks + userResult[i].results[1].marks + userResult[i].results[2].marks

    var totalCell = document.createElement('td')
    totalCell.innerHTML = total
    tableRow.appendChild(totalCell)

    var per = Math.round((total/ 300) * 100 )+ "%"
    
    var perCell = document.createElement('td')
    perCell.innerHTML = per
    tableRow.appendChild(perCell)
    

    
    document.querySelector("table").appendChild(tableRow)
    
    }
  
