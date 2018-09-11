<template>
    <footer>
        <a href="https://github.com/MichalStabrawa"><i class="fab fa-2x fa-github"></i></a>
        <a href=""><i class="fab fa-2x fa-linkedin-in"></i></a>
    </footer>
</template>

<script>
export default {
    name: 'Footer'
}
</script>

<style scoped>
footer{
    width: 100%;
    height: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #000;
}
footer i{
    color:#fff;
    margin:10px;
}
</style>
