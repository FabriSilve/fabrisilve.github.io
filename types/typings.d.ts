export type Project = {
    id: number;
    name: string;
    image: string;
    description: string;
    tech: string[];
    link: string;
    featured?: boolean;
}

export type ProjectStore = {
    getAllProjects: Project[];
    getFeaturedProjects: Project[];
    getGraveProjects: Project[];
}

export type Work = {
    id: number;
    name: string;
    position: string;
    from: string;
    to: string;
    link: string;
}

export type WorkStore = {
    getAllWorks: Work[];
}

export type Review = {
    id: number;
    review: string;
    name: string;
    link: string;
    role: string;
    highlighted?: boolean;
}

export type ReviewStore = {
    getAllReviews: Rewiew[];
    getBestReviews: Review[];
}