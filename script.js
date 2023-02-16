function createElement(
  tag,
  properties,
  styles,
  parentElem,
  rows,
  cols,
  cell,
  properties_form
) {
  let newElem = document.createElement(tag);

  for (let propertie of properties) {
    newElem.setAttribute(propertie[0], propertie[1]);
  }

  for (let styleElem of styles) {
    newElem.style[styleElem[0]] = styleElem[1];
  }

  if ((tag = "table")) {
    for (let i = 0; i < rows; i++) {
      let tr = document.createElement("tr");

      for (let j = 0; j < cols; j++) {
        let td = document.createElement("td");
        tr.append(td);
      }
      newElem.append(tr);
    }
  }

  if ((tag = "form")) {
    for (let i = 0; i < cell; i++) {
      let input = document.createElement("input");
      for (let styleInput of properties_form) {
        for (let styleInputForm of styleInput) {
          input.setAttribute(styleInputForm[0], styleInputForm[1]);
        }
      }
      newElem.append(input);
    }
  }
  parentElem.append(newElem);
}

createElement(
  (tag = "table"),
  (properties = [
    ["innerHTML", "Lorem ipsum"],
    ["type", "text"],
    ["placeholder", "dolor sit amet"],
  ]),
  (styles = [
    ["fontSize", "18px"],
    ["color", "red"],
    ["width", "300px"],
    ["height", "50vh"],
    ["border", "3px solid black"],
  ]),
  (parentElem = document.querySelector("body")),
  (rows = 5),
  (cols = 3),
  (cell = 0),
  (properties_form = [
    [
      ["innerHTML", "Lorem ipsum"],
      ["type", "text"],
      ["placeholder", "dolor sit amet"],
    ],
    [
      ["innerHTML", "Lorem ipsum"],
      ["type", "text"],
      ["placeholder", "dolor sit amet"],
    ],
  ])
);

