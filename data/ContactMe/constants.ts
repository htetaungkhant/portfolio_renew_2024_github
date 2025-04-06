import {
    faLine,
    faSkype,
    faWhatsappSquare,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

export const contactLinks = {
    title: "Contact Links",
    links: [
        {
            type: "Email",
            description: "job.htetaungkhant@gmail.com",
            icon: faEnvelope,
            link: "mailto:job.htetaungkhant@gmail.com",
        },
        {
            type: "WhatsApp",
            description: "+959798922327",
            icon: faWhatsappSquare,
            link: "https://wa.me/959798922327",
        },
        {
            type: "Skype",
            description: "live:chitkogyi19950",
            icon: faSkype,
            link: "skype:live:chitkogyi19950?chat",
        },
        {
            type: "Line",
            description: "htetaungkhant97",
            icon: faLine,
            link: "https://line.me/ti/p/~htetaungkhant97",
        },
    ],
};