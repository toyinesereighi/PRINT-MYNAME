const myName = () => {
    return "Oluwatoyin Atobatele"
}
const span = document.createElement("span")

span.style.color = '#faca15';
span.style.fontSize ='50px';
span.style.fontWeight ='bold';
span.style.textShadow ='2px 2px 3px black';


span.innerText = myName();

document.body.append(span)


