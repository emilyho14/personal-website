import { useState } from "react";

export default function Research() {
    return (
        <div className="research-div">
            <h1> 
                <a href="https://timan.cs.illinois.edu/eeho2/">
                    HealthAdvisor: An Intelligent Agent for Interpreting Medical Test Results 
                </a>
            </h1>
            <h3>
                <a href="https://timan.cs.illinois.edu/ir/"> Research Group: TIMAN at the University of Illinois at Urbana Champaign </a>
            </h3>
            <div className="research-goal">
                The main goal of this project is to leverage AI to make healthcare more accessible by 
                helping users interpret their lab results and take a more proactive role in managing their health.
            </div>

            <div className="research-objectives"> 
                <div>
                    <div className="research-objective-title"> Previous Work </div>
                    <ul>
                        <li> Create fundamental Prolog rules </li>
                        <li> Connect AWS box & Run Instance </li>
                        <li> Connect Prolog script to frontend </li>
                        <li> Basic UI to input test results and get output from rule list </li>
                    </ul>
                </div>
                <div>
                     <div className="research-objective-title"> Current Work </div>
                    <ul>
                        <li> Learn about LangGraph </li>
                        <li> Allow permanent memory in system </li>
                    </ul>
                </div>
                <div>
                     <div className="research-objective-title"> Future Work </div>
                    <ul>
                        <li> Incorporate Model Context Protocol (CDP) </li>
                        <li> Use AI to generate rules and validate them </li>
                        <li> Make scalable </li>
                        <li> Trustworthy Machine Learning! </li>
                    </ul>
                </div>
            </div>
        </div>
    )
};