
function rel() {

  let hold = document.getElementById("bttn").value;
  console.log(hold, "hold");
  let datee = new Date;
  let date = new Date(datee).toLocaleDateString();
  db.collection("reports").doc(hold).update({
    status: "Resolved",
    closed: date,
  });


  db
    .collection('reports')
    .onSnapshot(
      doc => {
        let data = doc.docs;
        delete (data);
      },
      err => {
        console.log(err);
      }
    );
}


function pro() {

  let hold = document.getElementById("bttn").value;
  console.log(hold, "hold");
  let datee = new Date;
  let date = new Date(datee).toDateString();
  db.collection("reports").doc(hold).update({
    status: "In Progress",
    closed: "In Progress",
  });


  db
    .collection('reports')
    .onSnapshot(
      doc => {
        let data = doc.docs;
        delete (data);
      },
      err => {
        console.log(err);
      }
    );
}


