import { useState } from "react";
import Card from "../components/card";

export default function Research() {
    const [cards] = useState([
    {
      title: "Previous Work",
      title_emoji: "✅",
      card_list_back: [
        { name: "Fundamental Prolog rules" },
        { name: "Connect to AWS" },
        { name: "Connect Prolog to frontend" },
        { name: "Basic UI" },
      ],
    },
    {
      title: "Current Work",
      title_emoji: "🛠️",
      card_list_back: [
        { name: "Learn LangGraph"},
        { name: "Allow permanent memory in system"},
      ],
    },
    {
      title: "Next Steps",
      title_emoji: "🚀",
      card_list_back: [
        { name: "Incorporate Model Context Protocol (MCP)" },
        { name: "Use AI to generate rules and validate them" },
      ],
    },
  ]);

    return (
        <div className="research-div">
            <h1 className="research-title"> 
                <a href="https://timan.cs.illinois.edu/eeho2/">
                    HealthAdvisor: An Intelligent Agent for Interpreting Medical Test Results 
                </a>
            </h1>
            <h3 className="research-group-name">
                <a href="https://timan.cs.illinois.edu/ir/"> Research Group: TIMAN at the University of Illinois at Urbana Champaign </a>
            </h3>
            <div className="research-goal">
                The main goal of this project is to leverage AI to make healthcare more accessible by 
                helping users interpret their lab results and take a more proactive role in managing their health.
            </div>

            <div className="cards">
                {cards.map((card, i) => (
                    <Card key={i} card={card} />
                ))}
            </div>
        </div>
    )
};