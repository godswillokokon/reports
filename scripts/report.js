const report = document.querySelector("#report");

report.addEventListener("submit", e => {
  e.preventDefault();
  const name = document.getElementById("name").value;
  const crime = document.getElementById("crime").value;
  const gender = document.getElementById("gender").value;
  const reportDate = document.getElementById("reportDate").value;
  const email = document.getElementById("email").value;
  const mobile = document.getElementById("mobile").value;
  const more = document.getElementById("more").value;
  const status = "In progress";
  const closed = "In progress"

  return db
    .collection("reports")
    .doc()
    .set({
      crime,
      name,
      gender,
      reportDate,
      email,
      mobile,
      more,
      status,
      closed

    }, alert("success!"))
    .catch(err => {
      console.error(err);
      alert("err : ", err)
    });

});

