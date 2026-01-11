import { useState } from "react";

export default function Research() {
    const [objectiveCards] = useState([
    {
      title: "Previous Work",
      title_emoji: "✅",
      card_list_back: [
        { name: "Create fundamental Prolog rules" },
        { name: "Connect AWS box & Run Instance" },
        { name: "Connect Prolog script to frontend" },
        { name: "Basic UI to input test results and get output from rule list" },
      ],
    },
    {
      title: "Current Work",
      title_emoji: "🛠️",
      card_list_back: [
        { name: "Learn about LangGraph" },
        { name: "Allow permanent memory in system" },
      ],
    },
    {
      title: "Future Work",
      title_emoji: "🚀",
      card_list_back: [
        { name: "Incorporate Model Context Protocol (MCP)" },
        { name: "Use AI to generate rules and validate them" },
        { name: "Make scalable" },
        { name: "Trustworthy Machine Learning" },
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
                {objectiveCards.map((card, i) => (
                    <div key={i} className="card">
                        <div className="card-inner">
                        <div className="card-front">
                            <h2>{card.title}</h2>
                            <h1 className="card-emoji">{card.title_emoji}</h1>
                        </div>

                        <div className="card-back">
                            {card.card_text_back && <p>{card.card_text_back}</p>}
                            {card.card_list_back && (
                            <ul>
                                {card.card_list_back.map((r, idx) => (
                                <li key={idx}>
                                    {r.url ? (
                                    <a
                                        href={r.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        {r.name}
                                    </a>
                                    ) : (
                                    r.name
                                    )}
                                </li>
                                ))}
                            </ul>
                            )}
                        </div>
                        </div>
                    </div>
                    ))}
            </div>
        </div>
    )
};