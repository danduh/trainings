document.addEventListener("DOMContentLoaded", function () {
    const menu = [
        {
            link: 'index.html',
            name: 'Home'
        },
        {
            link: 'contact.html',
            name: 'Contact'
        },
        {
            link: 'about.html',
            name: 'About'
        },
        {
            link: 'share.html',
            name: 'Share'
        }
    ];

    const menuCont = document.getElementById('mainNavigationMenu')

    const ul = document.createElement(`ul`);

    for (let i = 0; i < menu.length; i++) {
        const item = menu[i];
        const li = document.createElement(`li`);
        const a = document.createElement(`a`);
        a.setAttribute('href', item.link)
        a.text = item.name;
        li.appendChild(a)
        ul.appendChild(li);
    }
    menuCont.appendChild(ul);

}, false)
