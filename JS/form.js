class Form{
    constructor(){
        this.title = createElement('h2',"MULTIPLAYER CAR RACING GAME");
        this.input = createInput();
        this.button = createButton("PLAY");
        this.checkbox = createCheckbox("I agree to all Terms & Conditions", false);
        }

    display(){
        this.title.position(420,100);
        this.input.position(550,300);
        this.button.position(605,350);
        this.checkbox.position(520,400);

        this.checkbox.changed(()=>{
            console.log("pressed");
            this.button.mousePressed(()=>{
                console.log("mouse pressed");
                this.input.hide();
                this.button.hide();
                this.checkbox.hide();
            });
        });
    }


}
