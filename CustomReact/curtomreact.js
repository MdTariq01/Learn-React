function customrender(element , container) {
  // const new_element = document.createElement(element.type)
  // new_element.innerHTML = element.child
  // new_element.setAttribute('href' , element.prop.href)
  // new_element.setAttribute('target' , element.prop.target)
  // container.appendChild(new_element)

  // better code 
  const new_element = document.createElement(element.type)
  new_element.innerHTML = element.child
  for (const property in element.prop) {
    if (property === 'child') continue;
    new_element.setAttribute(property , element.prop[property])
  }
  container.appendChild(new_element)
}

custom_element = {
  type : "a" , 
  prop : {
    href : "https://google.com" ,
    target : "_blank"
  } , 
  child : 'Click here to go to Google'
}

const root = document.querySelector("#root")

customrender(custom_element , root)