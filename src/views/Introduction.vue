<template>
    <header class=header>
        <!-- <img src=""  alt="LOGO"/> -->
        <h2>Cat Gallery</h2>

        <ul>
            <li><a href="#sec0">Introduction</a></li>
            <li><a href="#sec1">Functions</a></li>
            <li><a href="#sec2">Advantages</a></li>
        </ul>
        <router-link to="/home" class="routerLink">Experience now</router-link>
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
            <router-link to="/home" class="routerLink">Request Your Cat Image Now</router-link>
        </div>
    </div>
    <div id="sec1" class="sec1">

        <div>
            <h2>Functions</h2>
        </div>
        <div class="sec1div">
            <div>
                <h3>Browse & Enjoy</h3>
                Instantly request and display beautiful cat images with a click.
            </div>
            <div>
                <h3>Save Your Favorites</h3>
                Easily add any cat image to your favorites collection.
            </div>
            <div>
                <h3>Smooth Navigation</h3>
                Navigate through different sections of the gallery all on a single page.
            </div>
            <div>
                <h3>Personalize Your Experience</h3>
                Sign up or log in to save and access your favorite images anytime.
            </div>

        </div>



    </div>
    <div id="sec2" class="sec2">
        sec2: continuing updating!

        <div class="gallery-container">
            <button id="scroll-left">← 左移</button>
            <div class="gallery" id="gallery">
                <img src="" alt="Cat 1">
                <img src="" alt="Cat 2">
                <img src="" alt="Cat 3">
                <img src="" alt="Cat 4">
               
            </div>
            <button id="scroll-right">右移 →</button>
        </div>

    </div>
</template>

<script>
export default {
    name: "Login",
    data() {
        return {
            // Define any reactive data for this component
            itemWidth: 110,
            galleryElement: null,
        };
    },
    mounted() {
        // Lifecycle hook to access DOM elements after the component is mounted
        this.galleryElement = document.getElementById('gallery');
        const scrollLeftBtn = document.getElementById('scroll-left');
        const scrollRightBtn = document.getElementById('scroll-right');

        if (scrollLeftBtn && scrollRightBtn) {
            scrollLeftBtn.addEventListener('click', this.scrollLeft);
            scrollRightBtn.addEventListener('click', this.scrollRight);
        }
    },
    methods: {
        scrollLeft() {
            if (this.galleryElement) {
                this.galleryElement.scrollBy({
                    left: -this.itemWidth,
                    behavior: 'smooth'
                });
            }
        },
        scrollRight() {
            if (this.galleryElement) {
                this.galleryElement.scrollBy({
                    left: this.itemWidth,
                    behavior: 'smooth'
                });
            }
        }
    }
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
    margin-left: 70px;
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
    background-color: black;
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
    border-radius: 7px;
    padding: 5px;


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
    width: 100vw;
    margin-top: 70px;
}

.sec1 div {
    display: flex;
    justify-content: center;
    align-items: center;
    /* margin: 30px; */
}

.sec1div {

    display: flex;

    justify-content: center;
    margin-left: 10vw;
    margin-right: 10vw;

}

.sec1div div {
    height: 500px;
    width: 20vw;
    background-color: antiquewhite;
    margin: 10px;
    border-radius: 10px;
    box-shadow: 0 0 20px 10px rgb(249, 241, 231);
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    padding: 20px;
}

.sec1div div:hover {
    background-color: rgb(238, 222, 199);
}


.sec2 {
    height: 500px;
    margin-top: 70px;

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




.gallery-container {
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    width: 400px;
    /* 容器的宽度 */
}

.gallery {
    display: flex;
    overflow-x: auto;
    scroll-behavior: smooth;
    white-space: nowrap;
}

.gallery img {
    width: 100px;
    margin-right: 10px;
    flex-shrink: 0;
}

button {
    background-color: lightgray;
    border: none;
    padding: 10px;
    cursor: pointer;
}
</style>