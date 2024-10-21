<template lang="">
    <header class=header>
        <!-- <img src=""  alt="LOGO"/> -->
          Cat Gallery
            <ul>
                <li><a href="#sec0">sec0</a></li>
                <li><a href="#sec1">sec1</a></li>
                <li><a href="#sec2">sec2</a></li>
            </ul>
        <router-link to="/" class="routerLink">Go Home</router-link>     
    </header>
    <div></div>
    <div id="sec0" class="sec0">sec0</div>
    <div id="sec1" class="sec1">sec1
        <table class="table" cellspacing="5">
            <thead>
                <tr>
                    <th colspan=4><div>Advantages</div></th>
                </tr>
                <tr>
                    <th><div>h1</div></th>
                    <th><div>h2</div></th>
                    <th><div>h3</div></th>
                    <th><div>h4</div></th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td><div>d1</div></td>
                    <td><div>d2</div></td>
                    <td><div>d3</div></td>
                    <td><div>d4</div></td>
                </tr>
            </tbody>
        </table>

    </div>
    <div id="sec2" class="sec2">sec2</div>
</template>

<script>
export default {
    name: "Login"


}
</script>

<style>
.header {
    background-color: antiquewhite;
    display: flex;
    align-items: center;
    position: fixed;
    width:100vw;

}

.header ul {
    display: flex;
    margin-left: 50px;
    margin-top: 0;
    /* margin-right: 50px; */
    padding-bottom: 0;
    padding-left: 10px;
    margin-bottom: 0;
}

.header ul li {
    margin-right: 14vw;
    list-style-type: none;
    height: 70px;
    /* display:flex;
    align-items: center; */
}

.header ul li:hover {
    background-color: aqua;
}

.header ul li a {
    line-height: 65px;
    text-decoration: none;
    font-size: large;
    font-weight: bold;
    background-color: antiquewhite;
    padding-top: 25px;
    padding-bottom: 22px;
    color: black;
}

.routerLink {
    line-height: 50px;
    text-decoration: none;
    height: 50px;
    background-color: rgb(232, 209, 179);
    color: black;
    /* positon:absolute; */
    margin-left: auto;
    margin-right:50px;
       
}
.routerLink:hover{
    background-color: rgb(213, 173, 120);
}

.sec0{
    height:500px;
    padding-top: 70px;

}
.sec1{
    height:500px;
    padding-top: 70px;
    display: flex;
    justify-content: center;

}
.sec2{
    height:500px;
    padding-top: 70px;
    
}

.table{
    width: 80vw;
    background-color: antiquewhite;
}
.table th{
    background-color: aqua;
    border-radius: 20px;
    width:20vw;
}
.table td{
    background-color: aquamarine;
    border-radius: 20px;
}
</style>