let input = document.getElementById('ifld');
let child = document.querySelector('.text');
let add = document.getElementById('sbt');
let rmv_all = document.getElementById('remove');
let cnt = 0; 
let k = 1;

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
        if(i > -1)
        return;
    }

    rmv_all.style.visibility = `visible`;
    child.appendChild(todo_div);
    cnt++;
    input.value = "";

    del_btn.addEventListener('click', () => {
        let Rotate = del_btn.parentElement;
        Rotate.style.transformOrigin = `${0}%`;
        if(k == 1){
            Rotate.style.transformOrigin = `${0}%`;
            todo_div.classList.add('fall_1');
        }
        else{
            Rotate.style.transformOrigin = `${100}%`;
            todo_div.classList.add('fall_2');
        }
        k = -1*k;
        setTimeout(() => {
            child.removeChild(todo_div);
            cnt--;
            if(cnt == 0){
                rmv_all.style.visibility = `hidden`;
                return;}
        }, 600);
    })
}
add.addEventListener('click', To_do);


const Remove_All = () => {
    setTimeout(() => {
        rmv_all.style.visibility = `hidden`;
        child.innerHTML = "";
    }, 300);
}
