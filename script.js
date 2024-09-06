const { createApp } = Vue

createApp({
    data() {
        return {
            activeIndex: 0,
            slides: [
                {
                    Image: 'img/01.webp',
                    title: 'Marvel/s Miles Morales',
                    text: 'Experience trhe rise of Miles Morales as the new hero masters incredible, explosive new powers to became his own Spider-man',
                },
                {
                    Image: 'img/02.webp',
                    title: 'Ratchet & Clank',
                    text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality',
                },
                {
                    Image: 'img/03.webp',
                    title: 'Fortnite',
                    text: 'Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos',
                },
                {
                    Image: 'img/04.webp',
                    title: 'Stray',
                    text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
                },
                {
                    Image: 'img/05.webp',
                    title: "Marvel's Avengers",
                    text: "Marvel's Avenegers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay",
                },
            ],
        }
    },

    methods: {

        previousSlide() {
            if (this.activeIndex <= 0) {
                this.activeIndex = this.slides.length - 1;
            } else {
                this.activeIndex--;
            }
        },

        nextSlide() {
            if (this.activeIndex >= this.slides.length - 1) {
                this.activeIndex = this.slides.length - 1;
            } else {
                this.activeIndex++;
            }
        },
    }
}).mount('#app')