(async() => {
    const data = await fetch('../instagram.json').then(response => response.json())

    const htmlList = data.map(({ src }) => `<div class="cursor-pointer transform transition hover:-translate-y-3"><img class="rounded w-44 object-cover" src="${src}" alt="Yasmim Santos" /></div>`).join('')
    console.info(htmlList)

    document.getElementsByTagName('main')[0].innerHTML = htmlList
})()