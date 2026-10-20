export interface CourseModule {
  title: string;
  detail: string;
}

export interface ExtendedCourse {
  title: string;
  subtitle: string;
  duration: string;
  badge: string;
  description: string;
  bestFor: string;
  learningOutcomes: string[];
  modules: CourseModule[];
  practicalOutput: string;
}

export interface TrainingCategory {
  title: string;
  description: string;
  courses: ExtendedCourse[];
}

export const upcomingExpansionCategories: TrainingCategory[] = [
  {
    title: "Recommended Future Course Expansions",
    description: "Tailored to Carita's NGO, charity, fundraising, advocacy and social-impact positioning. These forthcoming programmes are structured to expand your organisational capabilities as new materials are finalized[cite: 1].",
    courses: [
      {
        title: "Fundraising Strategy & Donor Development",
        subtitle: "Advanced strategic fundraising and long-term donor cultivation",
        duration: "Upcoming[cite: 1]",
        badge: "Fundraising Strategy",
        description: "Develop comprehensive, multi-channel fundraising strategies that transition organizations from transactional donations to sustainable, long-term donor pipelines[cite: 1].",
        bestFor: "Senior fundraisers, charity directors, development officers, and nonprofit executives[cite: 1].",
        learningOutcomes: [
          "Design a diversified income generation strategy aligned with organizational mission[cite: 1].",
          "Establish robust donor retention and relationship-management pipelines[cite: 1]."
        ],
        modules: [
          { title: "Module 1: Strategic Alignment", detail: "Aligning fundraising goals with organisational vision and financial models[cite: 1]." },
          { title: "Module 2: Pipeline Development", detail: "Mapping donor journeys from first touchpoint to legacy giving[cite: 1]." },
          { title: "Module 3: Retention & Stewardship", detail: "Creating impact reports and stewardship touchpoints that inspire loyalty[cite: 1]." },
          { title: "Module 4: Evaluation", detail: "Measuring ROI on fundraising campaigns and adjusting strategies[cite: 1]." }
        ],
        practicalOutput: "A 3-year strategic fundraising master plan and donor journey map[cite: 1]."
      },
      {
        title: "Major Gifts & Individual Giving",
        subtitle: "Cultivating high-net-worth donors and individual philanthropy",
        duration: "Upcoming[cite: 1]",
        badge: "Major Gifts",
        description: "Master the art and science of securing major gifts, high-net-worth individual (HNWI) cultivation, and face-to-face solicitation[cite: 1].",
        bestFor: "Major gift officers, charity leaders, trustees, and senior development staff[cite: 1].",
        learningOutcomes: [
          "Identify and qualify major gift prospects using ethical research frameworks[cite: 1].",
          "Conduct confident face-to-face ask meetings and secure transformational gifts[cite: 1]."
        ],
        modules: [
          { title: "Module 1: Prospect Identification", detail: "Researching and qualifying HNWIs and major donor prospects[cite: 1]." },
          { title: "Module 2: Cultivation Strategy", detail: "Building authentic, values-aligned relationships with prospective donors[cite: 1]." },
          { title: "Module 3: The Ask", detail: "Structuring proposals and leading successful solicitation meetings[cite: 1]." },
          { title: "Module 4: Stewardship", detail: "Ensuring long-term engagement and repeat major commitments[cite: 1]." }
        ],
        practicalOutput: "A major gift cultivation pipeline and tailored proposal template[cite: 1]."
      },
      {
        title: "Corporate Partnerships & Sponsorship",
        subtitle: "Building mutually beneficial corporate alliances and cause marketing",
        duration: "Upcoming[cite: 1]",
        badge: "Corporate Partnerships",
        description: "Learn how to pitch, structure, and manage high-value corporate partnerships, sponsorships, and strategic cause-marketing campaigns[cite: 1].",
        bestFor: "Corporate partnership managers, fundraisers, and business development leads[cite: 1].",
        learningOutcomes: [
          "Identify corporate partners whose CSR goals align with your mission[cite: 1].",
          "Structure compelling partnership proposals that offer clear commercial and social value[cite: 1]."
        ],
        modules: [
          { title: "Module 1: CSR Landscape", detail: "Understanding corporate social responsibility drivers and priorities[cite: 1]." },
          { title: "Module 2: Value Proposition Design", detail: "Creating win-win partnership packages and sponsorship tiers[cite: 1]." },
          { title: "Module 3: Pitching & Negotiation", detail: "Engaging corporate decision-makers and closing agreements[cite: 2]." },
          { title: "Module 4: Impact Measurement", detail: "Reporting on social return on investment (SROI) to corporate partners[cite: 1]." }
        ],
        practicalOutput: "A corporate partnership pitch deck and evaluation framework[cite: 1]."
      },
      {
        title: "Digital Fundraising & Donor Engagement",
        subtitle: "Leveraging digital channels, social media, and automation for charity income",
        duration: "Upcoming[cite: 1]",
        badge: "Digital Fundraising",
        description: "Explore cutting-edge digital fundraising tactics, email marketing automation, peer-to-peer campaigns, and online conversion optimization[cite: 1].",
        bestFor: "Digital marketers, communication officers, and modern fundraisers[cite: 1].",
        learningOutcomes: [
          "Build high-converting digital donation funnels and landing pages[cite: 1].",
          "Execute data-driven email marketing and social media fundraising campaigns[cite: 1]."
        ],
        modules: [
          { title: "Module 1: Digital Funnels", detail: "Mapping user acquisition, donation flows, and conversion optimization[cite: 1]." },
          { title: "Module 2: Social & Peer-to-Peer", detail: "Mobilizing supporters to run peer-to-peer social media campaigns[cite: 1]." },
          { title: "Module 3: Email Automation", detail: "Designing automated welcome series and donor retention workflows[cite: 1]." },
          { title: "Module 4: Analytics & Testing", detail: "Using data analytics and A/B testing to maximize digital ROI[cite: 2]." }
        ],
        practicalOutput: "An automated email sequence map and digital campaign brief[cite: 1]."
      },
      {
        title: "Strategic Planning for NGOs & Charities",
        subtitle: "Guiding organisational growth, vision, and mission execution",
        duration: "Upcoming[cite: 1]",
        badge: "NGO Leadership",
        description: "Equip charity leaders with tools to formulate clear long-term strategies, manage stakeholder expectations, and steer operational execution[cite: 1].",
        bestFor: "CEO's, NGO directors, board members, and senior strategy planners[cite: 1].",
        learningOutcomes: [
          "Facilitate inclusive strategic planning sessions with diverse stakeholders[cite: 1].",
          "Translate high-level mission statements into actionable operational targets[cite: 1]."
        ],
        modules: [
          { title: "Module 1: Vision & Context", detail: "Conducting environmental scans, SWOT analysis, and stakeholder reviews[cite: 1]." },
          { title: "Module 2: Strategy Formulation", detail: "Defining core strategic pillars, goals, and organizational boundaries[cite: 1]." },
          { title: "Module 3: Execution Alignment", detail: "Cascading strategic goals down to team and individual KPIs[cite: 1]." },
          { title: "Module 4: Review & Adaptation", detail: "Establishing governance mechanisms to monitor strategic progress[cite: 1]." }
        ],
        practicalOutput: "A comprehensive strategic plan template and KPI dashboard[cite: 1]."
      },
      {
        title: "NGO Management & Organisational Development",
        subtitle: "Operational excellence, culture, and capacity building for charities",
        duration: "Upcoming[cite: 1]",
        badge: "Management",
        description: "Strengthen internal operational systems, staff capacity, organizational culture, and resource management within mission-driven entities[cite: 1].",
        bestFor: "Operations managers, HR leaders, and charity executives[cite: 1].",
        learningOutcomes: [
          "Evaluate and enhance internal organizational structures for maximum impact[cite: 1]."
        ],
        modules: [
          { title: "Module 1: Operational Design", detail: "Optimizing internal workflows and cross-departmental collaboration[cite: 1]." },
          { title: "Module 2: Capacity Building", detail: "Designing staff development and institutional knowledge retention systems[cite: 1]." },
          { title: "Module 3: Culture & Change", detail: "Fostering positive workplace culture through periods of organizational change[cite: 1]." },
          { title: "Module 4: Resource Governance", detail: "Managing assets, infrastructure, and administrative controls efficiently[cite: 1]." }
        ],
        practicalOutput: "An organizational health assessment tool and workflow guide[cite: 1]."
      },
      {
        title: "Board Governance & Trustee Development",
        subtitle: "Empowering charity trustees for effective oversight and leadership",
        duration: "Upcoming[cite: 1]",
        badge: "Governance",
        description: "Provide trustees and board members with deep insights into legal responsibilities, fiduciary duties, strategic oversight, and board performance[cite: 1].",
        bestFor: "Charity trustees, board chairs, company secretaries, and governance leads[cite: 1].",
        learningOutcomes: [
          "Clarify legal duties, liabilities, and governance standards for charity trustees[cite: 1]."
        ],
        modules: [
          { title: "Module 1: Trustee Responsibilities", detail: "Fiduciary duties, legal compliance, and ethical obligations[cite: 1]." },
          { title: "Module 2: Board-Executive Dynamics", detail: "Establishing clear boundaries and collaborative synergy between board and staff[cite: 1]." },
          { title: "Module 3: Risk & Financial Oversight", detail: "Reviewing financial statements, budgets, and organizational risk registers[cite: 1]." },
          { title: "Module 4: Board Effectiveness", detail: "Evaluating board performance and planning transparent succession[cite: 1]." }
        ],
        practicalOutput: "A trustee induction pack and board evaluation checklist[cite: 1]."
      },
      {
        title: "Project Management for NGOs",
        subtitle: "Delivering international development and social projects on time and budget",
        duration: "Upcoming[cite: 1]",
        badge: "Project Management",
        description: "Master project management methodologies tailored specifically to the constraints, stakeholder dynamics, and reporting needs of the NGO sector[cite: 1].",
        bestFor: "Project managers, field coordinators, and program officers[cite: 1].",
        learningOutcomes: [
          "Apply specialized project lifecycles to social development initiatives[cite: 1]."
        ],
        modules: [
          { title: "Module 1: Project Initiation", detail: "Defining scopes, logical frameworks (LogFrames), and stakeholder matrices[cite: 1]." },
          { title: "Module 2: Planning & Budgeting", detail: "Scheduling work breakdown structures and managing grant-funded budgets[cite: 1]." },
          { title: "Module 3: Execution & Control", detail: "Managing field teams, procurement, and mitigating operational risks[cite: 1]." },
          { title: "Module 4: Reporting & Closure", detail: "Drafting donor reports and evaluating project success factors[cite: 1]." }
        ],
        practicalOutput: "A complete LogFrame template and project execution plan[cite: 1]."
      },
      {
        title: "Monitoring, Evaluation & Learning (MEL)",
        subtitle: "Measuring social impact, data collection, and adaptive learning",
        duration: "Upcoming[cite: 1]",
        badge: "MEL",
        description: "Design robust MEL frameworks to track qualitative and quantitative project outcomes, prove social impact, and drive continuous learning[cite: 1].",
        bestFor: "MEL officers, program directors, evaluators, and grant managers[cite: 1].",
        learningOutcomes: [
          "Develop comprehensive MEL frameworks and indicator tracking tables[cite: 1]."
        ],
        modules: [
          { title: "Module 1: MEL Frameworks", detail: "Designing theories of change and impact pathways[cite: 1]." },
          { title: "Module 2: Data Collection", detail: "Setting up quantitative surveys, qualitative interviews, and feedback loops[cite: 1]." },
          { title: "Module 3: Analysis & Evaluation", detail: "Analyzing project data to evaluate outcomes against baseline indicators[cite: 1]." },
          { title: "Module 4: Adaptive Learning", detail: "Translating evaluation findings into actionable programmatic improvements[cite: 1]." }
        ],
        practicalOutput: "An indicator tracking table and MEL evaluation report template[cite: 1]."
      },
      {
        title: "Financial Management & Budgeting",
        subtitle: "Financial control, grant accounting, and sustainability for nonprofits",
        duration: "Upcoming[cite: 1]",
        badge: "Financial Management",
        description: "Strengthen financial transparency, restrict/unrestricted fund accounting, cash flow forecasting, and multi-currency grant budgeting[cite: 1].",
        bestFor: "Finance managers, charity treasurers, and non-finance project managers[cite: 1].",
        learningOutcomes: [
          "Manage restricted vs. unrestricted funding streams transparently[cite: 1]."
        ],
        modules: [
          { title: "Module 1: Nonprofit Accounting", detail: "Fund accounting principles and compliance standards for charities[cite: 1]." },
          { title: "Module 2: Grant Budgeting", detail: "Building accurate donor budgets with direct and indirect cost allocations[cite: 1]." },
          { title: "Module 3: Cash Flow & Controls", detail: "Forecasting liquidity and maintaining strict internal financial controls[cite: 1]." },
          { title: "Module 4: Audit Readiness", detail: "Preparing documentation and statements for annual financial audits[cite: 1]." }
        ],
        practicalOutput: "A grant budgeting template and financial control checklist[cite: 1]."
      },
      {
        title: "Professional Communication & Report Writing",
        subtitle: "Crafting persuasive reports, briefs, and stakeholder communications",
        duration: "Upcoming[cite: 1]",
        badge: "Communication",
        description: "Elevate your professional writing skills to produce compelling donor reports, policy briefs, executive summaries, and clear institutional correspondence[cite: 1].",
        bestFor: "Program officers, communications staff, and report writers[cite: 1].",
        learningOutcomes: [
          "Structure clear, concise, and persuasive institutional documents[cite: 1]."
        ],
        modules: [
          { title: "Module 1: Writing Principles", detail: "Mastering clarity, tone, structure, and plain language in reporting[cite: 1]." },
          { title: "Module 2: Donor Reporting", detail: "Writing impact-focused narrative reports that satisfy institutional donors[cite: 1]." },
          { title: "Module 3: Policy Briefs", detail: "Synthesizing research data into concise, persuasive policy briefs[cite: 1]." },
          { title: "Module 4: Review & Editing", detail: "Proofreading techniques and collaborative document review workflows[cite: 1]." }
        ],
        practicalOutput: "A professional report template and writing style guide[cite: 1]."
      },
      {
        title: "AI & Digital Tools for NGOs & Charities",
        subtitle: "Unlocking productivity, automation, and ethical AI in the social sector",
        duration: "Upcoming[cite: 1]",
        badge: "AI & Tech",
        description: "Discover how charities can securely and ethically leverage artificial intelligence tools for workflow automation, grant drafting, and data analysis[cite: 1].",
        bestFor: "NGO leaders, tech coordinators, and administrative professionals[cite: 1].",
        learningOutcomes: [
          "Implement ethical AI usage guidelines within nonprofit operations[cite: 1]."
        ],
        modules: [
          { title: "Module 1: AI Landscape", detail: "Overview of generative AI capabilities, data privacy, and ethical considerations[cite: 1]." },
          { title: "Module 2: Workflow Automation", detail: "Automating routine administrative tasks and donor communications[cite: 1]." },
          { title: "Module 3: Content & Grant Assistance", detail: "Using AI responsibly to accelerate grant drafting and report outlines[cite: 1]." },
          { title: "Module 4: Implementation Strategy", detail: "Creating an organization-wide AI adoption and governance policy[cite: 1]." }
        ],
        practicalOutput: "An organizational AI usage policy and workflow automation blueprint[cite: 1]."
      }
    ]
  }
];