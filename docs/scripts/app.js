

Case.type('alternate', s => s.replace(/[a-z]/gi,c=>c[`to${(s=!s)?'Low':'Upp'}erCase`]()));


const textareaElem = document.getElementById("textarea");

function initButton(id, clickEvent) {
    const buttonElem = document.getElementById(id);
    buttonElem.addEventListener("click", clickEvent, false);
}

function initConvertButton(id, conversion) {
    initButton(id, () => textareaElem.value = conversion(textareaElem.value));
}

initConvertButton("lowercase", Case.lower);
initConvertButton("uppercase", Case.upper);
initConvertButton("sentenceCase", Case.sentence);
initConvertButton("titleCase", Case.title);

initConvertButton("alternatingCase", Case.alternate);
initConvertButton("swapCase", Case.flip);
initConvertButton("randomCase", Case.random);

initConvertButton("camelCase", Case.camel);
initConvertButton("pascalCase", Case.pascal);
initConvertButton("snakeCase", Case.snake);
initConvertButton("kebabCase", Case.kebab);
initConvertButton("headerCase", Case.header);
initConvertButton("constantCase", Case.constant);

