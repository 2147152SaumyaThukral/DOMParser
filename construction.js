/*--JS for DOM Parser--*/

function loadXML() {
    var xmlReq = new XMLHttpRequest();
  
    console.log(xmlReq.readyState);
  
    xmlReq.onreadystatechange = function () {
      console.log(xmlReq.readyState);
      if (this.readyState == 4 && this.status == 200) {
        // document.getElementById('customer_info').innerHTML = this.responseText;
        cusinfo(this);
        // console.log(renXml.readyState);
      }
    };
  
    xmlReq.open("GET", "construction.xml", "TRUE");
  
    xmlReq.send();
  }
  
  var xmlDoc;
  var table;
  var x;
  
  function cusinfo(info) {
    var i;
    xmlDoc = info.responseXML;
    // console.log(xmlDoc);
    displayTable(xmlDoc);
  }
//function to display html table from xml data
function displayTable(xmlDoc) {
    table = `<thead><tr>
    <th>Manager Name</th>
    <th>Phone Number</th>
    <th>Address</th>
    <th>Email</th>
    <th>Age</th>
    <th>Projects</th>
          </tr></thead>`;
  
    x = xmlDoc.getElementsByTagName("cd");
  
    for (i = 0; i < x.length; i++) {
      table +=
        "<tr><td>" +
        x[i].getElementsByTagName("ManagerName")[0].childNodes[0].nodeValue +
        "</td><td data-label='Date'>" +
        x[i].getElementsByTagName("Phone")[0].childNodes[0].nodeValue +
        "</td><td>" +
        x[i].getElementsByTagName("Address")[0].childNodes[0].nodeValue +
        "</td><td>" +
        x[i].getElementsByTagName("Email")[0].childNodes[0].nodeValue +
        "</td><td>" +
        x[i].getElementsByTagName("Age")[0].childNodes[0].nodeValue +
        "</td><td>" +
        x[i].getElementsByTagName("Projects")[0].childNodes[0].nodeValue +
        "</td><td><button onclick='removecus()'> remove </button></td></tr>";
    }
    document.getElementById("table").innerHTML = table;
  }

function removecus() {
    // console.log(xmlDoc.getElementsByTagName('customer')[0]);
    // var x = xmlDoc.getElementsByTagName("customer")[0];
  
    var index,
      table = document.getElementById("table");
  
    for (var i = 0; i < table.rows.length; i++) {
      table.rows[i].onclick = function () {
        index = this.rowIndex;
  
        x = xmlDoc.getElementsByTagName("Managername")[index - 1];
        xmlDoc.documentElement.removeChild(x);
        console.log(xmlDoc);
        displayTable(xmlDoc);
      };
    }
    alert("This detail removed!");
  }
  
  function removeNodeElement() {
    var i;
  
    for (i = 0; i < x.length; i++) {
      a = xmlDoc
        .getElementsByTagName("Managername")
        [i].getElementsByTagName("Address")[0];
      b = a.childNodes[0];
      a.removeChild(b);
    }
    console.log(xmlDoc);
    table = `<thead><tr>
    <th>Manager Name</th>
   <th>Phone Number</th>
   <th>Address</th>
   <th>Email</th>
   <th>Age</th>
   <th>Projects</th>
  </tr></thead>`;
  var some = xmlDoc;
  x = xmlDoc.getElementsByTagName("Managername");
  
  for (i = 0; i < x.length; i++) {
  table +=
  "<tr><td>" +
  x[i].getElementsByTagName("Manager Name")[0].childNodes[0].nodeValue +
  "</td><td>" +
  x[i].getElementsByTagName("Phone Number")[0].childNodes[0].nodeValue +
  "</td><td>" +
  x[i].getElementsByTagName("Address")[0].childNodes[0].nodeValue +
  "</td><td>" +
  x[i].getElementsByTagName("Email")[0].childNodes[0].nodeValue +
  "</td><td>" +
  x[i].getElementsByTagName("Age")[0].childNodes[0].nodeValue +
  "</td><td>" +
  x[i].getElementsByTagName("Projects")[0].childNodes[0].nodeValue +
  "</td><td><button onclick='removecus()'> remove </button></td></tr>";
  }
  document.getElementById("table").innerHTML = table;
    alert('The node element  "Address" has been removed!');
  
    
  }
  
  function changeNodeValue() {
    var j;
    for (j = 0; j < x.length; j++) {
      xmlDoc
        .getElementsByTagName("Managername")
        [j].getElementsByTagName("Projects")[0].childNodes[0].nodeValue = "ongoing";
    }
    console.log(xmlDoc);
    alert("The projects status has been changed ongoing!");
    displayTable(xmlDoc);
  }
  
  function addNewElement() {
    var i;
    newEle = xmlDoc.createElement("other_info");
    newText = xmlDoc.createTextNode("some info");
    newEle.appendChild(newText);
    xmlDoc.getElementsByTagName("Managername")[0].appendChild(newEle);
    console.log(xmlDoc);
    alert('The new node element "other info" has been added to the second node!');
    var table = `<thead><tr>
            <th>Manager Name</th>
           <th>Phone Number</th>
           <th>Address</th>
           <th>Email</th>
           <th>Age</th>
           <th>Projects</th>
           <th>Other info</th>
           <th>Remove customer</th>
          </tr></thead>`;
  
    x = xmlDoc.getElementsByTagName("Managername");
  
    for (i = 0; i < x.length; i++) {
      table +=
        "<tr><td>" +
        x[i].getElementsByTagName("Manager Name")[0].childNodes[0].nodeValue +
        "</td><td>" +
        x[i].getElementsByTagName("Phone Number")[0].childNodes[0].nodeValue +
        "</td><td>" +
        x[i].getElementsByTagName("Address")[0].childNodes[0].nodeValue +
        "</td><td>" +
        x[i].getElementsByTagName("Email")[0].childNodes[0].nodeValue +
        "</td><td>" +
        x[i].getElementsByTagName("Age")[0].childNodes[0].nodeValue +
        "</td><td>" +
        x[i].getElementsByTagName("Projects")[0].childNodes[0].nodeValue +
        "</td><td>" +
        x[0].getElementsByTagName("other_info")[0].childNodes[0].nodeValue +
        "</td><td><button onclick='removecus()'> remove </button></td></tr>";
    }
    document.getElementById("table").innerHTML = table;
  }
//function to delete record from XML
function deleteRecord(i)
{
    y = xmlDoc.getElementsByTagName("cd")[i]
    var name = y.getElementsByTagName("Managername")[0].childNodes[0].nodeValue
    var reply = confirm("Do you want to delete record? \nManager Name: " + name)
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
