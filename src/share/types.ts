export enum SelectedPage {
    Home = "home",
    Skills = "skills",
    Projects = "projects",
    Testimonials = "testimonials",
    Contact = "contact"
}

export type BenefitType = {
    icon: JSX.Element;
    title: string;
    description: string;
}

export type ClassType = {
    name: string,
    description?: string,
    image: string
}