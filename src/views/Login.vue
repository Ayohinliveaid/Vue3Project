<template>
    <header class=header>
        <!-- <img src=""  alt="LOGO"/> -->
        Cat Gallery
        <ul>
            <li><a href="#sec0">Introduction</a></li>
            <li><a href="#sec1">Functions</a></li>
            <li><a href="#sec2">Advantages</a></li>
        </ul>
        <router-link to="/" class="routerLink">Start Now</router-link>
    </header>
    <div></div>
    <div id="sec0" class="sec0">
        <img src="/public/CatFace.png" alt="CatFace" />
        <div class="sec0div">
            <h1>Welcome to the Electric Cat Gallery</h1>
            <p>Explore a vibrant collection of stunning cat images powered by our advanced image sourcing technology.
            </p>
            <ul>
                <li>Explore a vibrant collection of stunning cat images powered by our advanced image sourcing
                    technology.</li>
                <li>Instant previews for your favorite cat selections</li>
                <li>Enjoy fast delivery on all image requests.</li>
            </ul>
            <router-link to="/" class="routerLink">Request Your Cat Image Now</router-link>
        </div>
    </div>
    <div id="sec1" class="sec1">sec1: continuing updating!
        <!-- <table class="table" cellspacing="5">
            <thead>
                <tr>
                    <th colspan=4>
                        <div>Advantages</div>
                    </th>
                </tr>
                <tr>
                    <th>
                        <div>h1</div>
                    </th>
                    <th>
                        <div>h2</div>
                    </th>
                    <th>
                        <div>h3</div>
                    </th>
                    <th>
                        <div>h4</div>
                    </th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>
                        <div>d1</div>
                    </td>
                    <td>
                        <div>d2</div>
                    </td>
                    <td>
                        <div>d3</div>
                    </td>
                    <td>
                        <div>d4</div>
                    </td>
                </tr>
            </tbody>
        </table> -->

    </div>
    <div id="sec2" class="sec2">
        sec2: continuing updating!
        <!-- <div class="scroll-container">
            <button id="scroll-left" class="scroll-btn">Left</button>
            <div class="scroll-section0">
                <div class="scroll-item">Item 1</div>
                <div class="scroll-item">Item 2</div>
                <div class="scroll-item">Item 3</div>
                <div class="scroll-item">Item 4</div>
            </div>
            <button id="scroll-right" class="scroll-btn">Right</button>
        </div> -->
    </div>
</template>

<script>
export default {
    name: "Login",



}
</script>

<style>
.header {
    background-color: antiquewhite;
    display: flex;
    align-items: center;
    position: fixed;
    width: 100vw;

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
    margin-right: 50px;


}

.routerLink:hover {
    background-color: rgb(213, 173, 120);
}

.sec0 {
    height: 500px;
    padding-top: 70px;
    display: flex;
}

.sec0 img {
    flex: 1;
}

.sec0div {
    flex: 1;
    height: 500px;
    display: flex;
    /* Add this to make it a flex container */
    flex-direction: column;
    /* Arrange children in a column */
    /* justify-content: space-between;  */
}

h1 {
    padding: 20px;
}

p {
    padding: 20px;
}

.sec0 .routerLink {
    height: 50px;
    width: 240px;
    background-color: rgb(232, 209, 179);
    border: none;
    border-radius: 4px;
    padding-left: 30px;
    padding-right: 30px;
    margin-left: 20px;
    margin-top: auto;


}



.sec1 {
    height: 500px;
    padding-top: 70px;
    display: flex;
    justify-content: center;

}

.sec2 {
    height: 500px;
    padding-top: 70px;

}

.table {
    width: 80vw;
    background-color: antiquewhite;
}

.table th {
    background-color: aqua;
    border-radius: 20px;
    width: 20vw;
}

.table td {
    background-color: aquamarine;
    border-radius: 20px;
}



.scroll-container {
    display: flex;
    align-items: center;
}

.scroll-section0 {
    display: flex;
    overflow-x: auto;
    white-space: nowrap;
    scroll-behavior: smooth;
    /* Smooth scrolling effect */
    width: 300px;
    /* Width of the scrollable area */
    margin: 0 10px;
    /* Space between the buttons */
}

.scroll-item {
    min-width: 100px;
    margin-right: 10px;
    background-color: lightblue;
    text-align: center;
    padding: 20px;
}

.scroll-btn {
    background-color: lightgray;
    border: none;
    padding: 10px;
    cursor: pointer;
}
</style>