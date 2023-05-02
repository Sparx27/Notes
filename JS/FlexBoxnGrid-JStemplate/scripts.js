const arr = [
  {
    h3: 'Wellcome',
    p: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Explicabo hic accusantium impedit porro magni, quae pariatur eaque dolor consequatur aliquid!'
  },
  {
    h3: 'About',
    p: 'Odit perferendis pariatur temporibus aspernatur, officiis atque voluptatum nisi veniam doloribus porro, omnis laboriosam voluptates eum earum sequi recusandae voluptatibus!'
  },
  {
    h3: 'Contact',
    p: 'Nesciunt soluta accusantium nulla excepturi quidem maxime debitis tempora sunt labore modi aut ullam tempore inventore molestiae perferendis assumenda velit quisquam cum at'
  },
  {
    h3: 'Blog',
    p: 'Cum quaerat sequi aliquam quod expedita ex vitae, possimus deserunt explicabo in sapiente! Quidem quia officiis nam architecto minima voluptatibus, est optio?'
  }
]

const d = document,
  $container = d.querySelector('.container'),
  $template = d.getElementById('card-template').content
  /* $fragment = d.createDocumentFragment() */

arr.forEach(el => {
  $template.querySelector('h3').textContent = el.h3
  $template.querySelector('p').textContent = el.p
  
  const $clone = d.importNode($template, true)
  $container.appendChild($clone)
})