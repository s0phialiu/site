import { MdSecurity } from "react-icons/md"
import Accomplishment from "../components/Accomplishment"
import { FaApple, FaMicrosoft, FaTractor, FaUniversity } from "react-icons/fa"

export function Resume() {
    return (
    <div className="">
        <p className="">
            Below you can find my professional experience and accomplishments.
        </p>
        <section>
            <h2>
                Professional Experience
            </h2>
            <div className="grid gap-4 mb-5">
                <Accomplishment 
                    title="Security Software Engineer Intern - Microsoft"
                    date="May 2025 - August 2025"
                    icon={FaMicrosoft}
                    description={[
                        "Developed full stack VS Code extension powered by LLMs to interpret complex static analysis results, enabling OS developers to efficiently resolve code issues with natural language explanations and interactive visualizations.",
                        "Engineered agentic AI workflow exploring Azure AI Foundry, MCP servers, and RAG vectorization to convert internal static analysis documentation into context-aware, actionable insights for developers.",
                        "Incorporated feedback from early adopters to reduce cross-team friction and accelerate issue resolution, preparing the extension for broader organizational adoption.",
                    ]}
                />
                <Accomplishment
                    title="Security Software Engineer Intern - Microsoft"
                    date="May 2024 - August 2024"
                    icon={FaMicrosoft}
                    description={[
                        "Led design of large-scale benchmarking suite to evaluate the performance of AutoFuzz, an initiative leveraging LLMs to generate libFuzzer harnesses for Windows user-mode components.",
                        "Built first evaluation program for AutoFuzz fuzzers, cutting down manual review overhead from hours to minutes and enabling continuous regression testing to improve fuzzer code coverage.",
                    ]}
                />
                <Accomplishment
                    title="Security Software Engineer Intern - John Deere"
                    date="May 2023 - August 2023"
                    icon={FaTractor}
                    description={[
                        "Deployed tooling in Python to build cyber risk assessment/report generation pipeline using AWS Lambda to automate fetching risk data from S3 buckets, achieving a ~90% reduction in manual analyst processing time.",
                        "Integrated OneTrust SDK to validate scores for 3,300+ vendor security assessments and ensure compliance."
                    ]}
                />
            </div>
            <h2>
                Extracurriculars
            </h2>
            <div className="grid gap-4 mb-5">
                <Accomplishment 
                    title="Security Research - UIUC"
                    date="Mar 2024 - Present"
                    icon={FaUniversity}
                    description={[
                        "Co-authored USENIX Security ’25 paper analyzing SMTP smuggling attacks, their ability to bypass email authentication protocols, and how shared infrastructures amplify spoofing; advised by Prof. Gang Wang",
                    ]}
                    link="https://www.usenix.org/conference/usenixsecurity25/presentation/wang-chuhan" 
                />
                <Accomplishment
                    title="President of Women in CyberSecurity UIUC"
                    date="Apr 2023 - Jul 2024"
                    icon={MdSecurity}
                    description={[
                        "Spearheaded 5 Capture the Flag challenges and weekly technical workshops on topics including fintech security, secure coding, and threat modeling, empowering 50+ members to explore their passion for cyber security."
                    ]}
                />
                <Accomplishment
                    title="iOS Lead - HackIllinois"
                    date="Oct 2022 - May 2024"
                    icon={FaApple}
                    description={[
                        "Led 3 developers to build iOS app in Swift, serving 1000+ attendees at HackIllinois, UIUC’s flagship hackathon.",
                        "Enhanced hackathon experience by adding interactive schedule, leader board, rewards system, and animations.",
                        "Improved UX by optimizing caching with CoreData, modernizing frontend in SwiftUI, and adding OAuth 2.0.",
                    ]}
                    link="https://apps.apple.com/us/app/hackillinois/id1451755268"
                />
            </div>
        </section>
    </div>
    )
}

export default Resume