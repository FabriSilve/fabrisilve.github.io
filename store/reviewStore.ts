import { defineStore } from "pinia";
import { ReviewStore } from "~/types/typings";

export const useReviewStore = defineStore<string, ReviewStore>("reviewStore", () => {
    const reviews = [
        {
            id: 1,
            name: "Diogo Pinheiro",
            role: 'Data Scientist at Fimento',
            review: "Fabrizio warms our hearts, motivates us and, once in a while, makes good pastries. Recommend!",
            link: "https://www.linkedin.com/in/diogomrpinheiro",
        }, {
            id: 5,
            name: 'Yutong Xu',
            role: 'Full Stack Developer at Moank',
            review: "Fabrizio's coding wizardry and problem-solving skills always leave us in awe, but he could involve us more in sharing the workload and pressure. Nevertheless, his cheerful vibes, delightful desserts, and genuine care for the team make every workday a treat. Cheers to Fabrizio! 🍪😊",
            link: "https://www.linkedin.com/in/yutong-xu-03035219b"
        }, {
            id: 2,
            name: "Pandi Cunoti",
            role: "Full Stack Developer at Fimento",
            review: "Food is excellent, the service even better. Incredibly competent chef and the served product is of very high quality (edible, as in food as well as inedible, as in code).",
            link: "https://www.linkedin.com/in/pandicunoti/",
        }, {
            id: 4,
            name: "Mikael Östberg",
            role: "CTO at Rivr Technologies AB",
            review: "Fabrizio's positive attitude gives you an instant trust that your common objective not only will be completed efficiently but will also leave you with a very pleasant experience.",
            link: "https://www.linkedin.com/in/mikaelostberg",
        }, {
            id: 6,
            name: 'Nadja Johansson',
            role: "Associate Product Manager at Fimento",
            review: 'He is always really kind and positive to work with. Funny, and tries to bring light to a dark situation. He is really supporting of this team and tries to make sure you actually understand what you are working on. He wants the entire time to shine, and he is a really good teamplayer (But this was no surprise). What surprised me (and what I have seen him improve) is how he is not afraid to question if there is a decision which he disagrees with, and to say no if there is something he wont have time for.',
            link: 'https://www.linkedin.com/in/nadja-johansson-854a221b7',
        }, {
            id: 3,
            name: "Liss Lord",
            role: "Senior Product Designer at Moank",
            review: "He takes his job seriously and inspires other to find motivation within 🙏",
            link: "https://www.linkedin.com/in/lisslordo",
        }
    ]

    return {
        getAllReviews: reviews.slice(),
    }
})