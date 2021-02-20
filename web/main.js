(async() => {
    const data = await fetch('../instagram.json').then(response => response.json())

    const htmlList = data.map(({ src }) => `<div><img src="${src}" alt="Yasmim Santos" /></div>`).join('')
    console.info(htmlList)

    document.getElementsByTagName('main')[0].innerHTML = htmlList
})()