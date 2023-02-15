function createElement(tag, properties, styles, parentElem){
    let newElem = document.createElement(tag);
    
    let prop
    for ( let propertie of properties ) {
        newElem.setAttribute(propertie[0], propertie[1]);
    }

    for ( let styleElem of styles ) {
        newElem.style[styleElem[0]] = styleElem[1];
    }
    parentElem.append(newElem);
}

createElement( 
    tag = "input",
    properties = [ ["innerHTML", "Lorem ipsum"], ["type", "text"], ["placeholder", "dolor sit amet"] ],
    styles = [ ["fontSize", "18px"], ["color", "red"] ],
    parentElem = document.querySelector('body')
)