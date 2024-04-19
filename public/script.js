const URL = "https://primerparcial-5f644-default-rtdb.firebaseio.com/";

async function postData(data) {
    const dataBase = await fetch(`${URL}users.json`, {
        method: "POST",
        body: JSON.stringify(data)
    });
    getPost();
}

let btn = document.getElementById("btnAdd");
btn.addEventListener('click', () => {
    let name = document.getElementById("name").value;
    let description = document.getElementById("description").value;

    if (name.trim() === "" || description.trim() === "") {
        alert("Por favor, completa todos los campos.");
        return; 
    }

    let data = {
        name: name,
        description: description,
        userId: "1",
    };

    postData(data);
});
async function getPost() {
  let response = await fetch(`${URL}users.json`);
  let json = await response.json();
  let table = document.getElementById("tableData");
  let htmlRow = "";
  let index = 1;
  for (let key in json) {
      let rowData = json[key];
      htmlRow += `<tr>
                      <td>${index}</td>
                      <td>${rowData.name}</td>
                      <td>${rowData.description}</td>
                      <td><button onclick="uploadImage()">Ver Imagen</button></td>
                  </tr>`;
      index++;
  }
  
  table.innerHTML = htmlRow;
}