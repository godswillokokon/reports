const content = document.querySelector('#reports');
let nameID = sessionStorage.getItem("username");

const setupContent = data => {
  let html = '';
  data.forEach(data => {
    let id = data.id;
    let crime = data.data().crime;
    let reportDate = data.data().reportDate;
    let status = data.data().status;
    let closed = data.data().closed;


    const div = `
    <tr>
    	<td >${id}</td>
    	<td >${crime}</td>
                              <td>${reportDate}</td>
                             
															<td > <div class="dropdown action-label drop-active">
																		<a href="javascript:void(0)" class="btn btn-white btn-sm dropdown-toggle" data-toggle="dropdown">  ${status}</a>
																	
                                  </div>
                                  </td>
															<td > <div class="dropdown action-label drop-active">
																		<a href="javascript:void(0)" class="btn btn-white btn-sm dropdown-toggle" data-toggle="dropdown">  ${closed}</a>
																	
                                  </div>
                                  </td>
														</tr>											
    `;
    html += div;
  });
  content.innerHTML = html;





};

let first = db
  .collection('reports')
  .where("name", "==", nameID)
  .orderBy('reportDate', 'asc')
  .onSnapshot(
    doc => {
      let data = doc.docs;
      setupContent(data);
    },
    err => {
      console.log(err);
    }
  );
