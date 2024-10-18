<template>

    <el-container>
        <el-header>Cat Gallery</el-header>

        <el-main>
            <el-tabs stretch v-model="activeName">
                <el-tab-pane label="Cats" name="cats" class="catsPane">
                    <el-tabs tab-position='left' style="margin-top: 10px;height: 100%">
                        <el-tab-pane label="Main Cats">
                            <el-button type="primary" class="buttonStyle" v-on:click="requestMainCats">
                                more cats</el-button>
                            <el-space direction="vertical" alignment="normal">
                                <div v-for="(cat, index) in mainCats" v-bind:key="index" 
                                     class="cardDiv">
                                    <el-card class="cardStyle">
                                        <img v-if="cat" v-bind:src="cat.url" alt="Cat Image" style="height: 300px;" />

                                    </el-card>
                                    <el-card style="flex:1" class="cardStyle">
                                        <el-button type="primary" class="buttonStyle"
                                            v-on:click="addToFavourites(cat)">favourite</el-button>
                                        CatID: {{ cat.id }}

                                    </el-card>
                                </div>
                            </el-space>

                        </el-tab-pane>
                        <el-tab-pane label="Animated Cats">

                            <el-button type="primary" class="buttonStyle"
                                v-on:click="requestAnimatedCats">more cats</el-button>

                            <el-space direction="vertical" alignment="normal" >
                                <div v-for="(cat, index) in animatedCats" v-bind:key="index"
                                    class="cardDiv">
                                    <el-card class="cardStyle">
                                        <img v-if="cat" v-bind:src="cat.url" alt="Cat Image" style="height: 300px;" />

                                    </el-card>
                                    <el-card style="flex:1" class="cardStyle">
                                        <el-button type="primary" class="buttonStyle"
                                            v-on:click="addToFavourites(cat)">favourite</el-button>
                                            CatID: {{ cat.id }}

                                    </el-card>
                                </div>
                            </el-space>
                        </el-tab-pane>



                    </el-tabs>

                </el-tab-pane>

                <el-tab-pane label="Favourites" name="favourites" style="height: 100vh">

                    <div v-if="!isLoggedIn"> Login to save and access your favourites!</div>
                    <div class="window" v-if="!isLoggedIn">

                        <el-tabs stretch>
                            <el-tab-pane label="Login">
                                <el-form label-width="100px" style="width:90%;margin-top: 25px;"
                                    v-bind:model="loginForm" v-bind:rules="loginRules" ref="loginForm">
                                    <el-form-item label="E-mail" prop="email">
                                        <el-input v-model="loginForm.email"  clearable></el-input>

                                    </el-form-item>
                                    <el-form-item label="Password" prop="password">
                                        <el-input v-model="loginForm.password"  type="password" show-password></el-input>

                                    </el-form-item>
                                    <el-form-item>
                                        <el-button type="success" class="buttonStyle" v-on:click="login">Login</el-button>

                                    </el-form-item>
                                </el-form>

                            </el-tab-pane>
                            <el-tab-pane label="Sign Up">
                                <el-form label-width="100px" style="width:90%;margin-top: 25px;">
                                    <el-form-item label="E-mail">
                                        <el-input></el-input>

                                    </el-form-item>
                                    <el-form-item label="Password">
                                        <el-input></el-input>

                                    </el-form-item>
                                    <el-form-item label="Password">
                                        <el-input></el-input>

                                    </el-form-item>
                                    <el-form-item label="Veri-code">
                                        <el-input></el-input>

                                    </el-form-item>

                                    <el-form-item>
                                        <el-button type="primary" class="buttonStyle">Sign Up</el-button>

                                    </el-form-item>
                                </el-form>

                            </el-tab-pane>

                        </el-tabs>

                    </div>

                    <div v-if="isLoggedIn == true && favouriteCats.length == 0">Add your favourites from "Cats" panel!
                    </div>




                    <el-space direction="vertical" alignment="normal" v-if="isLoggedIn">
                        <div v-for="(cat, index) in favouriteCats" v-bind:key="index"
                            style="display: flex; width:600px;">
                            <el-card class="cardStyle">
                                <img v-if="cat" v-bind:src="cat.url" alt="Cat Image" style="height: 200px;" />

                            </el-card>
                            <el-card style="flex:1" class="cardStyle">

                                <el-button type="primary" class="buttonStyle"
                                    v-on:click="removeFromFavourites(cat)">Unfavorite</el-button>
                                {{ cat.id }}

                            </el-card>
                        </div>

                    </el-space>


                </el-tab-pane>

                <el-tab-pane label="Me" name="me" v-if="isLoggedIn">
                    Wellcome {{ loginForm.email }}!
                    <el-button type="primary" v-if="isLoggedIn" v-on:click="logout"
                        class="buttonStyle">logout</el-button>


                </el-tab-pane>
            </el-tabs>
        </el-main>
    </el-container>

</template>

<script>
import axios from 'axios';


export default {
    name: "Home",
    data() {
        return {
            activeName: "cats",
            mainCats: [],
            animatedCats: [],
            favouriteCats: [],
            isLoggedIn: false,
            loginForm: {
                email: "",
                password: "",
            },
            loginRules: {
                email: [{ validator: this.validateEmail, trigger: "blur" }],
                password: [{ validator: this.validatePassword, trigger: "blur" }]
            },
        }
    },
    methods: {
        requestMainCats: function () {

            axios.get('https://api.thecatapi.com/v1/images/search?limit=3&mime_types=png', {
                headers: {
                    'x-api-key': 'live_QTQoXsscFALX63br8NHnps2gMpgK0qiTiTNot1j6oVNcDDe2fdOzkZYfzcqDA8dK'
                }
            })
                .then(response => {
                    // alert(JSON.stringify(response.data));  // Output the data received from the request
                    this.mainCats = response.data.map((cat) => ({
                        id: cat.id,
                        url: cat.url
                    }))
                })
                .catch(error => {
                    console.error('Error fetching data:', error);  // Handle any errors
                });

        },
        requestAnimatedCats: function () {

            axios.get('https://api.thecatapi.com/v1/images/search?limit=1&mime_types=gif', {
                headers: {
                    'x-api-key': 'live_QTQoXsscFALX63br8NHnps2gMpgK0qiTiTNot1j6oVNcDDe2fdOzkZYfzcqDA8dK'
                }
            })
                .then(response => {
                    // alert(JSON.stringify(response.data));  // Output the data received from the request
                    this.animatedCats = response.data.map((cat) => ({
                        id: cat.id,
                        url: cat.url
                    }))
                })
                .catch(error => {
                    console.error('Error fetching data:', error);  // Handle any errors
                });

        },
        addToFavourites: function (cat) {
            if (this.isLoggedIn == false) {
                alert("You need to login to save your favourites");
                this.activeName="favourites";


            } else {
                this.favouriteCats.push(cat);
                // alert("The cat has been added to your favorites");
            }

        },
        removeFromFavourites: function (cat) {
            var indexOfCat = this.favouriteCats.findIndex(item => item.id == cat.id);
            this.favouriteCats.splice(indexOfCat, 1);
        },
        login: function () {
            this.$refs.loginForm.validate().then(() => {
                // If validation passes
                this.isLoggedIn = true;
                alert('Login successful!'); // Optional message
            }).catch((error) => {
                // If validation fails
                alert('Login failed: ' + error.message); // Optional error handling
                this.activeName="favourites"
            });
        },
        logout: function () {
            this.isLoggedIn = false;
            this.loginForm.email="";
            this.loginForm.password="";
            this.activeName="cats"
        },
        validateEmail: function (rule, value, callback) {
            if (!value) {
                callback(new Error("enter valid email"));
            } else {
                callback();
            }
        },
        validatePassword: function (rule, value, callback) {
            if (!value) {
                callback(new Error("enter valid password"));
                this.activeName="favourite";
            } else {
                callback();
            }
        },


    },
    mounted() {
        // Automatically fetch the cat image when the page loads
        this.requestMainCats();
        this.requestAnimatedCats();

    }

}
</script>

<style>
/* .catsPane{
    background-color: aqua;
    font-size: 40px;

} */



.window {
    background-color: rgba(219, 192, 156, 0.691);
    height: 48vh;
    width: 50vh;
    position: absolute;
    top: 35%;
    left: 50%;
    transform: translate(-50%, -50%);
    
}

.el-button.buttonStyle {
    background-color: rgba(211, 166, 108, 0.691);
    float: right;
    border: none;
    color: rgba(82, 56, 23, 0.691);
    margin-bottom: 10px;  
}

.el-button.buttonStyle:hover {
    background-color: rgba(188, 133, 61, 0.691); /* Active background color */
    color: rgba(0, 0, 0, 0.691);
}

.cardDiv{
    display: flex; width:750px; 
}

.el-card.cardStyle{
    background-color: rgba(220, 196, 166, 0.691);
    border:none;
    margin-left: 10px;
}


</style>