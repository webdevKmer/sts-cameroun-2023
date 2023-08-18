const services = [
    {
        "title":'CONSTRUCTION DE BÂTIMENTS',
        "description":"STS CAMEROUN réalise des projets de construction dans les 10 régions du Cameroun et au-delà. Nous appliquons les normes à l'échelle de l'État pour la construction de bâtiments.",
        "image":'https://placehold.co/600x400?font=roboto',
    },
    {
        "title":'CONSTRUCTION ROUTIèRE',
        "description":"L'entreprise STS CAMEROUN conçoit et construit de nouvelles routes avec des normes de qualité élevées. L'opération commence à partir de sondage, du déboisement des buissons, des travaux de terrassement.",
        "image":'https://placehold.co/600x400?font=roboto',
    },
    {
        "title":'ENTRETIEN DES ROUTES',
        "description":'Nous sommes profondément impliqués dans la stratégie nationale d’entretien des infrastructures. Cela implique de remédier aux défauts de la route tels que les nids-de-poule.',
        "image":'https://placehold.co/600x400?font=roboto',
    },
    {
        "title":"STRUCTURES D'INGÉNIERIE",
        "description":"STS CAMEROUN est l'un des principaux entrepreneurs dans le domaine de la construction de routes et de ponts. Nous surmontons les défis logistiques pour réaliser de projets d'envergure",
        "image":'https://placehold.co/600x400?font=roboto',
    },
    {
        "title":'FORAGE',
        "description":"Avec une flotte d'équipements de forage (Foreuse, systèmes de forage à marteaux (DHH), oscillateurs, Rotators, pré-tubage temporaire, grappin sphériques, marteaux, grues et appareil de forage Wirth",
        "image":'https://placehold.co/600x400?font=roboto',
    },
    {
        "title":'Renovation urbaine',
        "description":'STS CAMEROUN réalise des projets de construction à grande échelle, des plus petits aux plus complexes, dans le plus grand respect des normes et standards depuis de nombreuse années.',
        "image":'https://placehold.co/600x400?font=roboto',
    },
]
const realisations = [
  {
    'image':'https://placehold.co/400',
    'title':'Ma realisation',
    'description':'Ici la description du projet'
  },
  {
    'image':'https://placehold.co/400',
    'title':'Ma realisation',
    'description':'Ici la description du projet'
  },
  {
    'image':'https://placehold.co/400',
    'title':'Ma realisation',
    'description':'Ici la description du projet'
  },
  {
    'image':'https://placehold.co/400',
    'title':'Ma realisation',
    'description':'Ici la description du projet'
  },
]
const references = [
  {
    'image':'https://placehold.co/400',
    'title':'Projet reference',
    'description':'Ici la description du projet'
  },
  {
    'image':'https://placehold.co/400',
    'title':'Projet reference',
    'description':'Ici la description du projet'
  },
  {
    'image':'https://placehold.co/400',
    'title':'Projet reference',
    'description':'Ici la description du projet'
  },
  {
    'image':'https://placehold.co/400',
    'title':'Projet reference',
    'description':'Ici la description du projet'
  },
]
const projets = [
  {
    'image':'https://placehold.co/400',
    'title':'Projet',
    'description':'Ici la description du projet'
  },
  {
    'image':'https://placehold.co/400',
    'title':'Projet',
    'description':'Ici la description du projet'
  },
  {
    'image':'https://placehold.co/400',
    'title':'Projet',
    'description':'Ici la description du projet'
  },
  {
    'image':'https://placehold.co/400',
    'title':'Projet',
    'description':'Ici la description du projet'
  },

]
const servicesElt = document.querySelector('section .services-list')
const realisationsElt = document.querySelector('section .realisations-list')
const referencesElt = document.querySelector('.references-list')
const projetsElt = document.querySelector('.projets-list')

servicesElt.innerHTML = `
  ${services.map(elt => {
    return (`
      <article>
        <img src="${elt.image}" alt="${elt.title}">
        <h4 class="title">${elt.title}</h4>
        <p class="description">${elt.description}</p>
      </article>
    `)
  }).join('')}
`
realisationsElt.innerHTML = `
  ${realisations.map(elt => {
    return (`
      <article>
        <img src="${elt.image}" alt="${elt.title}">
        <h4 class="title">${elt.title}</h4>
        <p class="description">${elt.description}</p>
      </article>
    `)
  }).join('')}
`
referencesElt.innerHTML = `
  ${references.map(elt => {
    return (`
      <article>
        <img src="${elt.image}" alt="${elt.title}">
        <h4 class="title">${elt.title}</h4>
        <p class="description">${elt.description}</p>
      </article>
    `)
  }).join('')}
`
projetsElt.innerHTML = `
  ${projets.map(elt => {
    return (`
      <article>
        <img src="${elt.image}" alt="${elt.title}">
        <h4 class="title">${elt.title}</h4>
        <p class="description">${elt.description}</p>
      </article>
    `)
  }).join('')}
`
console.log(realisationsElt, referencesElt, projetsElt);