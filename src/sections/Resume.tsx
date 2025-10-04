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
                        "Developed LLM-powered, React-based VS Code extension to interpret 30+ static analysis categories, enabling feature developers to accelerate code vulnerability resolution with natural language explanations.",
                        "Reduced cross-team friction and maximized fix rate by engineering agentic AI workflow using Azure AI Foundry, MCP servers, and RAG vectorization to convert static analysis documentation into actionable insights for users.",
                        "Proactively onboarded and incorporated feedback from 5+ early users, ensuring reliability and scalability for production.",
                    ]}
                />
                <Accomplishment
                    title="Security Software Engineer Intern - Microsoft"
                    date="May 2024 - August 2024"
                    icon={FaMicrosoft}
                    description={[
                        "Designed large-scale benchmarking suite to automate performance evaluation of AutoFuzz, an initiative leveraging LLMs to generate libFuzzer harnesses for Windows user-mode components.",
                        "Reduced manual evaluation time by 80%+, enabling continuous AutoFuzz debugging and regression testing.",
                        "Boosted code coverage by ~2x by communicating evaluation insights to refine AutoFuzz LLM prompt generation strategies.",
                    ]}
                />
                <Accomplishment
                    title="Security Software Engineer Intern - John Deere"
                    date="May 2023 - August 2023"
                    icon={FaTractor}
                    description={[
                        "Deployed tooling in Python to build cyber risk assessment/report generation pipeline using AWS Lambda to automate fetching telemetry from S3 buckets, achieving ~90% reduction in manual data analysis time.",
                        "Integrated OneTrust SDK to validate risk from 3,300+ vendor security assessments and ensure security compliance."
                    ]}
                />
            </div>
            <h2>
                Leadership and Research
            </h2>
            <div className="grid gap-4 mb-5">
                <Accomplishment 
                    title="Security Research - UIUC"
                    date="Mar 2024 - Present"
                    icon={FaUniversity}
                    description={[
                        "Co-authored USENIX Security ’25 paper analyzing SMTP smuggling attacks, their ability to bypass email authentication protocols, and how shared infrastructures amplify spoofing; advised by Prof. Gang Wang",
                        "Currently conducting research within the AI/LLM space!"
                    ]}
                    link="https://www.usenix.org/conference/usenixsecurity25/presentation/wang-chuhan" 
                />
                <Accomplishment
                    title="President of Women in CyberSecurity UIUC"
                    date="Apr 2023 - Jul 2024"
                    icon={MdSecurity}
                    description={[
                        "Empowered 50+ members to explore security by spearheading 5 Capture the Flag challenges and weekly hands-on technical workshops on topics including secure coding practices, iOS security, and AI-driven security."
                    ]}
                />
                <Accomplishment
                    title="iOS Lead - HackIllinois"
                    date="Oct 2022 - May 2024"
                    icon={FaApple}
                    description={[
                        "Led development and App Store release of official HackIllinois iOS app, enabling 1000+ annual hackathon attendees to check in, navigate event logistics, connect with sponsors, and redeem prizes through mini-games.",
                        "Unified cross-platform experience and delivered first-ever fully optimized iPad release through collaboration with Android and Design teams.",
                        "Enhanced UX by refining CoreData management, modernizing frontend by rewriting UIKit ViewControllers with SwiftUI, and integrating OAuth 2.0 to improve user security.",
                        "Implemented redesigned REST APIs to interface with new MongoDB Atlas backend, enabling new features such as push notifications and prize redemption.",
                        "Ensured long-term testability/code quality by mentoring team on best Git, code review, and CI/CD practices.",
                    ]}

                    link="https://apps.apple.com/us/app/hackillinois/id1451755268"
                />
            </div>
        </section>
    </div>
    )
}

export default Resume