class Form {

  constructor() {
    this.input = createInput("Name");
    this.button = createButton('Play');
    this.greeting = createElement('h2');
    this.answer = createInput("Answer");
    this.ques = createElement('h5');
  }
  hide(){
    this.greeting.hide();
    this.button.hide();
    this.input.hide();
    this.ques.hide();
    this.answer.hide();
  }

  display(){
    var title = createElement('h2')
    title.html("Quiz");
    title.position(130, 0);

    this.input.position(130, 160);
    this.button.position(250, 200);
    this.answer.position(130, 130);
    this.ques.html("Name the smallest country in the World");
    this.ques.position(130, 40);

    this.button.mousePressed(()=>{
      this.input.hide();
      this.button.hide();
      this.ques.hide();
      this.answer.hide();
      player.name = this.input.value();
      playerCount+=1;
      player.index = playerCount;
      player.update();
      player.updateCount(playerCount);
      this.greeting.html("Answer Submitted")
      this.greeting.position(130, 100);
    });

  }
}
