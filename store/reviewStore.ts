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
        },
        {
            id: 3,
            name: "Pandi Cunoti",
            role: "Full Stack Developer at Fimento",
            review: "Food is excellent, the service even better. Incredibly competent chef and the served product is of very high quality (edible, as in food as well as inedible, as in code).",
            link: "https://www.linkedin.com/in/pandicunoti/",
            highlighted: true,
        }, {
            id: 4,
            name: "Mikael Östberg",
            role: "CTO at Rivr Technologies AB",
            review: "Fabrizio's positive attitude gives you an instant trust that your common objective not only will be completed efficiently but will also leave you with a very pleasant experience.",
            link: "https://www.linkedin.com/in/mikaelostberg",
            highlighted: true,
        }, {
            id: 5,
            name: 'Nadja Johansson',
            role: "Associate Product Manager at Fimento",
            review: 'He is always really kind and positive to work with. Funny, and tries to bring light to a dark situation. He is really supporting of this team and tries to make sure you actually understand what you are working on. He wants the entire time to shine, and he is a really good teamplayer (But this was no surprise). What surprised me (and what I have seen him improve) is how he is not afraid to question if there is a decision which he disagrees with, and to say no if there is something he wont have time for.',
            link: 'https://www.linkedin.com/in/nadja-johansson-854a221b7',
            highlighted: true,
        }, {
            id: 6,
            name: "Liss Lord",
            role: "Senior Product Designer at Moank",
            review: "He takes his job seriously and inspires other to find motivation within 🙏",
            link: "https://www.linkedin.com/in/lisslordo",
        },
        {
            id: 8,
            name: "Erik Hedenstierna",
            role: "Director of Lending at Savelend",
            review: "Very often has a smile on his face and he also contributes with good solutions if we are facing an issue.",
            link: "https://www.linkedin.com/in/erikhedenstierna/",
        },
        {
            id: 9,
            name: "David Vergnault",
            role: "Tech lead at Fimento",
            review: "I think you are great at a lot of things. Guiding people, figure solutions out, social behavior, adapting to a new task or role, communicating to other parties, etc.",
            link: "https://www.linkedin.com/in/david-vergnault/",
        },
        {
            id: 2,
            name: 'Yutong Xu',
            role: 'Full Stack Developer at Moank',
            review: "Fabrizio's coding wizardry and problem-solving skills always leave us in awe, but he could involve us more in sharing the workload and pressure. Nevertheless, his cheerful vibes, delightful desserts, and genuine care for the team make every workday a treat. Cheers to Fabrizio! 🍪😊",
            link: "https://www.linkedin.com/in/yutong-xu-03035219b",
            highlighted: true,
        },
        {
            id: 10,
            name: "Elin Emfeldt",
            role: "Financial Controller at MFG",
            review: "Very accommodating and supportive. Demonstrates ownership and responsibility. Oriented towards problem-solving. Provides prompt assistance",
            link: "https://www.linkedin.com/in/elin-emfeldt-5a182997/"
        },
        {
            id: 11,
            name: "Carl Ringqvist",
            role: "Doktorand på KTH Royal Institute of Technology",
            review: "Ability to work under pressure, and to be very honest and upright when it comes to moral opinions.",
            link: "https://www.linkedin.com/in/carl-ringqvist-69a2a789/"
        },
        {
            id: 12,
            name: "Gustav Ek",
            role: "Business Development",
            review: "Always positive energy and a real team player. Fabrizio is also a great developer with excellent problem solving skills. He is curious to learn new things and not afraid to challenge himself or the team to drive innovation. Not to mention Fabrizio’s contribution to the ”fika” every week with home made bakerys.",
            link: "https://www.linkedin.com/in/gustavek/"
        },
        {
            id: 13,
            name: "Sonny Valentin Sas",
            role: "Credit specialist & Sales Executive at MFG",
            review: "Always happy, Helpful and spreading joy in the work environment.",
            link: "https://www.linkedin.com/in/sonny-valentin-sas-92929259/"
        },
        {
            id: 7,
            name: "Max Flytström",
            role: "Senior Business Officer at Fimento",
            review: "Solution oriented, factual, professional and understand the backbone of this company.",
            link: "https://www.linkedin.com/in/max-flytstrom/"
        },
        /*
        {
            id: 0,
            name: "",
            role: "",
            review: "",
            link: ""
        }
        */
    ]

    return {
        getBestReviews: reviews.slice().filter((review) => review.highlighted),
        getAllReviews: reviews.slice(),
    }
})