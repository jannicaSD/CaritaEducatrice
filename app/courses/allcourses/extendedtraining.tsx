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

export const extendedTrainingCategories: TrainingCategory[] = [
  {
    title: "Business & Management",
    description: "Professional capability across governance, people, leadership, communication, customer experience, strategy and organisational performance[cite: 2].",
    courses: [
      {
        title: "Audit, Compliance & Governance",
        subtitle: "Professional development in audit, compliance & governance",
        duration: "To be confirmed[cite: 2]",
        badge: "Governance",
        description: "A practical introduction to assurance, internal controls, compliance obligations and accountable decision-making[cite: 2].",
        bestFor: "Internal auditors, compliance staff, risk officers, managers, board members and professionals who contribute to assurance activities[cite: 2].",
        learningOutcomes: [
          "Explain the main concepts, terminology and professional context relevant to audit, compliance & governance[cite: 2].",
          "Identify appropriate frameworks, standards, responsibilities and risks related to compliance obligations, internal controls and governance responsibilities[cite: 2].",
          "Apply practical tools or structured methods to improve evidence collection, testing, documentation and reporting in a realistic scenario[cite: 2].",
          "Prepare an evidence-informed action plan addressing findings, corrective action, follow-up and continuous improvement[cite: 2]."
        ],
        modules: [
          { title: "Module 1: Core concepts", detail: "Audit purpose, assurance scope and risk-based planning, including common challenges and stakeholder responsibilities[cite: 2]." },
          { title: "Module 2: Governance and good practice", detail: "Compliance obligations, internal controls and governance responsibilities[cite: 2]." },
          { title: "Module 3: Applied methods", detail: "Evidence collection, testing, documentation and reporting[cite: 2]." },
          { title: "Module 4: Implementation and review", detail: "Findings, corrective action, follow-up and continuous improvement[cite: 2]." }
        ],
        practicalOutput: "A draft risk-control matrix and audit/action tracker[cite: 2]."
      },
      {
        title: "Business Process Management Training",
        subtitle: "Professional development in business process management",
        duration: "To be confirmed[cite: 2]",
        badge: "Operations",
        description: "Learn to map, analyse and improve business processes so that work is more consistent, measurable and aligned to organisational goals[cite: 2].",
        bestFor: "Operations managers, process owners, team leaders, analysts and staff responsible for service delivery or operational improvement[cite: 2].",
        learningOutcomes: [
          "Explain the main concepts, terminology and professional context relevant to business process management training[cite: 2].",
          "Identify appropriate frameworks, standards, responsibilities and risks related to process mapping, hand-offs, bottlenecks and root causes[cite: 2].",
          "Apply practical tools or structured methods to improve redesign, standardisation, automation opportunities and controls[cite: 2]."
        ],
        modules: [
          { title: "Module 1: Core concepts", detail: "Process architecture, customer journeys and process ownership[cite: 2]." },
          { title: "Module 2: Governance and good practice", detail: "Process mapping, hand-offs, bottlenecks and root causes[cite: 2]." },
          { title: "Module 3: Applied methods", detail: "Redesign, standardisation, automation opportunities and controls[cite: 2]." },
          { title: "Module 4: Implementation and review", detail: "KPIs, process governance and continuous improvement[cite: 2]." }
        ],
        practicalOutput: "A current-state process map and prioritised improvement plan[cite: 2]."
      },
      {
        title: "Communication and Writing Skills",
        subtitle: "Professional development in communication and writing",
        duration: "To be confirmed[cite: 2]",
        badge: "Professional Skills",
        description: "Strengthen professional writing, listening, speaking and message structuring across routine and high-stakes workplace situations[cite: 2].",
        bestFor: "Early- and mid-career professionals, administrators, team leaders, project staff and people who prepare workplace documents[cite: 2].",
        learningOutcomes: [
          "Explain core communication concepts, terminology and professional context[cite: 2].",
          "Identify appropriate standards and risks related to emails, briefs, minutes, reports and structured proposals[cite: 2]."
        ],
        modules: [
          { title: "Module 1: Core concepts", detail: "Purpose, audience, tone and plain-language principles[cite: 2]." },
          { title: "Module 2: Governance and good practice", detail: "Emails, briefs, minutes, reports and structured proposals[cite: 2]." },
          { title: "Module 3: Applied methods", detail: "Active listening, questioning, feedback and difficult conversations[cite: 2]." },
          { title: "Module 4: Implementation and review", detail: "Editing, proofreading, presentation and communication planning[cite: 2]." }
        ],
        practicalOutput: "A polished email, short report and personal communication checklist[cite: 2]."
      },
      {
        title: "Corporate Communication Training",
        subtitle: "Professional development in corporate communication",
        duration: "To be confirmed[cite: 2]",
        badge: "Communication",
        description: "Explore how organisations plan consistent internal and external communication across leaders, employees, customers, partners and other stakeholders[cite: 2].",
        bestFor: "Corporate communication teams, HR and leadership professionals, spokespersons, programme managers and stakeholder-facing staff[cite: 2].",
        learningOutcomes: [
          "Explain corporate communication strategy, audience targeting, and message architecture[cite: 2]."
        ],
        modules: [
          { title: "Module 1: Core concepts", detail: "Communication strategy, audiences and message architecture[cite: 2]." },
          { title: "Module 2: Governance and good practice", detail: "Internal communication, leadership messages and employee engagement[cite: 2]." },
          { title: "Module 3: Applied methods", detail: "External channels, media coordination and reputation management[cite: 2]." },
          { title: "Module 4: Implementation and review", detail: "Measurement, feedback loops and communication planning[cite: 2]." }
        ],
        practicalOutput: "A stakeholder message map and communication calendar[cite: 2]."
      },
      {
        title: "Corporate Governance Training",
        subtitle: "Professional development in corporate governance",
        duration: "To be confirmed[cite: 2]",
        badge: "Governance",
        description: "Build an applied understanding of board oversight, accountability, ethical decision-making and performance[cite: 2].",
        bestFor: "Board and committee members, executives, company secretaries, senior managers and governance professionals[cite: 2].",
        learningOutcomes: [
          "Explain governance principles, structures and accountability[cite: 2]."
        ],
        modules: [
          { title: "Module 1: Core concepts", detail: "Governance principles, structures and accountability[cite: 2]." },
          { title: "Module 2: Governance and good practice", detail: "Board roles, committee oversight and decision records[cite: 2]." },
          { title: "Module 3: Applied methods", detail: "Ethics, conflicts of interest, risk and internal control[cite: 2]." },
          { title: "Module 4: Implementation and review", detail: "Performance review, disclosure and governance improvement[cite: 2]." }
        ],
        practicalOutput: "A governance responsibility map and board-effectiveness action list[cite: 2]."
      },
      {
        title: "Customer Service",
        subtitle: "Professional development in customer service",
        duration: "To be confirmed[cite: 2]",
        badge: "Service Excellence",
        description: "Develop reliable service behaviours that improve customer experience, resolve issues fairly and create consistent service standards[cite: 2].",
        bestFor: "Customer-facing teams, contact-centre staff, service managers, reception teams and supervisors[cite: 2].",
        learningOutcomes: [
          "Explain customer needs, service standards and journey mapping[cite: 2]."
        ],
        modules: [
          { title: "Module 1: Core concepts", detail: "Customer needs, service standards and customer journeys[cite: 2]." },
          { title: "Module 2: Governance and good practice", detail: "Professional communication, empathy and expectation setting[cite: 2]." },
          { title: "Module 3: Applied methods", detail: "Complaint handling, service recovery and escalation[cite: 2]." },
          { title: "Module 4: Implementation and review", detail: "Quality monitoring, feedback analysis and service improvement[cite: 2]." }
        ],
        practicalOutput: "A service recovery script and team service-standard checklist[cite: 2]."
      },
      {
        title: "Executive Development Training",
        subtitle: "Professional development for senior leaders",
        duration: "To be confirmed[cite: 2]",
        badge: "Leadership",
        description: "Support senior professionals in strategic leadership, decision-making, organisational alignment and communication under complexity[cite: 2].",
        bestFor: "Senior managers, directors, department heads, aspiring executives and leadership teams[cite: 2].",
        learningOutcomes: [
          "Explain executive roles, strategic context and leadership judgement[cite: 2]."
        ],
        modules: [
          { title: "Module 1: Core concepts", detail: "Executive role, strategic context and leadership judgement[cite: 2]." },
          { title: "Module 2: Governance and good practice", detail: "Decision-making under uncertainty and prioritisation[cite: 2]." },
          { title: "Module 3: Applied methods", detail: "Leading change, aligning teams and communicating direction[cite: 2]." },
          { title: "Module 4: Implementation and review", detail: "Governance, performance review and a personal development plan[cite: 2]." }
        ],
        practicalOutput: "A 90-day executive leadership and execution plan[cite: 2]."
      },
      {
        title: "Human Resource Management",
        subtitle: "Professional development in human resource management",
        duration: "To be confirmed[cite: 2]",
        badge: "HR & People",
        description: "Cover the employee lifecycle from workforce planning and recruitment through performance, development and employee relations[cite: 2].",
        bestFor: "HR officers and managers, line managers, people partners, business owners and supervisors[cite: 2].",
        learningOutcomes: [
          "Explain workforce planning, job design and recruitment workflows[cite: 2]."
        ],
        modules: [
          { title: "Module 1: Core concepts", detail: "Workforce planning, job design and recruitment[cite: 2]." },
          { title: "Module 2: Governance and good practice", detail: "Onboarding, performance management and employee development[cite: 2]." },
          { title: "Module 3: Applied methods", detail: "Employee relations, documentation and fair workplace practice[cite: 2]." },
          { title: "Module 4: Implementation and review", detail: "Retention, HR metrics, policy review and workforce planning[cite: 2]." }
        ],
        practicalOutput: "A sample employee-lifecycle map and HR improvement checklist[cite: 2]."
      },
      {
        title: "Leadership and Management",
        subtitle: "Professional development in leadership and management",
        duration: "To be confirmed[cite: 2]",
        badge: "Leadership",
        description: "Build practical skills for setting direction, motivating teams, delegating work and managing performance[cite: 2].",
        bestFor: "New and experienced managers, supervisors, project leads and professionals moving into leadership[cite: 2].",
        learningOutcomes: [
          "Explain leadership approaches, self-awareness and team contexts[cite: 2]."
        ],
        modules: [
          { title: "Module 1: Core concepts", detail: "Leadership approaches, self-awareness and team context[cite: 2]." },
          { title: "Module 2: Governance and good practice", detail: "Goal setting, delegation and performance expectations[cite: 2]." },
          { title: "Module 3: Applied methods", detail: "Coaching, feedback, conflict and team motivation[cite: 2]." },
          { title: "Module 4: Implementation and review", detail: "Change leadership, accountability and team action planning[cite: 2]." }
        ],
        practicalOutput: "A team leadership plan with goals, check-ins and feedback routines[cite: 2]."
      },
      {
        title: "Learning and Development",
        subtitle: "Professional development in L&D",
        duration: "To be confirmed[cite: 2]",
        badge: "Training",
        description: "Help organisations identify capability gaps and design learning that supports business needs and measurable performance[cite: 2].",
        bestFor: "L&D professionals, trainers, HR teams, subject-matter experts and managers responsible for staff development[cite: 2].",
        learningOutcomes: [
          "Explain learning needs analysis and competency mapping[cite: 2]."
        ],
        modules: [
          { title: "Module 1: Core concepts", detail: "Learning needs analysis and competency mapping[cite: 2]." },
          { title: "Module 2: Governance and good practice", detail: "Learning objectives, curriculum design and learning materials[cite: 2]." },
          { title: "Module 3: Applied methods", detail: "Facilitation, blended delivery and learner engagement[cite: 2]." },
          { title: "Module 4: Implementation and review", detail: "Assessment, evaluation, transfer to work and improvement[cite: 2]." }
        ],
        practicalOutput: "A short training design brief with outcomes and evaluation measures[cite: 2]."
      },
      {
        title: "Office Administration",
        subtitle: "Professional development in office administration",
        duration: "To be confirmed[cite: 2]",
        badge: "Operations",
        description: "Improve day-to-day administrative operations through dependable records, scheduling, correspondence, coordination and service standards[cite: 2].",
        bestFor: "Administrative officers, executive assistants, office managers, coordinators and support staff[cite: 2].",
        learningOutcomes: [
          "Explain office workflows, prioritisation and professional service[cite: 2]."
        ],
        modules: [
          { title: "Module 1: Core concepts", detail: "Office workflows, prioritisation and professional service[cite: 2]." },
          { title: "Module 2: Governance and good practice", detail: "Records, document control, correspondence and confidentiality[cite: 2]." },
          { title: "Module 3: Applied methods", detail: "Meetings, calendars, travel and resource coordination[cite: 2]." },
          { title: "Module 4: Implementation and review", detail: "Digital tools, quality checks and administrative improvement[cite: 2]." }
        ],
        practicalOutput: "A practical office workflow and records-control checklist[cite: 2]."
      },
      {
        title: "Personal & Professional Development",
        subtitle: "Professional development in personal effectiveness",
        duration: "To be confirmed[cite: 2]",
        badge: "Growth",
        description: "Develop self-management, professional confidence, collaboration and career-planning skills[cite: 2].",
        bestFor: "Employees at all levels, graduates, team leaders and professionals planning career progression[cite: 2].",
        learningOutcomes: [
          "Explain self-awareness, personal values, strengths and development needs[cite: 2]."
        ],
        modules: [
          { title: "Module 1: Core concepts", detail: "Self-awareness, values, strengths and development needs[cite: 2]." },
          { title: "Module 2: Governance and good practice", detail: "Time management, prioritisation and personal productivity[cite: 2]." },
          { title: "Module 3: Applied methods", detail: "Professional behaviour, collaboration and workplace resilience[cite: 2]." },
          { title: "Module 4: Implementation and review", detail: "Career goals, networking, feedback and ongoing development[cite: 2]." }
        ],
        practicalOutput: "A personal development plan with measurable milestones[cite: 2]."
      },
      {
        title: "Public Relations Training",
        subtitle: "Professional development in public relations",
        duration: "To be confirmed[cite: 2]",
        badge: "PR & Media",
        description: "Introduce strategic public relations, stakeholder trust, media engagement and reputation-building[cite: 2].",
        bestFor: "PR and communication officers, spokespersons, marketing teams, NGO staff and stakeholder-relations professionals[cite: 2].",
        learningOutcomes: [
          "Explain PR strategy, target audiences, corporate reputation and public trust[cite: 2]."
        ],
        modules: [
          { title: "Module 1: Core concepts", detail: "PR strategy, audiences, reputation and public trust[cite: 2]." },
          { title: "Module 2: Governance and good practice", detail: "Media writing, press releases, interviews and spokesperson preparation[cite: 2]." },
          { title: "Module 3: Applied methods", detail: "Stakeholder engagement, campaigns and digital channels[cite: 2]." },
          { title: "Module 4: Implementation and review", detail: "Issues monitoring, crisis response and PR evaluation[cite: 2]." }
        ],
        practicalOutput: "A draft press release and stakeholder outreach plan[cite: 2]."
      },
      {
        title: "Sales and Marketing",
        subtitle: "Professional development in sales and marketing",
        duration: "To be confirmed[cite: 2]",
        badge: "Commercial",
        description: "Connect customer research, value propositions, marketing channels and sales conversations in a structured commercial process[cite: 2].",
        bestFor: "Sales and marketing staff, business developers, entrepreneurs, account managers and team supervisors[cite: 2].",
        learningOutcomes: [
          "Explain market research, segments, customer needs and product positioning[cite: 2]."
        ],
        modules: [
          { title: "Module 1: Core concepts", detail: "Market research, segments, customer needs and positioning[cite: 2]." },
          { title: "Module 2: Governance and good practice", detail: "Value propositions, campaign planning and channel selection[cite: 2]." },
          { title: "Module 3: Applied methods", detail: "Prospecting, sales conversations, objections and follow-up[cite: 2]." },
          { title: "Module 4: Implementation and review", detail: "Pipeline metrics, customer retention and improvement[cite: 2]." }
        ],
        practicalOutput: "A target-segment profile and practical sales/marketing action plan[cite: 2]."
      },
      {
        title: "Strategy and Strategic Planning",
        subtitle: "Professional development in strategic planning",
        duration: "To be confirmed[cite: 2]",
        badge: "Strategy",
        description: "Guide participants through assessing context, setting priorities, defining outcomes and translating strategy into execution[cite: 2].",
        bestFor: "Executives, strategy teams, programme directors, department heads and planning professionals[cite: 2].",
        learningOutcomes: [
          "Explain organisational mission, context analysis, stakeholder needs and strategic issues[cite: 2]."
        ],
        modules: [
          { title: "Module 1: Core concepts", detail: "Mission, context analysis, stakeholder needs and strategic issues[cite: 2]." },
          { title: "Module 2: Governance and good practice", detail: "Strategic objectives, options, priorities and trade-offs[cite: 2]." },
          { title: "Module 3: Applied methods", detail: "Implementation roadmaps, ownership, resources and risk[cite: 2]." },
          { title: "Module 4: Implementation and review", detail: "KPIs, review cycles, learning and strategic adjustment[cite: 2]." }
        ],
        practicalOutput: "A one-page strategy map with objectives, owners and indicators[cite: 2]."
      },
      {
        title: "Sustainability and CSR Training",
        subtitle: "Professional development in sustainability & CSR",
        duration: "To be confirmed[cite: 2]",
        badge: "Sustainability",
        description: "Explore how organisations identify environmental and social impacts, engage stakeholders and embed responsible practices[cite: 2].",
        bestFor: "CSR and sustainability teams, operations managers, procurement staff, leadership teams and communications professionals[cite: 2].",
        learningOutcomes: [
          "Explain core sustainability concepts, material issues and stakeholder expectations[cite: 2]."
        ],
        modules: [
          { title: "Module 1: Core concepts", detail: "Sustainability concepts, material issues and stakeholder expectations[cite: 2]." },
          { title: "Module 2: Governance and good practice", detail: "CSR governance, supply-chain responsibility and operational practices[cite: 2]." },
          { title: "Module 3: Applied methods", detail: "Targets, indicators, evidence and sustainability reporting[cite: 2]." },
          { title: "Module 4: Implementation and review", detail: "Impact review, communication integrity and improvement planning[cite: 2]." }
        ],
        practicalOutput: "A materiality shortlist and draft sustainability action plan[cite: 2]."
      }
    ]
  },
  {
    title: "Digital Transformation & Innovation",
    description: "Practical development in responsible AI, data-informed decisions, innovation methods and organisation-wide digital change[cite: 2].",
    courses: [
      {
        title: "Artificial Intelligence (AI) Training",
        subtitle: "Professional development in artificial intelligence",
        duration: "To be confirmed[cite: 2]",
        badge: "Digital & AI",
        description: "Introduce practical AI concepts and responsible use of AI tools in professional workflows[cite: 2].",
        bestFor: "Managers, office professionals, analysts, service teams and organisations exploring responsible AI adoption[cite: 2].",
        learningOutcomes: [
          "Explain core AI capabilities, limitations and workplace use cases[cite: 2]."
        ],
        modules: [
          { title: "Module 1: Core concepts", detail: "AI capabilities, limitations and workplace use cases[cite: 2]." },
          { title: "Module 2: Governance and good practice", detail: "Prompt design, workflow selection and output verification[cite: 2]." },
          { title: "Module 3: Applied methods", detail: "Privacy, bias, security, copyright and human oversight[cite: 2]." },
          { title: "Module 4: Implementation and review", detail: "Pilot design, adoption measures and responsible-use guidelines[cite: 2]." }
        ],
        practicalOutput: "A prioritised AI use-case canvas and a draft usage checklist[cite: 2]."
      },
      {
        title: "Creativity and Innovation Training",
        subtitle: "Professional development in creativity & innovation",
        duration: "To be confirmed[cite: 2]",
        badge: "Innovation",
        description: "Build a repeatable process for identifying opportunities, generating ideas, testing assumptions and moving concepts into experiments[cite: 2].",
        bestFor: "Team leaders, product and service teams, entrepreneurs, programme staff and innovation champions[cite: 2].",
        learningOutcomes: [
          "Explain problem framing, customer insight and opportunity discovery[cite: 2]."
        ],
        modules: [
          { title: "Module 1: Core concepts", detail: "Problem framing, customer insight and opportunity discovery[cite: 2]." },
          { title: "Module 2: Governance and good practice", detail: "Creative ideation, divergent thinking and idea selection[cite: 2]." },
          { title: "Module 3: Applied methods", detail: "Prototyping, experiments and assumption testing[cite: 2]." },
          { title: "Module 4: Implementation and review", detail: "Implementation, learning reviews and innovation measures[cite: 2]." }
        ],
        practicalOutput: "A prototype concept and a test plan with success criteria[cite: 2]."
      },
      {
        title: "Data Management and Business Intelligence Training",
        subtitle: "Professional development in data & BI",
        duration: "To be confirmed[cite: 2]",
        badge: "Data & BI",
        description: "Develop sound practices for organising, validating, analysing and communicating data for better decisions[cite: 2].",
        bestFor: "Business analysts, reporting teams, managers, operations staff and professionals who work with organisational data[cite: 2].",
        learningOutcomes: [
          "Explain the data lifecycle, definitions, ownership and data quality[cite: 2]."
        ],
        modules: [
          { title: "Module 1: Core concepts", detail: "Data lifecycle, definitions, ownership and quality[cite: 2]." },
          { title: "Module 2: Governance and good practice", detail: "Data modelling, preparation, governance and access control[cite: 2]." },
          { title: "Module 3: Applied methods", detail: "Metrics, dashboards, analytical questions and interpretation[cite: 2]." },
          { title: "Module 4: Implementation and review", detail: "Insight communication, reporting controls and improvement[cite: 2]." }
        ],
        practicalOutput: "A draft KPI dictionary and dashboard/reporting specification[cite: 2]."
      },
      {
        title: "Digital Transformation Training",
        subtitle: "Professional development in digital transformation",
        duration: "To be confirmed[cite: 2]",
        badge: "Transformation",
        description: "Help organisations understand how digital capabilities can redesign services, workflows and customer experiences[cite: 2].",
        bestFor: "Executives, digital project teams, process owners, operations leaders and change managers[cite: 2].",
        learningOutcomes: [
          "Explain digital maturity, user needs and transformation drivers[cite: 2]."
        ],
        modules: [
          { title: "Module 1: Core concepts", detail: "Digital maturity, user needs and transformation drivers[cite: 2]." },
          { title: "Module 2: Governance and good practice", detail: "Process redesign, technology options and target operating models[cite: 2]." },
          { title: "Module 3: Applied methods", detail: "Change management, capability building and implementation risks[cite: 2]." },
          { title: "Module 4: Implementation and review", detail: "Roadmaps, benefits realisation and governance[cite: 2]." }
        ],
        practicalOutput: "A transformation roadmap with staged priorities and success measures[cite: 2]."
      }
    ]
  },
  {
    title: "HSE & Security",
    description: "Risk-aware training in digital security, workplace safety, environmental responsibility and crisis readiness[cite: 2].",
    courses: [
      {
        title: "Cybersecurity Training Courses",
        subtitle: "Professional development in cybersecurity awareness",
        duration: "To be confirmed[cite: 2]",
        badge: "Security",
        description: "Build practical awareness of common digital threats, security responsibilities and incident reporting[cite: 2].",
        bestFor: "General employees, managers, IT support, security coordinators and staff who handle sensitive information[cite: 2].",
        learningOutcomes: [
          "Explain threat landscapes, phishing, identity and access basics[cite: 2]."
        ],
        modules: [
          { title: "Module 1: Core concepts", detail: "Threat landscape, phishing, identity and access basics[cite: 2]." },
          { title: "Module 2: Governance and good practice", detail: "Device, network, data and account protection practices[cite: 2]." },
          { title: "Module 3: Applied methods", detail: "Incident identification, reporting and response coordination[cite: 2]." },
          { title: "Module 4: Implementation and review", detail: "Risk awareness, policy compliance and security habits[cite: 2]." }
        ],
        practicalOutput: "A role-based cyber hygiene checklist and tabletop incident scenario[cite: 2]."
      },
      {
        title: "Health, Safety and Environment (HSE)",
        subtitle: "Professional development in health, safety and environment",
        duration: "To be confirmed[cite: 2]",
        badge: "HSE",
        description: "Introduce structured hazard identification, risk assessment, safe systems of work and environmental responsibilities[cite: 2].",
        bestFor: "HSE coordinators, supervisors, operations teams, contractors and managers overseeing workplace safety[cite: 2].",
        learningOutcomes: [
          "Explain HSE responsibilities, hazard recognition and risk assessment[cite: 2]."
        ],
        modules: [
          { title: "Module 1: Core concepts", detail: "HSE responsibilities, hazard recognition and risk assessment[cite: 2]." },
          { title: "Module 2: Governance and good practice", detail: "Safe work procedures, permits, PPE and contractor controls[cite: 2]." },
          { title: "Module 3: Applied methods", detail: "Incident reporting, emergency readiness and investigation basics[cite: 2]." },
          { title: "Module 4: Implementation and review", detail: "Environmental aspects, monitoring and corrective action[cite: 2]." }
        ],
        practicalOutput: "A sample task risk assessment and workplace inspection checklist[cite: 2]."
      },
      {
        title: "Emergency & Crisis Management",
        subtitle: "Professional development in emergency & crisis management",
        duration: "To be confirmed[cite: 2]",
        badge: "Crisis Management",
        description: "Prepare teams to respond to disruptive incidents through clear roles, escalation, communication and continuity planning[cite: 2].",
        bestFor: "Crisis coordinators, operations managers, continuity teams, communications staff and senior decision-makers[cite: 2].",
        learningOutcomes: [
          "Explain incident types, severity assessment and command roles[cite: 2]."
        ],
        modules: [
          { title: "Module 1: Core concepts", detail: "Incident types, severity assessment and command roles[cite: 2]." },
          { title: "Module 2: Governance and good practice", detail: "Response plans, escalation triggers and resource coordination[cite: 2]." },
          { title: "Module 3: Applied methods", detail: "Crisis communication, stakeholder updates and decision logs[cite: 2]." },
          { title: "Module 4: Implementation and review", detail: "Tabletop exercises, recovery priorities and after-action review[cite: 2]." }
        ],
        practicalOutput: "A draft crisis contact tree and tabletop exercise evaluation[cite: 2]."
      }
    ]
  },
  {
    title: "Accreditations & Certifications",
    description: "Preparation and standards-awareness subjects that require current official verification; no approval, endorsement or certification is guaranteed[cite: 2].",
    courses: [
      {
        title: "KHDA Accreditation Support",
        subtitle: "Professional development in regulatory training standards",
        duration: "To be confirmed[cite: 2]",
        badge: "Accreditation",
        description: "A planning-oriented overview for organisations that need to understand a training-provider approval or accreditation process associated with KHDA[cite: 2].",
        bestFor: "Training providers, learning managers, institutional administrators and compliance coordinators[cite: 2].",
        learningOutcomes: [
          "Explain provider context, eligibility questions and approval pathway mapping[cite: 2]."
        ],
        modules: [
          { title: "Module 1: Core concepts", detail: "Provider context, eligibility questions and approval pathway mapping[cite: 2]." },
          { title: "Module 2: Governance and good practice", detail: "Document readiness, programme records and quality evidence[cite: 2]." },
          { title: "Module 3: Applied methods", detail: "Internal review, submission planning and communication with authorities[cite: 2]." },
          { title: "Module 4: Implementation and review", detail: "Renewal monitoring, record keeping and continuous compliance[cite: 2]." }
        ],
        practicalOutput: "An evidence-readiness checklist and a list of questions for official confirmation[cite: 2]."
      },
      {
        title: "PMI Standards & Training",
        subtitle: "Professional development in project management standards",
        duration: "To be confirmed[cite: 2]",
        badge: "Standards",
        description: "Introduce project-management concepts and selected standards associated with PMI, linking them to planning and delivery[cite: 2].",
        bestFor: "Project coordinators, project managers, team leads and professionals preparing for project-management development[cite: 2].",
        learningOutcomes: [
          "Explain project environments, principles and delivery approaches[cite: 2]."
        ],
        modules: [
          { title: "Module 1: Core concepts", detail: "Project environments, principles and delivery approaches[cite: 2]." },
          { title: "Module 2: Governance and good practice", detail: "Scope, schedule, cost, quality, risk and resource planning[cite: 2]." },
          { title: "Module 3: Applied methods", detail: "Stakeholder engagement, team leadership and delivery control[cite: 2]." },
          { title: "Module 4: Implementation and review", detail: "Performance review, lessons learned and professional development routes[cite: 2]." }
        ],
        practicalOutput: "A sample project charter and integrated planning checklist[cite: 2]."
      },
      {
        title: "HRCI Certification Training",
        subtitle: "Professional development in HR professional standards",
        duration: "To be confirmed[cite: 2]",
        badge: "HR Standards",
        description: "Support HR professionals in reviewing core HR knowledge areas and planning structured certification study[cite: 2].",
        bestFor: "HR professionals and people managers exploring structured HR knowledge development[cite: 2].",
        learningOutcomes: [
          "Explain HR roles, professional ethics and workforce context[cite: 2]."
        ],
        modules: [
          { title: "Module 1: Core concepts", detail: "HR role, professional ethics and workforce context[cite: 2]." },
          { title: "Module 2: Governance and good practice", detail: "Talent acquisition, employee relations and total rewards[cite: 2]." },
          { title: "Module 3: Applied methods", detail: "Learning, performance, risk and people analytics[cite: 2]." },
          { title: "Module 4: Implementation and review", detail: "Exam-study planning, applied scenarios and knowledge review[cite: 2]." }
        ],
        practicalOutput: "A personal study plan and HR scenario-based revision checklist[cite: 2]."
      }
    ]
  },
  {
    title: "Engineering & Technical",
    description: "Applied technical and operational topics that require course design to be validated by qualified subject-matter experts and standards[cite: 2].",
    courses: [
      {
        title: "Construction Management & Civil Engineering",
        subtitle: "Professional development in construction management",
        duration: "To be confirmed[cite: 2]",
        badge: "Engineering",
        description: "Cover the planning and coordination principles used in construction and civil-engineering projects[cite: 2].",
        bestFor: "Construction managers, site engineers, project coordinators, supervisors and built-environment professionals[cite: 2].",
        learningOutcomes: [
          "Explain project scope, drawings, specifications and site constraints[cite: 2]."
        ],
        modules: [
          { title: "Module 1: Core concepts", detail: "Project scope, drawings, specifications and site constraints[cite: 2]." },
          { title: "Module 2: Governance and good practice", detail: "Work sequencing, resources, schedule and cost monitoring[cite: 2]." },
          { title: "Module 3: Applied methods", detail: "Quality inspections, site safety and contractor coordination[cite: 2]." },
          { title: "Module 4: Implementation and review", detail: "Progress reporting, changes, handover and lessons learned[cite: 2]." }
        ],
        practicalOutput: "A sample construction execution checklist and project-control dashboard outline[cite: 2]."
      },
      {
        title: "Maintenance Engineering",
        subtitle: "Professional development in maintenance engineering",
        duration: "To be confirmed[cite: 2]",
        badge: "Maintenance",
        description: "Introduce maintenance strategies that improve asset reliability, safety and availability[cite: 2].",
        bestFor: "Maintenance engineers, technicians, planners, operations managers and asset owners[cite: 2].",
        learningOutcomes: [
          "Explain asset criticality, failure modes and maintenance strategies[cite: 2]."
        ],
        modules: [
          { title: "Module 1: Core concepts", detail: "Asset criticality, failure modes and maintenance strategies[cite: 2]." },
          { title: "Module 2: Governance and good practice", detail: "Work orders, preventive schedules and spare-parts planning[cite: 2]." },
          { title: "Module 3: Applied methods", detail: "Reliability indicators, inspections and failure analysis[cite: 2]." },
          { title: "Module 4: Implementation and review", detail: "Maintenance optimisation, documentation and improvement[cite: 2]." }
        ],
        practicalOutput: "An example maintenance plan and asset-criticality matrix[cite: 2]."
      },
      {
        title: "Mechanical Engineering",
        subtitle: "Professional development in mechanical engineering",
        duration: "To be confirmed[cite: 2]",
        badge: "Mechanical",
        description: "Provide a professional overview of mechanical systems, design considerations, equipment performance and safe operational practice[cite: 2].",
        bestFor: "Mechanical engineers, technical supervisors, maintenance teams and engineering graduates[cite: 2].",
        learningOutcomes: [
          "Explain mechanical systems, components and operating principles[cite: 2]."
        ],
        modules: [
          { title: "Module 1: Core concepts", detail: "Mechanical systems, components and operating principles[cite: 2]." },
          { title: "Module 2: Governance and good practice", detail: "Materials, loads, tolerances and design considerations[cite: 2]." },
          { title: "Module 3: Applied methods", detail: "Equipment operation, inspection and maintenance planning[cite: 2]." },
          { title: "Module 4: Implementation and review", detail: "Performance assessment, safety and engineering documentation[cite: 2]." }
        ],
        practicalOutput: "A system review worksheet and technical inspection checklist[cite: 2]."
      },
      {
        title: "Electrical Engineering",
        subtitle: "Professional development in electrical engineering",
        duration: "To be confirmed[cite: 2]",
        badge: "Electrical",
        description: "Review electrical-system principles, equipment, protection and maintenance considerations in an applied workplace context[cite: 2].",
        bestFor: "Electrical engineers, technicians, maintenance professionals, site supervisors and engineering graduates[cite: 2].",
        learningOutcomes: [
          "Explain electrical fundamentals, systems and equipment terminology[cite: 2]."
        ],
        modules: [
          { title: "Module 1: Core concepts", detail: "Electrical fundamentals, systems and equipment terminology[cite: 2]." },
          { title: "Module 2: Governance and good practice", detail: "Distribution, protection, grounding and safety principles[cite: 2]." },
          { title: "Module 3: Applied methods", detail: "Inspection, testing records and fault diagnosis concepts[cite: 2]." },
          { title: "Module 4: Implementation and review", detail: "Maintenance planning, documentation and operational risk[cite: 2]." }
        ],
        practicalOutput: "A sample electrical inspection record and maintenance checklist[cite: 2]."
      },
      {
        title: "Root Cause Analysis",
        subtitle: "Professional development in root cause investigation",
        duration: "To be confirmed[cite: 2]",
        badge: "Quality & Analysis",
        description: "Teach structured methods for investigating incidents, defects and recurring operational problems[cite: 2].",
        bestFor: "Quality, operations, maintenance, safety, engineering and continuous-improvement teams[cite: 2].",
        learningOutcomes: [
          "Explain problem definition, evidence collection and investigation scope[cite: 2]."
        ],
        modules: [
          { title: "Module 1: Core concepts", detail: "Problem definition, evidence collection and investigation scope[cite: 2]." },
          { title: "Module 2: Governance and good practice", detail: "Cause-mapping tools, five whys and fishbone analysis[cite: 2]." },
          { title: "Module 3: Applied methods", detail: "Verification of contributing and root causes[cite: 2]." },
          { title: "Module 4: Implementation and review", detail: "Corrective actions, ownership, effectiveness checks and learning[cite: 2]." }
        ],
        practicalOutput: "A completed practice root-cause analysis and corrective-action register[cite: 2]."
      },
      {
        title: "Corrosion, Metallurgy and Inspection",
        subtitle: "Professional development in asset integrity",
        duration: "To be confirmed[cite: 2]",
        badge: "Inspection",
        description: "Introduce the relationships among materials, corrosion mechanisms, degradation and inspection planning[cite: 2].",
        bestFor: "Materials engineers, inspection staff, maintenance teams, asset-integrity professionals and supervisors[cite: 2].",
        learningOutcomes: [
          "Explain material properties, degradation mechanisms and corrosion environments[cite: 2]."
        ],
        modules: [
          { title: "Module 1: Core concepts", detail: "Material properties, degradation mechanisms and corrosion environments[cite: 2]." },
          { title: "Module 2: Governance and good practice", detail: "Corrosion prevention, coating and material-selection concepts[cite: 2]." },
          { title: "Module 3: Applied methods", detail: "Inspection planning, evidence interpretation and reporting[cite: 2]." },
          { title: "Module 4: Implementation and review", detail: "Integrity risk, mitigation options and follow-up[cite: 2]." }
        ],
        practicalOutput: "A sample corrosion observation report and inspection-planning worksheet[cite: 2]."
      },
      {
        title: "Instrumentation and Process Control",
        subtitle: "Professional development in instrumentation systems",
        duration: "To be confirmed[cite: 2]",
        badge: "Automation",
        description: "Explain measurement, instrumentation and control-loop concepts used in industrial processes[cite: 2].",
        bestFor: "Instrumentation technicians, process engineers, control-room staff and maintenance professionals[cite: 2].",
        learningOutcomes: [
          "Explain measurement variables, sensors, transmitters and signal basics[cite: 2]."
        ],
        modules: [
          { title: "Module 1: Core concepts", detail: "Measurement variables, sensors, transmitters and signal basics[cite: 2]." },
          { title: "Module 2: Governance and good practice", detail: "Control loops, controllers, actuators and process response[cite: 2]." },
          { title: "Module 3: Applied methods", detail: "Calibration concepts, troubleshooting and documentation[cite: 2]." },
          { title: "Module 4: Implementation and review", detail: "Alarms, process safety interfaces and improvement opportunities[cite: 2]." }
        ],
        practicalOutput: "A control-loop diagram exercise and an instrument-checklist template[cite: 2]."
      },
      {
        title: "Mining Engineering",
        subtitle: "Professional development in mining engineering",
        duration: "To be confirmed[cite: 2]",
        badge: "Mining",
        description: "Provide an overview of mine planning, extraction systems, ground and operational risks, environmental management[cite: 2].",
        bestFor: "Mining engineers, site supervisors, operations staff, safety personnel and technical graduates[cite: 2].",
        learningOutcomes: [
          "Explain mining methods, geology context and mine planning[cite: 2]."
        ],
        modules: [
          { title: "Module 1: Core concepts", detail: "Mining methods, geology context and mine planning[cite: 2]." },
          { title: "Module 2: Governance and good practice", detail: "Production systems, equipment and work sequencing[cite: 2]." },
          { title: "Module 3: Applied methods", detail: "Ground control, worker safety and environmental safeguards[cite: 2]." },
          { title: "Module 4: Implementation and review", detail: "Production monitoring, risk review and operational improvement[cite: 2]." }
        ],
        practicalOutput: "A sample mine-operation risk register and daily-control checklist[cite: 2]."
      }
    ]
  },
  {
    title: "Energy",
    description: "Professional development in changing energy systems, conventional operations, hydrogen and renewable technologies[cite: 2].",
    courses: [
      {
        title: "Energy Transition Training",
        subtitle: "Professional development in energy transition",
        duration: "To be confirmed[cite: 2]",
        badge: "Energy",
        description: "Examine how energy systems are changing through efficiency, lower-carbon technologies, policy, investment and infrastructure[cite: 2].",
        bestFor: "Energy professionals, policymakers, planners, sustainability teams, investors and infrastructure managers[cite: 2].",
        learningOutcomes: [
          "Explain energy-system context, emissions drivers and transition pathways[cite: 2]."
        ],
        modules: [
          { title: "Module 1: Core concepts", detail: "Energy-system context, emissions drivers and transition pathways[cite: 2]." },
          { title: "Module 2: Governance and good practice", detail: "Technology options, efficiency and grid/infrastructure implications[cite: 2]." },
          { title: "Module 3: Applied methods", detail: "Policy, finance, workforce and stakeholder considerations[cite: 2]." },
          { title: "Module 4: Implementation and review", detail: "Transition planning, indicators, risks and implementation priorities[cite: 2]." }
        ],
        practicalOutput: "A high-level energy-transition roadmap with assumptions and indicators[cite: 2]."
      },
      {
        title: "Oil and Gas Training",
        subtitle: "Professional development in oil and gas operations",
        duration: "To be confirmed[cite: 2]",
        badge: "Oil & Gas",
        description: "Introduce the oil-and-gas value chain, operational interfaces, asset integrity, HSE and commercial considerations[cite: 2].",
        bestFor: "Energy-sector professionals, project staff, supervisors, procurement teams and technical graduates[cite: 2].",
        learningOutcomes: [
          "Explain value chain, assets, terminology and operating context[cite: 2]."
        ],
        modules: [
          { title: "Module 1: Core concepts", detail: "Value chain, assets, terminology and operating context[cite: 2]." },
          { title: "Module 2: Governance and good practice", detail: "Operations, maintenance, contractors and supply interfaces[cite: 2]." },
          { title: "Module 3: Applied methods", detail: "Process safety, environmental duties and asset integrity[cite: 2]." },
          { title: "Module 4: Implementation and review", detail: "Cost, performance, risk controls and operational reporting[cite: 2]." }
        ],
        practicalOutput: "A role-based value-chain map and operational risk checklist[cite: 2]."
      },
      {
        title: "Hydrogen Training",
        subtitle: "Professional development in hydrogen systems",
        duration: "To be confirmed[cite: 2]",
        badge: "Hydrogen",
        description: "Introduce hydrogen production pathways, storage and transport concepts, potential applications and safety considerations[cite: 2].",
        bestFor: "Energy professionals, engineers, sustainability teams, policy staff and infrastructure planners[cite: 2].",
        learningOutcomes: [
          "Explain hydrogen properties, production pathways and terminology[cite: 2]."
        ],
        modules: [
          { title: "Module 1: Core concepts", detail: "Hydrogen properties, production pathways and terminology[cite: 2]." },
          { title: "Module 2: Governance and good practice", detail: "Storage, transport, end uses and infrastructure requirements[cite: 2]." },
          { title: "Module 3: Applied methods", detail: "Safety, materials, standards and environmental considerations[cite: 2]." },
          { title: "Module 4: Implementation and review", detail: "Project feasibility, economics, risks and readiness assessment[cite: 2]." }
        ],
        practicalOutput: "A hydrogen-project screening matrix covering benefits, constraints and risks[cite: 2]."
      },
      {
        title: "Renewable Energy Training",
        subtitle: "Professional development in renewable energy",
        duration: "To be confirmed[cite: 2]",
        badge: "Renewables",
        description: "Explore renewable-energy technologies and the practical issues involved in assessing, selecting and operating projects[cite: 2].",
        bestFor: "Energy managers, engineers, project developers, sustainability professionals and public-sector planners[cite: 2].",
        learningOutcomes: [
          "Explain renewable technologies, resource characteristics and use cases[cite: 2]."
        ],
        modules: [
          { title: "Module 1: Core concepts", detail: "Renewable technologies, resource characteristics and use cases[cite: 2]." },
          { title: "Module 2: Governance and good practice", detail: "Site assessment, system sizing and grid/storage integration concepts[cite: 2]." },
          { title: "Module 3: Applied methods", detail: "Project economics, procurement, operations and maintenance[cite: 2]." },
          { title: "Module 4: Implementation and review", detail: "Environmental and social considerations, performance and planning[cite: 2]." }
        ],
        practicalOutput: "A preliminary renewable-energy project appraisal checklist[cite: 2]."
      }
    ]
  },
  {
    title: "Operational & Logistics",
    description: "Practical skills across contracts, projects, supply chains, public-private delivery, quality and risk[cite: 2].",
    courses: [
      {
        title: "Contract Management & Law",
        subtitle: "Professional development in contract management",
        duration: "To be confirmed[cite: 2]",
        badge: "Legal & Contracts",
        description: "Cover the contract lifecycle from requirements and drafting inputs through negotiation, delivery monitoring, variation and close-out[cite: 2].",
        bestFor: "Contract managers, procurement teams, project leads, commercial staff and operational managers[cite: 2].",
        learningOutcomes: [
          "Explain contract scope, terms, responsibilities and risk allocation[cite: 2]."
        ],
        modules: [
          { title: "Module 1: Core concepts", detail: "Contract scope, terms, responsibilities and risk allocation[cite: 2]." },
          { title: "Module 2: Governance and good practice", detail: "Negotiation preparation, approvals and document control[cite: 2]." },
          { title: "Module 3: Applied methods", detail: "Performance monitoring, variations, disputes and escalation[cite: 2]." },
          { title: "Module 4: Implementation and review", detail: "Claims records, close-out, lessons learned and legal referral[cite: 2]." }
        ],
        practicalOutput: "A contract obligations register and contract-review checklist[cite: 2]."
      },
      {
        title: "Legal Training",
        subtitle: "Professional development in practical legal awareness",
        duration: "To be confirmed[cite: 2]",
        badge: "Legal",
        description: "Provide a practical introduction to legal awareness, interpreting policies and obligations, documenting decisions[cite: 2].",
        bestFor: "Managers, administrators, compliance staff, HR and procurement teams and professionals who handle legal documents[cite: 2].",
        learningOutcomes: [
          "Explain legal awareness, jurisdiction and professional boundaries[cite: 2]."
        ],
        modules: [
          { title: "Module 1: Core concepts", detail: "Legal awareness, jurisdiction and professional boundaries[cite: 2]." },
          { title: "Module 2: Governance and good practice", detail: "Reading policies, agreements and statutory requirements[cite: 2]." },
          { title: "Module 3: Applied methods", detail: "Records, approvals, privacy and risk escalation[cite: 2]." },
          { title: "Module 4: Implementation and review", detail: "Case scenarios, issue spotting and referral to qualified counsel[cite: 2]." }
        ],
        practicalOutput: "A legal-issue spotting checklist and escalation pathway[cite: 2]."
      },
      {
        title: "Procurement, Logistics and Supply Chain Management",
        subtitle: "Professional development in supply chain",
        duration: "To be confirmed[cite: 2]",
        badge: "Supply Chain",
        description: "Build understanding of purchasing, supplier evaluation, inventory, logistics and end-to-end supply-chain performance[cite: 2].",
        bestFor: "Procurement officers, supply-chain managers, warehouse staff, operations teams and project coordinators[cite: 2].",
        learningOutcomes: [
          "Explain demand planning, sourcing strategy and procurement requirements[cite: 2]."
        ],
        modules: [
          { title: "Module 1: Core concepts", detail: "Demand planning, sourcing strategy and procurement requirements[cite: 2]." },
          { title: "Module 2: Governance and good practice", detail: "Supplier selection, evaluation, ethics and contract interfaces[cite: 2]." },
          { title: "Module 3: Applied methods", detail: "Inventory, warehousing, transport and logistics coordination[cite: 2]." },
          { title: "Module 4: Implementation and review", detail: "Supply risk, performance measures and continuous improvement[cite: 2]." }
        ],
        practicalOutput: "A supplier scorecard and a simple procurement-to-delivery process map[cite: 2]."
      },
      {
        title: "Project Management",
        subtitle: "Professional development in project management",
        duration: "To be confirmed[cite: 2]",
        badge: "Projects",
        description: "Teach a structured approach to initiating, planning, executing, monitoring and closing projects[cite: 2].",
        bestFor: "Project coordinators, project managers, team leads and staff responsible for delivering initiatives[cite: 2].",
        learningOutcomes: [
          "Explain business case, objectives, scope and stakeholder analysis[cite: 2]."
        ],
        modules: [
          { title: "Module 1: Core concepts", detail: "Business case, objectives, scope and stakeholder analysis[cite: 2]." },
          { title: "Module 2: Governance and good practice", detail: "Work breakdown, schedule, budget, resources and risk planning[cite: 2]." },
          { title: "Module 3: Applied methods", detail: "Team coordination, change control and progress reporting[cite: 2]." },
          { title: "Module 4: Implementation and review", detail: "Acceptance, closure, benefits review and lessons learned[cite: 2]." }
        ],
        practicalOutput: "A project charter, risk register and milestone plan[cite: 2]."
      },
      {
        title: "Public Private Partnerships (PPP)",
        subtitle: "Professional development in public private partnerships",
        duration: "To be confirmed[cite: 2]",
        badge: "Public Sector",
        description: "Introduce the rationale, lifecycle and governance of public-private partnership projects[cite: 2].",
        bestFor: "Public officials, infrastructure planners, project teams, advisers and private-sector professionals[cite: 2].",
        learningOutcomes: [
          "Explain PPP models, public objectives and project suitability[cite: 2]."
        ],
        modules: [
          { title: "Module 1: Core concepts", detail: "PPP models, public objectives and project suitability[cite: 2]." },
          { title: "Module 2: Governance and good practice", detail: "Feasibility, affordability, value for money and risk allocation[cite: 2]." },
          { title: "Module 3: Applied methods", detail: "Procurement, evaluation, negotiation and governance[cite: 2]." },
          { title: "Module 4: Implementation and review", detail: "Contract management, performance monitoring and accountability[cite: 2]." }
        ],
        practicalOutput: "A preliminary PPP screening template and risk-allocation matrix[cite: 2]."
      },
      {
        title: "Quality Control & Risk Management",
        subtitle: "Professional development in quality and risk",
        duration: "To be confirmed[cite: 2]",
        badge: "Quality & Risk",
        description: "Connect quality planning, inspection, nonconformity management and risk-based decision-making[cite: 2].",
        bestFor: "Quality officers, operations managers, engineers, auditors and risk coordinators[cite: 2].",
        learningOutcomes: [
          "Explain quality principles, customer requirements and process controls[cite: 2]."
        ],
        modules: [
          { title: "Module 1: Core concepts", detail: "Quality principles, customer requirements and process controls[cite: 2]." },
          { title: "Module 2: Governance and good practice", detail: "Risk identification, analysis, prioritisation and treatment[cite: 2]." },
          { title: "Module 3: Applied methods", detail: "Inspection, sampling, nonconformities and corrective action[cite: 2]." },
          { title: "Module 4: Implementation and review", detail: "Risk monitoring, quality indicators and improvement reviews[cite: 2]." }
        ],
        practicalOutput: "A combined quality/risk register and nonconformity action record[cite: 2]."
      }
    ]
  },
  {
    title: "Finance & Investment",
    description: "Financial literacy, budgeting, financial controls and investment-related topics, tailored to applicable local requirements[cite: 2].",
    courses: [
      {
        title: "Accounting and Finance",
        subtitle: "Professional development in accounting and finance",
        duration: "To be confirmed[cite: 2]",
        badge: "Finance",
        description: "Build foundational capability in financial records, statements, budgets, cash flow and financial interpretation[cite: 2].",
        bestFor: "Finance officers, business owners, managers, administrators and professionals seeking financial literacy[cite: 2].",
        learningOutcomes: [
          "Explain accounting concepts, transactions and records[cite: 2]."
        ],
        modules: [
          { title: "Module 1: Core concepts", detail: "Accounting concepts, transactions and records[cite: 2]." },
          { title: "Module 2: Governance and good practice", detail: "Income statements, balance sheets and cash-flow interpretation[cite: 2]." },
          { title: "Module 3: Applied methods", detail: "Budgeting, forecasting and financial controls[cite: 2]." },
          { title: "Module 4: Implementation and review", detail: "Variance analysis, reporting and informed decision-making[cite: 2]." }
        ],
        practicalOutput: "A sample budget and basic financial-performance commentary[cite: 2]."
      },
      {
        title: "Banking, Investment & Insurance",
        subtitle: "Professional development in financial services",
        duration: "To be confirmed[cite: 2]",
        badge: "Banking",
        description: "Introduce financial services, core banking and investment concepts, insurance principles and risk-return balance[cite: 2].",
        bestFor: "Finance staff, relationship managers, business leaders, analysts and professionals working with financial services[cite: 2].",
        learningOutcomes: [
          "Explain banking products, financial intermediation and customer needs[cite: 2]."
        ],
        modules: [
          { title: "Module 1: Core concepts", detail: "Banking products, financial intermediation and customer needs[cite: 2]." },
          { title: "Module 2: Governance and good practice", detail: "Investment classes, risk-return concepts and diversification[cite: 2]." },
          { title: "Module 3: Applied methods", detail: "Insurance principles, coverage, exclusions and claims processes[cite: 2]." },
          { title: "Module 4: Implementation and review", detail: "Regulation awareness, ethics, suitability and risk communication[cite: 2]." }
        ],
        practicalOutput: "A comparison matrix for illustrative financial products and their risks[cite: 2]."
      },
      {
        title: "Tax and Revenue",
        subtitle: "Professional development in tax and revenue",
        duration: "To be confirmed[cite: 2]",
        badge: "Tax",
        description: "Explain core tax and revenue concepts, documentation and compliance workflows relevant to organisational planning[cite: 2].",
        bestFor: "Finance officers, accountants, business owners, administrators and public-revenue personnel[cite: 2].",
        learningOutcomes: [
          "Explain tax concepts, revenue sources and jurisdictional responsibilities[cite: 2]."
        ],
        modules: [
          { title: "Module 1: Core concepts", detail: "Tax concepts, revenue sources and jurisdictional responsibilities[cite: 2]." },
          { title: "Module 2: Governance and good practice", detail: "Records, documentation, returns and deadlines[cite: 2]." },
          { title: "Module 3: Applied methods", detail: "Reconciliation, controls, common errors and query management[cite: 2]." },
          { title: "Module 4: Implementation and review", detail: "Planning, reporting, updates and referral for specialist advice[cite: 2]." }
        ],
        practicalOutput: "A compliance calendar and tax-document readiness checklist[cite: 2]."
      },
      {
        title: "Finance and Budgeting Training",
        subtitle: "Professional development in finance and budgeting",
        duration: "To be confirmed[cite: 2]",
        badge: "Budgeting",
        description: "Help participants prepare realistic budgets, forecast cash needs, track expenditure and explain variances[cite: 2].",
        bestFor: "Budget holders, project managers, finance teams, NGO administrators and department heads[cite: 2].",
        learningOutcomes: [
          "Explain budget purpose, assumptions and cost classification[cite: 2]."
        ],
        modules: [
          { title: "Module 1: Core concepts", detail: "Budget purpose, assumptions and cost classification[cite: 2]." },
          { title: "Module 2: Governance and good practice", detail: "Budget preparation, forecasting and scenario planning[cite: 2]." },
          { title: "Module 3: Applied methods", detail: "Cash flow, expenditure controls and variance analysis[cite: 2]." },
          { title: "Module 4: Implementation and review", detail: "Financial reporting, reforecasting and accountability[cite: 2]." }
        ],
        practicalOutput: "A draft operating or project budget with variance notes[cite: 2]."
      },
      {
        title: "Fraud and Financial Audit",
        subtitle: "Professional development in fraud audit",
        duration: "To be confirmed[cite: 2]",
        badge: "Audit & Fraud",
        description: "Introduce fraud-risk awareness, control design, audit evidence and escalation of suspicious transactions[cite: 2].",
        bestFor: "Internal audit, finance, compliance, risk, procurement and management professionals[cite: 2].",
        learningOutcomes: [
          "Explain fraud risks, red flags, incentives and control weaknesses[cite: 2]."
        ],
        modules: [
          { title: "Module 1: Core concepts", detail: "Fraud risks, red flags, incentives and control weaknesses[cite: 2]." },
          { title: "Module 2: Governance and good practice", detail: "Segregation of duties, approvals and transaction controls[cite: 2]." },
          { title: "Module 3: Applied methods", detail: "Audit evidence, documentation and responsible escalation[cite: 2]." },
          { title: "Module 4: Implementation and review", detail: "Investigation boundaries, remediation and monitoring[cite: 2]." }
        ],
        practicalOutput: "A fraud-risk control matrix and an audit evidence checklist[cite: 2]."
      },
      {
        title: "Joint Venture",
        subtitle: "Professional development in joint ventures",
        duration: "To be confirmed[cite: 2]",
        badge: "Partnerships",
        description: "Explore the strategic, commercial and governance considerations involved in creating and managing a joint venture[cite: 2].",
        bestFor: "Business development teams, executives, investors, legal and finance professionals and project sponsors[cite: 2].",
        learningOutcomes: [
          "Explain strategic rationale, partner fit and due diligence[cite: 2]."
        ],
        modules: [
          { title: "Module 1: Core concepts", detail: "Strategic rationale, partner fit and due diligence[cite: 2]." },
          { title: "Module 2: Governance and good practice", detail: "Business case, contributions, ownership and governance options[cite: 2]." },
          { title: "Module 3: Applied methods", detail: "Operating model, decision rights, performance and risk sharing[cite: 2]." },
          { title: "Module 4: Implementation and review", detail: "Dispute management, review triggers and exit or transition planning[cite: 2]." }
        ],
        practicalOutput: "A joint-venture due-diligence checklist and governance term-sheet outline[cite: 2]."
      },
      {
        title: "Real Estate Investment and Finance",
        subtitle: "Professional development in property investment",
        duration: "To be confirmed[cite: 2]",
        badge: "Real Estate",
        description: "Introduce property investment analysis, funding structures, cash flow, valuation concepts and property-related risks[cite: 2].",
        bestFor: "Property professionals, business owners, finance teams, investors and development-project staff[cite: 2].",
        learningOutcomes: [
          "Explain property markets, asset types and investment objectives[cite: 2]."
        ],
        modules: [
          { title: "Module 1: Core concepts", detail: "Property markets, asset types and investment objectives[cite: 2]." },
          { title: "Module 2: Governance and good practice", detail: "Income, costs, cash flow, valuation and financing concepts[cite: 2]." },
          { title: "Module 3: Applied methods", detail: "Due diligence, legal and operational risks, and scenario analysis[cite: 2]." },
          { title: "Module 4: Implementation and review", detail: "Portfolio monitoring, reporting and exit considerations[cite: 2]." }
        ],
        practicalOutput: "An illustrative property-investment appraisal template[cite: 2]."
      },
      {
        title: "Treasury and Investment Management",
        subtitle: "Professional development in treasury",
        duration: "To be confirmed[cite: 2]",
        badge: "Treasury",
        description: "Cover cash and liquidity planning, funding needs, financial exposure and investment governance[cite: 2].",
        bestFor: "Treasury analysts, finance managers, controllers, investment operations staff and senior finance professionals[cite: 2].",
        learningOutcomes: [
          "Explain treasury role, cash visibility and liquidity forecasting[cite: 2]."
        ],
        modules: [
          { title: "Module 1: Core concepts", detail: "Treasury role, cash visibility and liquidity forecasting[cite: 2]." },
          { title: "Module 2: Governance and good practice", detail: "Funding, working capital and financial risk exposures[cite: 2]." },
          { title: "Module 3: Applied methods", detail: "Investment policy, portfolio principles and approval controls[cite: 2]." },
          { title: "Module 4: Implementation and review", detail: "Performance reporting, stress scenarios and governance[cite: 2]." }
        ],
        practicalOutput: "A cash forecast and treasury risk-monitoring checklist[cite: 2]."
      }
    ]
  },
  {
    title: "Sector Specific & Others",
    description: "Sector-focused training across agriculture, technology, health, tourism, humanitarian work, public services, maritime operations and urban development[cite: 2].",
    courses: [
      {
        title: "Agribusiness Sustainability",
        subtitle: "Professional development in agribusiness",
        duration: "To be confirmed[cite: 2]",
        badge: "Agriculture",
        description: "Examine sustainable agricultural value chains through resource efficiency, soil and water stewardship, climate resilience[cite: 2].",
        bestFor: "Agribusiness managers, extension staff, producer organisations, supply-chain teams and sustainability practitioners[cite: 2].",
        learningOutcomes: [
          "Explain agricultural value chains, local context and sustainability risks[cite: 2]."
        ],
        modules: [
          { title: "Module 1: Core concepts", detail: "Agricultural value chains, local context and sustainability risks[cite: 2]." },
          { title: "Module 2: Governance and good practice", detail: "Soil, water, biodiversity and climate-smart production concepts[cite: 2]." },
          { title: "Module 3: Applied methods", detail: "Responsible sourcing, farmer livelihoods and traceability[cite: 2]." },
          { title: "Module 4: Implementation and review", detail: "Indicators, assurance, resilience planning and improvement[cite: 2]." }
        ],
        practicalOutput: "A farm/value-chain sustainability checklist with priority actions[cite: 2]."
      },
      {
        title: "Fintech and Blockchain",
        subtitle: "Professional development in financial technology",
        duration: "To be confirmed[cite: 2]",
        badge: "Fintech",
        description: "Introduce digital financial services, blockchain concepts, practical use cases and risks associated with emerging tech[cite: 2].",
        bestFor: "Financial-services staff, product teams, technology professionals, entrepreneurs and policy teams[cite: 2].",
        learningOutcomes: [
          "Explain fintech ecosystem, digital payments and business models[cite: 2]."
        ],
        modules: [
          { title: "Module 1: Core concepts", detail: "Fintech ecosystem, digital payments and business models[cite: 2]." },
          { title: "Module 2: Governance and good practice", detail: "Distributed-ledger concepts, smart-contract use cases and limitations[cite: 2]." },
          { title: "Module 3: Applied methods", detail: "Security, privacy, fraud, interoperability and regulatory issues[cite: 2]." },
          { title: "Module 4: Implementation and review", detail: "Use-case evaluation, controls and implementation planning[cite: 2]." }
        ],
        practicalOutput: "A fintech use-case assessment with risks and safeguards[cite: 2]."
      },
      {
        title: "Healthcare Management & Administration",
        subtitle: "Professional development in healthcare administration",
        duration: "To be confirmed[cite: 2]",
        badge: "Healthcare",
        description: "Focus on service operations, patient experience, workforce coordination, quality improvement and resource management[cite: 2].",
        bestFor: "Healthcare administrators, clinic managers, operations staff, quality teams and service coordinators[cite: 2].",
        learningOutcomes: [
          "Explain health-service systems, patient pathways and operational priorities[cite: 2]."
        ],
        modules: [
          { title: "Module 1: Core concepts", detail: "Health-service systems, patient pathways and operational priorities[cite: 2]." },
          { title: "Module 2: Governance and good practice", detail: "Staffing, scheduling, records and resource coordination[cite: 2]." },
          { title: "Module 3: Applied methods", detail: "Quality, patient experience, privacy and risk management[cite: 2]." },
          { title: "Module 4: Implementation and review", detail: "Performance indicators, service improvement and change planning[cite: 2]." }
        ],
        practicalOutput: "A sample service-process map and quality-improvement plan[cite: 2]."
      },
      {
        title: "Hospitality & Tourism",
        subtitle: "Professional development in hospitality & tourism",
        duration: "To be confirmed[cite: 2]",
        badge: "Hospitality",
        description: "Develop service, operations and destination-management skills across accommodation, food service and visitor experiences[cite: 2].",
        bestFor: "Hospitality supervisors, tourism operators, destination teams, event staff and customer-experience professionals[cite: 2].",
        learningOutcomes: [
          "Explain guest journeys, service standards and destination context[cite: 2]."
        ],
        modules: [
          { title: "Module 1: Core concepts", detail: "Guest journeys, service standards and destination context[cite: 2]." },
          { title: "Module 2: Governance and good practice", detail: "Front-office, housekeeping, food-service and experience coordination[cite: 2]." },
          { title: "Module 3: Applied methods", detail: "Complaint recovery, safety, sustainability and accessibility[cite: 2]." },
          { title: "Module 4: Implementation and review", detail: "Demand, reviews, performance indicators and service improvement[cite: 2]." }
        ],
        practicalOutput: "A guest-journey map and service-quality improvement checklist[cite: 2]."
      },
      {
        title: "Humanitarian Development",
        subtitle: "Professional development in humanitarian aid",
        duration: "To be confirmed[cite: 2]",
        badge: "Humanitarian",
        description: "Introduce humanitarian principles and the programme cycle, including needs assessment, inclusive design and safeguarding[cite: 2].",
        bestFor: "NGO and humanitarian staff, programme officers, project managers, community workers and partners[cite: 2].",
        learningOutcomes: [
          "Explain humanitarian principles, context analysis and needs assessment[cite: 2]."
        ],
        modules: [
          { title: "Module 1: Core concepts", detail: "Humanitarian principles, context analysis and needs assessment[cite: 2]." },
          { title: "Module 2: Governance and good practice", detail: "Programme design, inclusion, protection and safeguarding[cite: 2]." },
          { title: "Module 3: Applied methods", detail: "Coordination, logistics, accountability and community feedback[cite: 2]." },
          { title: "Module 4: Implementation and review", detail: "Monitoring, learning, reporting and transition or recovery planning[cite: 2]." }
        ],
        practicalOutput: "A draft project logic and community-feedback plan[cite: 2]."
      },
      {
        title: "Information Technology",
        subtitle: "Professional development in information technology",
        duration: "To be confirmed[cite: 2]",
        badge: "IT",
        description: "Provide a workplace-oriented overview of IT services, systems, data, security and service management[cite: 2].",
        bestFor: "Administrative and operations staff, IT support teams, managers and professionals seeking an overview of IT[cite: 2].",
        learningOutcomes: [
          "Explain IT infrastructure, operating systems, networks and applications[cite: 2]."
        ],
        modules: [
          { title: "Module 1: Core concepts", detail: "IT infrastructure, operating systems, networks and applications[cite: 2]." },
          { title: "Module 2: Governance and good practice", detail: "Accounts, data handling, access management and support workflows[cite: 2]." },
          { title: "Module 3: Applied methods", detail: "Troubleshooting, service requests, documentation and continuity[cite: 2]." },
          { title: "Module 4: Implementation and review", detail: "Security awareness, asset management and technology planning[cite: 2]." }
        ],
        practicalOutput: "A basic IT asset/service register and support-escalation workflow[cite: 2]."
      },
      {
        title: "Media and Telecom",
        subtitle: "Professional development in media & telecommunications",
        duration: "To be confirmed[cite: 2]",
        badge: "Media & Telecom",
        description: "Explore media and telecommunications ecosystems, service delivery, audience needs, infrastructure and digital channels[cite: 2].",
        bestFor: "Media managers, telecom operations teams, communications staff, service planners and policy professionals[cite: 2].",
        learningOutcomes: [
          "Explain media and telecom value chains, services and audiences[cite: 2]."
        ],
        modules: [
          { title: "Module 1: Core concepts", detail: "Media and telecom value chains, services and audiences[cite: 2]." },
          { title: "Module 2: Governance and good practice", detail: "Network/service operations, content distribution and customer experience[cite: 2]." },
          { title: "Module 3: Applied methods", detail: "Regulation awareness, privacy, reliability and incident communication[cite: 2]." },
          { title: "Module 4: Implementation and review", detail: "Digital trends, performance measures and strategic planning[cite: 2]." }
        ],
        practicalOutput: "A service or audience analysis with improvement priorities[cite: 2]."
      },
      {
        title: "National Security Management",
        subtitle: "Professional development in national security",
        duration: "To be confirmed[cite: 2]",
        badge: "Security",
        description: "Provide a governance-focused overview of strategic risk, inter-agency coordination, resilience and decision-making[cite: 2].",
        bestFor: "Policy analysts, authorised public-sector managers, risk professionals and inter-agency staff[cite: 2].",
        learningOutcomes: [
          "Explain security governance, threat assessment concepts and strategic context[cite: 2]."
        ],
        modules: [
          { title: "Module 1: Core concepts", detail: "Security governance, threat assessment concepts and strategic context[cite: 2]." },
          { title: "Module 2: Governance and good practice", detail: "Coordination, information governance and decision structures[cite: 2]." },
          { title: "Module 3: Applied methods", detail: "Resilience, continuity, legal safeguards and accountable oversight[cite: 2]." },
          { title: "Module 4: Implementation and review", detail: "Scenario planning, strategic communication and review[cite: 2]." }
        ],
        practicalOutput: "A high-level strategic-risk register and coordination map[cite: 2]."
      },
      {
        title: "Police and Law Enforcement",
        subtitle: "Professional development in law enforcement",
        duration: "To be confirmed[cite: 2]",
        badge: "Law Enforcement",
        description: "Focus on leadership, service accountability, ethical decision-making, community engagement and performance[cite: 2].",
        bestFor: "Law-enforcement supervisors, public-safety administrators, trainers and accountability personnel[cite: 2].",
        learningOutcomes: [
          "Explain public-service role, ethics, accountability and rights-based practice[cite: 2]."
        ],
        modules: [
          { title: "Module 1: Core concepts", detail: "Public-service role, ethics, accountability and rights-based practice[cite: 2]." },
          { title: "Module 2: Governance and good practice", detail: "Leadership, supervision, records and organisational procedures[cite: 2]." },
          { title: "Module 3: Applied methods", detail: "Community engagement, communication and complaint handling[cite: 2]." },
          { title: "Module 4: Implementation and review", detail: "Performance review, learning, wellbeing and improvement planning[cite: 2]." }
        ],
        practicalOutput: "A supervisory reflection and service-accountability action plan[cite: 2]."
      },
      {
        title: "Public Sector Management & Policy",
        subtitle: "Professional development in public administration",
        duration: "To be confirmed[cite: 2]",
        badge: "Public Policy",
        description: "Build skills in policy analysis, public-service delivery, stakeholder consultation, implementation and accountability[cite: 2].",
        bestFor: "Public officials, policy analysts, programme managers, local-government staff and leaders[cite: 2].",
        learningOutcomes: [
          "Explain public-sector context, policy problems and evidence needs[cite: 2]."
        ],
        modules: [
          { title: "Module 1: Core concepts", detail: "Public-sector context, policy problems and evidence needs[cite: 2]." },
          { title: "Module 2: Governance and good practice", detail: "Policy options, consultation, impact and feasibility analysis[cite: 2]." },
          { title: "Module 3: Applied methods", detail: "Implementation planning, budgets, institutions and accountability[cite: 2]." },
          { title: "Module 4: Implementation and review", detail: "Service indicators, evaluation, reporting and policy learning[cite: 2]." }
        ],
        practicalOutput: "A concise policy brief with options and implementation measures[cite: 2]."
      },
      {
        title: "Ships and Ports Management",
        subtitle: "Professional development in maritime operations",
        duration: "To be confirmed[cite: 2]",
        badge: "Maritime",
        description: "Introduce port and maritime operations, cargo flows, stakeholder coordination, safety, security and service performance[cite: 2].",
        bestFor: "Port administrators, shipping coordinators, logistics teams, terminal supervisors and maritime professionals[cite: 2].",
        learningOutcomes: [
          "Explain port ecosystem, vessel calls, cargo operations and documentation[cite: 2]."
        ],
        modules: [
          { title: "Module 1: Core concepts", detail: "Port ecosystem, vessel calls, cargo operations and documentation[cite: 2]." },
          { title: "Module 2: Governance and good practice", detail: "Terminal coordination, logistics interfaces and capacity planning[cite: 2]." },
          { title: "Module 3: Applied methods", detail: "Safety, environmental controls, security and incident readiness[cite: 2]." },
          { title: "Module 4: Implementation and review", detail: "Service levels, performance indicators and operational improvement[cite: 2]." }
        ],
        practicalOutput: "A port-process map and operational readiness checklist[cite: 2]."
      },
      {
        title: "Social Insurance and Retirement",
        subtitle: "Professional development in social insurance",
        duration: "To be confirmed[cite: 2]",
        badge: "Social Protection",
        description: "Explain the purpose and administration of social insurance and retirement benefits, including contributions and governance[cite: 2].",
        bestFor: "HR teams, benefits administrators, payroll staff, public-service personnel and policy professionals[cite: 2].",
        learningOutcomes: [
          "Explain social insurance and retirement-system principles[cite: 2]."
        ],
        modules: [
          { title: "Module 1: Core concepts", detail: "Social insurance and retirement-system principles[cite: 2]." },
          { title: "Module 2: Governance and good practice", detail: "Contributions, eligibility, records and benefit administration[cite: 2]." },
          { title: "Module 3: Applied methods", detail: "Communication, service quality, privacy and dispute escalation[cite: 2]." },
          { title: "Module 4: Implementation and review", detail: "Scheme governance, reporting and policy or process improvement[cite: 2]." }
        ],
        practicalOutput: "A benefits-process map and employee communication checklist[cite: 2]."
      },
      {
        title: "Traffic Engineering & Management",
        subtitle: "Professional development in traffic management",
        duration: "To be confirmed[cite: 2]",
        badge: "Transport",
        description: "Introduce the planning and operational principles used to manage road networks, traffic flow and road safety[cite: 2].",
        bestFor: "Transport planners, municipal staff, traffic operations teams, civil engineers and road-safety professionals[cite: 2].",
        learningOutcomes: [
          "Explain traffic-flow basics, road-user needs and network context[cite: 2]."
        ],
        modules: [
          { title: "Module 1: Core concepts", detail: "Traffic-flow basics, road-user needs and network context[cite: 2]." },
          { title: "Module 2: Governance and good practice", detail: "Data collection, congestion analysis and intersection concepts[cite: 2]." },
          { title: "Module 3: Applied methods", detail: "Road safety, demand management and public communication[cite: 2]." },
          { title: "Module 4: Implementation and review", detail: "Performance monitoring, intervention evaluation and planning[cite: 2]." }
        ],
        practicalOutput: "A traffic-problem assessment worksheet and intervention comparison[cite: 2]."
      },
      {
        title: "Urban Planning & Development",
        subtitle: "Professional development in urban planning",
        duration: "To be confirmed[cite: 2]",
        badge: "Urban Planning",
        description: "Explore integrated urban planning through land use, transport, housing, public space, infrastructure and resilience[cite: 2].",
        bestFor: "Urban planners, local-government professionals, development practitioners, engineers and community teams[cite: 2].",
        learningOutcomes: [
          "Explain urban systems, land use, demographic trends and spatial evidence[cite: 2]."
        ],
        modules: [
          { title: "Module 1: Core concepts", detail: "Urban systems, land use, demographic trends and spatial evidence[cite: 2]." },
          { title: "Module 2: Governance and good practice", detail: "Housing, mobility, infrastructure and public-space planning[cite: 2]." },
          { title: "Module 3: Applied methods", detail: "Participation, inclusion, environmental resilience and governance[cite: 2]." },
          { title: "Module 4: Implementation and review", detail: "Development scenarios, implementation, indicators and review[cite: 2]." }
        ],
        practicalOutput: "A neighbourhood planning brief with stakeholder and indicator maps[cite: 2]."
      },
      {
        title: "Government Relations & Public Affairs",
        subtitle: "Professional development in public affairs",
        duration: "To be confirmed[cite: 2]",
        badge: "Public Affairs",
        description: "Develop a transparent and ethical approach to engaging public institutions, understanding policy processes[cite: 2].",
        bestFor: "Public-affairs teams, NGO leaders, corporate communications staff, association managers and advocates[cite: 2].",
        learningOutcomes: [
          "Explain government structures, policy cycles and stakeholder mapping[cite: 2]."
        ],
        modules: [
          { title: "Module 1: Core concepts", detail: "Government structures, policy cycles and stakeholder mapping[cite: 2]." },
          { title: "Module 2: Governance and good practice", detail: "Evidence-based position papers and engagement planning[cite: 2]." },
          { title: "Module 3: Applied methods", detail: "Meetings, consultations, coalition work and public communication[cite: 2]." },
          { title: "Module 4: Implementation and review", detail: "Ethics, disclosure, compliance and engagement evaluation[cite: 2]." }
        ],
        practicalOutput: "A stakeholder map and transparent public-affairs engagement plan[cite: 2]."
      }
    ]
  }
];