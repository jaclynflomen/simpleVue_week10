(() => {
    //set up vue instance = vm
    //needs reference to wrapper --- el: '#app'
    //reference message in the app (html)
    const vm = new Vue({
        el: '#app',

        data : {
            message : "Welcome to your first Vue app!",

            targetURL : "http://google.ca",

            vuemessage : "Yay! You can haz vue",

            anchorOff : true,

            deliciousFruit : [
                { name: "apple", flavour: "tasty"},
                { name: "orange", flavour: "sweet"},
                { name: "grape", flavour: "juicy"}
            ],

            hazVue : true
        },


        methods : {
            logFruit(e){
                console.log(e.currentTarget);
            }
        }
    })

})();