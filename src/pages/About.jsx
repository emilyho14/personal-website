import { useState } from "react";
import illini from "../../images/illini.png"
import CS_GGIS from "./CS_GGIS";
import Card from "../components/card";

export default function About() {
    const [cards] = useState([
        {
            title: 'Reading',
            title_emoji: '📚📖',
            card_title_back: 'Current Reads: ',
            card_list_back: [
                {
                    name: "Algospeak - Adam Aleksic",
                    url: "https://www.penguinrandomhouse.com/books/776856/algospeak-by-adam-aleksic/"
                },
                {
                    name: "Rethinking Medications - Jerry Avorn",
                    url: "https://www.simonandschuster.com/books/Rethinking-Medications/Jerry-Avorn/9781668052846"
                },
                {
                    name: "The Vegetarian - Han King",
                    url: "https://www.penguinrandomhouse.com/books/250333/the-vegetarian-by-han-kang/"
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
            card_title_back: 'Christie Clinic Illinois Race Weekend',
            card_list_back: [
                {
                    name: "Next Race: April 25, 2026",
                },
                {
                    name: "Distance: 10km"
                },
                {
                    name: "Race Details",
                    url: "https://illinoismarathon.com/"
                },
            ]
        }
    ]);

    return (
    <div>
        <div className="about-info">
            Hello! My name is Emily Ho and I am a current first year Master's student studying
            Computer Science at the in{" "}
            <div className="hover-illini-box">
                University of Illinois at Urbana Champaign! 
                <img src={illini} className="hover-illini" />
            </div>
            {" "}I previously received my Bachelor's in Science 
            in{" "}
            <a href="https://siebelschool.illinois.edu/academics/undergraduate/degree-program-options/cs-x-degree-programs/computer-science-geography">
             Computer Science + Geography & Geographic Information Science (CS + GGIS)
            </a>
            also from the University of Illinois at Urbana Champaign.
        </div>
        <CS_GGIS />
        <div className="about-interests-div">
            <h2> My Hobbies! </h2>
            <div className="cards">
                {cards.map((card, i) => (
                    <Card key={i} card={card} />
                ))}
            </div>
        </div>
    </div>
    );
};