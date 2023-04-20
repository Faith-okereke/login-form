function Submit(event){
    const inputs = document.getElementById('input')
    const inputs1 = document.getElementById('input1')
    const inputs2 = document.getElementById('input2')
    const inputs3 = document.getElementById('input3')
    const para = document.getElementById('demo')
    const para1 = document.getElementById('demo1')
    const para2 = document.getElementById('demo2')
    const para3 = document.getElementById('demo3')
    const re = /\S+@\S+\.\S+/;
    if (inputs.value === ""   ) {
        inputs.classList.add('empty')
        para.innerHTML ="First name cannot be empty"
        para.style.display ="block"
        inputs.style.backgroundSize="auto"
    }if (inputs1.value === "" ) {
        inputs1.classList.add('empty')
        para1.innerHTML ="Last name cannot be empty"
        para1.style.display ="block"
        inputs1.style.backgroundSize="auto"
    }
    if (!re.test(inputs2.value)) {
        inputs2.classList.add('empty')
        para2.style.display= "block";
        para2.innerHTML="Looks like this isn't an email"
        inputs2.style.backgroundSize="auto"
    }
    if(inputs3.value === ""){
        inputs3.classList.add('empty')
        para3.innerHTML ="Password cannot be empty"
        para3.style.display ="block"
        inputs3.style.backgroundSize="auto"
    }
    else{
        return true
    }
    event.preventDefault()
}