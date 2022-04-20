let form = document.createElement("form");

form.action = `DigestSearch.html`;
form.method = "get";
form.id = "searchform";
document.getElementById("search").appendChild(form);
form = document.getElementById("searchform");

let label = document.createElement("label");
label.htmlFor = "research";
form.appendChild(label);

let jonas = document.createElement("p");
jonas.style = "clear:left; margin-left:0;";
jonas.innerText = "●ダイジェストの単語から検索";
label.appendChild(jonas);

jonas = document.createElement("input");
jonas.type = "search";
jonas.name = `result`;
jonas.style = "width: 236px;";
jonas.id = "research";
form.appendChild(jonas);

jonas = document.createElement("button");
jonas.innerText = "検索";
jonas.name = "subject";
jonas.value = subject;
form.appendChild(jonas);