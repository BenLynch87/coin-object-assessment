let coin = {
    state: 0,
    flip: function() {
        /* 1. Randomly set your coin object's "state" property to be either 
           0 or 1: use "this.state" to access the "state" property on this object.*/
           this.state = Math.round(Math.random())
    },
    toString: function() {
        /* 2. Return the string "Heads" or "Tails", depending on whether
           "this.state" is 0 or 1. */
           switch(this.state){
                case 0:
                   return 'Tails'
                   break
                case 1:
                    return 'Heads'
           }
    },
    toHTML: function() {
        let image = document.createElement('img');
        /* 3. Set the properties of this image element to show either face-up
           or face-down, depending on whether this.state is 0 or 1.*/
           switch(this.state){
            case 0:
               image.src = "./tails.png"
               break
            case 1:
                image.src = "./heads.png"
                break
       }
       console.log(image)
        return image;
    }
};

const body = document.querySelector('body')

function display20Flips(){
    let list = document.createElement('ol')
    for (let i = 0; i < 20; i++){
        coin.flip()
        let entry = document.createElement('li')
        entry.append(coin.toString())
        list.append(entry)
    }
    body.append(list)
}

function display20Images(){
    let list = document.createElement('ol')
    for (let i = 0; i < 20; i++){
        coin.flip()
        let entry = document.createElement('li')
        entry.append(coin.toHTML())
        list.append(entry)
    }
    body.append(list)
}