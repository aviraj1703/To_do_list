let input = document.getElementById('ifld');
let child = document.querySelector('.text');
let add = document.getElementById('sbt');
let rmv_all = document.getElementById('remove');

if(input.value == ""){
    rmv_all.style.visibility = `hidden`;
}

const To_do = (event) => {
    event.preventDefault();

    const todo_div = document.createElement('div');
    todo_div.classList.add('values');

    const new_li = document.createElement('li');
    new_li.innerHTML = input.value;
    new_li.classList.add('font');
    todo_div.appendChild(new_li);

    const del_btn = document.createElement('button');
    del_btn.innerHTML = '<i class="fas fa-minus-square"></i>';
    todo_div.appendChild(del_btn);

    if(input.value == ""){
        alert("Sorry, work list is empty :(");
        return;
    }

    rmv_all.style.visibility = `visible`;
    child.appendChild(todo_div);
    input.value = "";

    del_btn.addEventListener('click', () => {
        setTimeout(() => {
            child.removeChild(todo_div);
        }, 300);
    })
}
add.addEventListener('click', To_do);


const Remove_All = () => {
    setTimeout(() => {
        rmv_all.style.visibility = `hidden`;
        child.innerHTML = "";
    }, 300);
}

const load = () => {
    let loading = document.getElementById('loading');
    let body = document.getElementsByTagName("body")[0];
        loading.style.display = `none`;
        body.style.overflowY = `scroll`;
}