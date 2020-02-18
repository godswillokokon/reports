const nameC = document.querySelector("#nameC");

const crimeC = document.querySelector("#crimeC");

const genderC = document.querySelector("#genderC");

const mobileC = document.querySelector("#mobileC");

const moreC = document.querySelector("#moreC");

const emailC = document.querySelector("#emailC");


let Qid = window.location.search.split("?")[1];
db.collection("reports")
  .doc(Qid)
  .get()
  .then(data => {


    let id = data.id;
    let crime = data.data().crime;
    let email = data.data().email;
    let gender = data.data().gender;
    let mobile = data.data().mobile;
    let more = data.data().more;
    let name = data.data().name;


    const htmlName = `
      ${name}
      `;
    nameC.innerHTML = htmlName;

    const htmlEmail = `
      ${email}
      `;
    emailC.innerHTML = htmlEmail;


    const htmlCrime = `
      ${crime}
      `;
    crimeC.innerHTML = htmlCrime;


    const htmlGen = `
      ${gender}
      `;
    genderC.innerHTML = htmlGen;


    const htmlMobile = `
      ${mobile}
      `;
    mobileC.innerHTML = htmlMobile;



    const htmlMore = `
      ${more}
      `;
    moreC.innerHTML = htmlMore;




  })
  .catch(err => {
    console.error(err);
  });
