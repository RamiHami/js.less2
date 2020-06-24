var c = Math.round(Math.random() * 15)
console.log(c)

function def(x) {
    ++x
    switch (x) {
        case 15:
            console.log(x)
            break
        default:
            console.log(x)
            def(x)
            break
    }
}

def(c)