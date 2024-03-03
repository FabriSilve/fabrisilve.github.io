import {defineStore} from "pinia";
import {WorkStore} from "~/types/typings";

export const useWorkStore = defineStore<string, WorkStore>("workStore", () => {
    const works = [
        {
            id: 5,
            name: "Moank AB",
            position: "Tech Leader Developer & CTO",
            from: "05/2023",
            to: "Cur.Day",
            link: "https://moank.se/",
        },
        {
            id: 4,
            name: "Moank AB",
            position: "Tech Leader Developer",
            from: "10/2021",
            to: "05/2023",
            link: "https://moank.se/",
        },
        {
            id: 3,
            name: "Moank AB",
            position: "Full Stack Developer",
            from: "08/2018",
            to: "10/2021",
            link: "https://moank.se/",
        },
        {
            id: 2,
            name: "University of Genoa",
            position: "Bachelor in Computer Science",
            from: "09/2014",
            to: "07/2018",
            link: "https://www.istitutogamma.it/corsi-informatici.php?Corso_TECNICO_INFORMATICO_HARDWARE_E_SOFTWARE__CERTIFICATO_a_Milano&per_corso=corsi_formazione_scheda&num=28&formazione=Corso_TECNICO_INFORMATICO_HARDWARE_E_SOFTWARE__CERTIFICATO_a_Milano",
        },
        {
            id: 1,
            name: "Gamma Institute, Milan",
            position: "ICL-PRO Technical",
            from: "09/2016",
            to: "01/2017",
            link: "https://www.istitutogamma.it/corsi-informatici.php?Corso_TECNICO_INFORMATICO_HARDWARE_E_SOFTWARE__CERTIFICATO_a_Milano&per_corso=corsi_formazione_scheda&num=28&formazione=Corso_TECNICO_INFORMATICO_HARDWARE_E_SOFTWARE__CERTIFICATO_a_Milano",
        }
    ]

    return {
        getAllWorks: works.slice()
    }
})