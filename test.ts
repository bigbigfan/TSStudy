interface cat {
    name: string,
    run(): void
}

interface fish {
    name: string,
    swim(): void
}

function say(ani: cat | fish) {
    if(typeof (ani as fish).swim === 'function')
    console.log('fish' + ani.name);
}
const args: fish = {
    name: 'paopao',
    swim: function() {
        console.log('swim');
        
    } 
}
say(args)