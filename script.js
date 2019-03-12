let app = new Vue({

    el: '#app',

    data: {
        number: '',
        numberGif: '',
        tagGif: '',
        max: '',
        maxGif: '',
        loading: true,
        loadingGif: true,
        addedName: '',
        addedComment: '',
        addedTime: '',
        searchedGifs: [],
        current: {
            title: '',
            img: '',
            alt: '',
        },
        currentGif: {
            id: '',
            embed_url: '',
            title: '',
        },
        API_KEYS: ["Tk5g47vCSX5AI7x2W6gUh2KbyYagYRaP", "bdjF7HA3kGktaVhpxk7R60H5zm5Ppm9B", "2t29YbUp9CydIv2JaVI0ZZKb3vMLHVyr"],
        keyNum: 0,

    },

    created() {
        this.gifkcd();
    },

    computed: {
        month() {
            var month = new Array;
            if (this.current.month === undefined)
                return '';
            month[0] = "January";
            month[1] = "February";
            month[2] = "March";
            month[3] = "April";
            month[4] = "May";
            month[5] = "June";
            month[6] = "July";
            month[7] = "August";
            month[8] = "September";
            month[9] = "October";
            month[10] = "November";
            month[11] = "December";
            return month[this.current.month - 1];
        },
    },

    watch: {

    },

    methods: {
        async gifkcd() {
            try {
                this.loadingGif = true;
                this.keyNum = this.keyNum+1;
                apiKeyIndex = (this.keyNum) % this.API_KEYS.length;
                tagRequest = '';
                if (this.tagGif != ''){
                    tagRequest = "&tag=" + this.tagGif;
                }
                const response = await axios.get('http://api.giphy.com/v1/gifs/random?api_key=' + this.API_KEYS[apiKeyIndex] + tagRequest);

                console.log(response.data.message);

                this.currentGif = response.data;
                this.searchedGifs.unshift(response.data);
                this.loadingGif = false;
            } catch (error) {
                console.log(error);
                this.gifkcd();
            }
        },


    }
});
