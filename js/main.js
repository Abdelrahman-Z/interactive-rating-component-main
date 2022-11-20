let haveClass;
let lis = document.querySelectorAll(`.list ul li`);
let buttom = document.querySelector(`button`);
let card = document.querySelector(`.card`)
// add active class to LI
lis.forEach(li => {
    li.addEventListener(`click`, () => {
        lis.forEach(el => {
            el.classList.remove(`active`);
        })
        li.classList.add(`active`);
    })
})

buttom.onclick = () => {
    lis.forEach(li => {
        if (li.classList.contains(`active`)) {
            haveClass = li
        }
    })
    card.innerHTML = ``
    card.classList.add(`new`)
    let pend = buildCard();
    card.appendChild(pend)
}

function buildCard() {
    // main div
    let holder = document.createElement(`div`);
    holder.className = `holder`;
    // image
    let image = document.createElement(`img`);
    image.className = `thank`;
    image.src = `../images/illustration-thank-you.svg`;
    // text
    let p1 = document.createElement(`p`);
    p1.className = `text-list`
    p1.textContent = `you selected ${haveClass.textContent} out of ${lis.length}`;
    // h1
    let h1 = document.createElement(`h1`);
    h1.textContent = `Thank you!`
    // p2
    let p2 = document.createElement(`p`);
    p2.className = `last-text`;
    p2.textContent = `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Autem nihil cumque, obcaecati eos, quam expedita doloribus itaque aperiam molestias labore, saepe corrupti commodi dicta iste maiores reiciendis praesentium voluptate. Quidem!`;
    // append
    holder.appendChild(image);
    holder.appendChild(p1);
    holder.appendChild(h1);
    holder.appendChild(p2);
    return holder;
}