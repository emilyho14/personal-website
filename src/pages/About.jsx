import { useState } from "react";
import CS_GGIS from "./CS_GGIS";
import Card from "../components/card";

export default function About() {
    const [cards] = useState([
        {
            title: 'Reading',
            title_emoji: '📚📖',
            card_title_back: 'Favorite Books: ',
            card_list_back: [
                {
                    name: "Educated by Tara Westover",
                    url: "https://www.goodreads.com/en/book/show/35133922-educated"
                },
                {
                    name: "The Silent Patient by Alex Michaelides",
                    url: "https://www.goodreads.com/en/book/show/40097951-the-silent-patient"
                },
                {
                    name: "Tell Me Three Things by Julie Buxbaum",
                    url: "https://www.goodreads.com/book/show/25893582-tell-me-three-things?from_search=true&from_srp=true&qid=GBueIoh2zs&rank=1"
                }
            ],
        },
        {
            title: 'Cooking',
            title_emoji: '👩🏻‍🍳🍳',
            card_title_back: 'Favorite Recipes:',
            card_list_back:[
                {
                    name: "Phở Gà",
                    url: "https://www.recipetineats.com/vietnamese-chicken-pho-soup-pho-ga/"
                },
                {
                    name: "Green Chicken and Rice Soup",
                    url: "https://wishbonekitchen.com/green-garlic-ginger-chicken-and-rice-soup/"
                },
                {
                    name: "Szechuan Green Beans",
                    url: "https://www.spendwithpennies.com/szechuan-green-beans/"
                },
                {
                    name: "Súp măng cua",
                    url: "https://mmbonappetit.com/sup-mang-cua/"
                }
            ]
        },
        {
            title: 'Running',
            title_emoji: '🏃🏻‍♀️💨',
            card_title_back: 'Run Mag Mile 5k',
            card_list_back: [
                {
                    name: "Next Race: September 12, 2026",
                },
                {
                    name: "Distance: 5km"
                },
                {
                    name: "Race Details",
                    url: "https://runmagmile.com/"
                },
            ]
        }
    ]);

    return (
    <div className="about-page">
        <div className="about-info">
            <p>
              I’m a first-year Master’s student in Computer Science at the University of
              Illinois Urbana-Champaign. I completed my B.S. in Computer Science + Geography
              &amp; Geographic Information Science at the same institution, where my interest in
              computational problem solving and spatial thinking began to grow.
            </p>
            <p>
              My work is shaped by a broader interest in how technology, data, and design can
              help people understand complex systems in a more intuitive and meaningful way.
            </p>
        </div>

        <CS_GGIS />

        <div className="about-interests-div">
            <h2>Beyond the work</h2>
            <div className="cards">
                {cards.map((card, i) => (
                    <Card key={i} card={card} />
                ))}
            </div>
        </div>
    </div>
    );
};