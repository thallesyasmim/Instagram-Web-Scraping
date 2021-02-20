(async() => {
    const data = await fetch('../instagram.json').then(response => response.json())

    const htmlList = data.map(({ src }) => `<div><img src="${src}" alt="Yasmim Santos" /></div>`)
    console.info(htmlList)

    htmlList.forEach(htmlElement => document.getElementsByTagName('main')[0].innerHTML += htmlElement)
    
})()