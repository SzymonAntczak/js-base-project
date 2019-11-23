export class BaseComponentComponent {
    constructor(templatePath, templateContainer) {
        this.templatePath = templatePath;
        this.templateContainer = templateContainer;
        this.generateComponent(this.templatePath, this.templateContainer);
    }

    generateComponent(templatePath, templateContainer) {
        const xhr= new XMLHttpRequest();

        xhr.open('GET', templatePath, true);
        xhr.onreadystatechange= function() {
            if (this.readyState!==4) return;
            if (this.status!==200) return;
            templateContainer.innerHTML= this.responseText;
        };
        xhr.send();
    }
}