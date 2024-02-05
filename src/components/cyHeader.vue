<template>
<header class="global-header">
    <img class="cy-logo-black" src="../assets/logoPretoFlat 2.svg">
    <nav class="great-nav">
        <ul>
            <li>Sobre Nós</li>
            <li>Membros</li>
            <li>Faça Parte</li>
            <li>Eventos</li>
            <li>Artigo Técnico</li>
            <li>Projetos Sociais</li>
            <li>Patrocínios</li>
        </ul>
        <button class="bnt-purple-filled-lt">Newsletter</button>
    </nav>
</header>
</template>

<style scoped>

@import url(../assets/globals.css);
@import url('https://fonts.googleapis.com/css2?family=Outfit:wght@100;200;300;400;500;600;700;800;900&display=swap');

template {
    font-size: 62.5%;
}
.global-header {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: left;
    align-items: center;
    gap: 598px;
    padding-left: 32px;
    padding-right: 32px;
}


@media (max-width: 1360px){
    .global-header {
        gap: 520px;
        padding-left: 16px;
        padding-right: 16px;
    }
}

.cy-logo-black {
    height: 104px;
    width: 104px;
}

@media (max-width: 1360px) {
    .cy-logo-black {
        height: 84px;
        width: 84px;
    }
}
.great-nav {
    color: white;
}

ul {
    display: flex;
    flex-direction: row;
    gap: 24px;
    list-style-type: none;
}

li {
    font-size: 21px;
    font-family: 'Outfit', sans-serif;
}

@media (max-width: 1360px) {
    li {
        font-size: 15px;
    }
}


</style>