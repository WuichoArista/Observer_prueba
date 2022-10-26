let cuadrado = document.querySelector('.cuadrado')
let cuadradoDos = document.querySelector('.cuadrado_dos')
const funcionArealizar = (items => {
    console.log( 'tiems->', items)
    items.forEach( item =>{
        console.log( 'tiem->', item)
        if(item.isIntersecting) {
            item.target.style.opacity = 1
            item.target.style.transform = 'translateX(0)'
        }
    })
})
let observer = new IntersectionObserver( funcionArealizar)


observer.observe(cuadrado)
observer.observe(cuadradoDos)

//para usarlo con REACT es necesario encapsularlo en useEffects