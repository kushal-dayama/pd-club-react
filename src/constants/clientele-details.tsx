import type { Client } from "../interfaces";
import { asset } from "../utils/asset";

export const clients: Client[] = [
    { name: "Bank of America", logo: asset("/img/clienteles/boa.png") },
    { name: "Accenture", logo: asset("/img/clienteles/accenture-logo.png") },
    { name: "Tech Mahindra", logo: asset("/img/clienteles/tech-mahindra.png") },
    { name: "Cognizant", logo: asset("/img/clienteles/cognizant.png") },
    { name: "Finolex Cables Limited", logo: asset("/img/clienteles/finolex.png") },
    { name: "Concentric", logo: asset("/img/clienteles/concentric.png") },
    { name: "Zensar Technologies", logo: asset("/img/clienteles/zensar.png") },
    { name: "The Pride Hotels", logo: asset("/img/clienteles/pride-hotel.png") },
    { name: "Ruby Hall Clinic", logo: asset("/img/clienteles/ruby-hall-clinic.png") },
    { name: "Idea", logo: asset("/img/clienteles/idea.png") },
    { name: "Sun n Sand - Group of Hotels", logo: asset("/img/clienteles/sun-n-sand.png") },
    { name: "Persistent", logo: asset("/img/clienteles/persistent.png") },
    { name: "Wipro", logo: asset("/img/clienteles/wipro.png") },
    { name: "Tata Motors", logo: asset("/img/clienteles/tata-motors.png") },
];
