/*--JS for DOM Parser--*/

var xmlDoc
var xmlFile ='construction.xml'

//function to load xml doc
function loadXML()
{
    var xmlReq = new XMLHttpRequest;
    xmlReq.onreadystatechange = function()
    {
        console.log(xmlReq.readyState)
        if((xmlReq.readyState == 4) && (xmlReq.status == 200))
        {
            //xml doc successfully retrieved
            console.log(xmlReq.readyState)

            xmlDoc = xmlReq.responseXML
            displayTable()
        }
    }
    xmlReq.open('GET',xmlFile, true)
    xmlReq.send()
}

//function to display html table from xml data
function displayTable()
{
    var i;
    var table = "<tr><th>Manager Name</th><th>Phone Number</th><th>Address</th><th>Email</th><th>Age</th><th>Projects</th></tr>";
    var x = xmlDoc.getElementsByTagName("cd")
    for (i = 0; i < x.length; i++)
    {
        table += "<tr><td>" +
            x[i].getElementsByTagName("Managername")[0].childNodes[0].nodeValue + "</td><td>" +
            x[i].getElementsByTagName("Phone")[0].childNodes[0].nodeValue + "</td><td>" +
            x[i].getElementsByTagName("Address")[0].childNodes[0].nodeValue + "</td><td>" +
            x[i].getElementsByTagName("Email")[0].childNodes[0].nodeValue + "</td><td>" +
            x[i].getElementsByTagName("Age")[0].childNodes[0].nodeValue + "</td>" +
            x[i].getElementsByTagName("Projects")[0].childNodes[0].nodeValue + "</td><td>" +
            "<td><span class='material-icons' onclick='editRecord(" +i+ ")'>edit</span></td>" +
            "<td><span class='material-icons' onclick='deleteRecord(" +i+ ")'>delete</span></td></tr>";
    }
    document.getElementById("table").innerHTML = table
}

//function to delete record from XML
function deleteRecord(i)
{
    y = xmlDoc.getElementsByTagName("cd")[i]
    var name = y.getElementsByTagName("Managername")[0].childNodes[0].nodeValue
    var reply = confirm("Do you want to delete record? \nName: " + name)
    if(reply == true)
    {
        xmlDoc.documentElement.removeChild(y)
        console.log("Record deleted: " + name)
        displayTable()
    }
}

//function to open form to add new record to xml
function openForm()
{
    document.getElementById("addRecordForm").style.display = "block"
}

//function to close form to add new record to xml
function closeForm()
{
    document.getElementById("addRecordForm").style.display = "none"
}

//function to add new record to xml
function addNewRecord()
{
    var i
    var details = []
    var x = document.getElementById("addRecordForm")
    cd = xmlDoc.createElement("cd")
    details[0] = xmlDoc.createElement("Managername")
    details[1] = xmlDoc.createElement("Phone")
    details[2] = xmlDoc.createElement("Address")
    details[3] = xmlDoc.createElement("Email")
    details[4] = xmlDoc.createElement("Age")
    details[5] = xmlDoc.createElement("Projects")

    for(i = 0; i < 7; i++)
    {
        details[i].appendChild(xmlDoc.createTextNode(x.elements[i].value))
        cd.appendChild(details[i])
    }
    xmlDoc.documentElement.appendChild(cd);
    console.log("Record added: " + x.elements[0].value)
    displayTable()
}