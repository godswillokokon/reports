const report = document.querySelector("#report");

report.addEventListener("submit", e => {
  e.preventDefault();
  let name = document.getElementById("name").value;
  let crime = document.getElementById("crime").value;
  let gender = document.getElementById("gender").value;
  let reportDate = document.getElementById("reportDate").value;
  let email = document.getElementById("email").value;
  let mobile = document.getElementById("mobile").value;
  let more = document.getElementById("more").value;

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

    }, alert("success!"))
    .catch(err => {
      console.error(err);
      alert("err : ", err)
    });

});

