class Form{
    constructor(){}

    display(){
        var title = createElement('h2');
        title.html("CAR RACING GAME")
        title.position(450,20);

        var input = createInput("WRITE YOUR CAR'S NAME")
        var button = createButton('PLAY')
        input.position(400,150)
        button.position(400,250)
        button.mousePressed(function(){
            input.hide()
            button.hide()
            var name = input.value();
            playerCount += 1;
            player.update(name)
            player.updateCount(playerCount)
            var greeting = createElement('h3')
            greeting.html("HELLO " + name)
            greeting.position(400,150)
        })
    }
}
