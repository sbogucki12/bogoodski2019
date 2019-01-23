const resumeData =
    [
        {
            id: 0,
            header: "Developer / BSA",
            summary: 'Since August of 2018, I’ve worked as a remote employee for Yona-Brixtel, a Virginia-based federal government consultancy.  Among my business systems analyst responsibilities, I facilitated multi-day, in-person User Acceptance Testing (“UAT”) of pre-release software.  As a developer, I utilized Node.JS, ReactJS, MongoDB, OAUTH and other technologies to design and build a prototype application.  Successfully pitching the prototype to federal executives, Yona-Brixtel was awarded a federal contract to implement a production version of the prototype.   ',
            duties: ['Reviewed developer resumes, and conducted interviews for C#/.NET and JavaScript positions, made hiring recommendations to CEO, leading to final decisions.',
                'Implemented remote code repositories, developed version control work flows, and established branching techniques to ensure code integrity (utilizing BitBucket, git, and GitHub).',
                'Advised project manager on developer tasks in relation to the Software Development Life Cycle process (methodologies: Agile / Kanban).',
                'Wrote test scripts to support software UAT.',
                'Analyzed test results and related them to requirements in the software Functional Requirements Documents.',
                'Proposed Level of Effort estimates to guide feature/bug resolution planning.',
                'Participated in change management process, reporting test progress to federal stakeholders, including program executives.',
                'Facilitated Change Control Board meetings among software user groups, business process leaders, the contract development team, and federal executives.',
                'Communicated effectively with the business process owners to convey results of UATs, and record approval/rejection of test results (utilized Atlassian Jira).'
            ]
        },
        {
            id: 1,
            header: "Independent Web Developer",
            summary: 'Desiring to return to hands-on technical work, in June, 2017, I voluntarily left my position as a manager in the Federal Aviation Administration in order to make my side project, web development, my full-time profession.  For a year, I performed freelance and contract web development work.  To enhance my skills, I graduated from a 12-week, in-person coding bootcamp and, subsequently, completed numerous additional online courses.',
            duties: ['Primary expertise: HTML, CSS, JavaScript, ReactJS, Material - UI.',
                'Capable with: .NET Core(Web API, MVC, Razor), Entity Framework, LINQ, Node.js, Redux, SQL, noSQL(MongoDB, MongooseJS), T - SQL.',
                'Experience with: Angular and AngularJS, .NET Framework, TypeScript, Redis.',
                'Tools used: git, GitHub, BitBucket, Jira, VSCode, Visual Studio, Azure DevOps(VSTS), Webpack, Babel, Azure (SQL, CosmosDB, Document and Blob Storage), AWS (S3 buckets and Heroku), Slack, NPM, NuGet, mLab.'
            ]
        },
        {
            id: 2,
            header: "Manager",
            summary: 'Initially hired in 2010 as a management assistant in Washington, D.C., I served in various positions of progressively-increasing responsibility in the Federal Aviation Administration, and was ultimately promoted to manager of the Technical and Administrative Support Staff in the Los Angeles Aircraft Certification Office ("LAACO").',
            duties: ['Supervised ~15 administrative, aviation safety support, and IT personnel.',
                'Advised office manager on IT - related decisions.',
                'Oversaw engineer designee program, requiring regular communication and interaction with non - government engineering designees and industry stakeholders.',
                'Participated in office change management program to support implementation of data - driven and risk - based analytical decision - making.',
                'Served as acting office manager during direct supervisor’s absence.',
                'Managed the deployment of replacement IT hardware to office staff, and transition from Domino / Lotus to Outlook and Office 365 products.'
            ]
        },
        {
            id: 3,
            header: "Data Analyst",
            summary: 'After working at the federal headquarters in Washington, D.C., I was promoted into an opportunity at the LAACO, where my primary responsibility was to oversee and enhance an office-wide work-tracking system, based on a central MS Access database.  As a practice project (after leaving the FAA), I rebuilt that system, utilizing a SQL Server database deployed to Azure, a .NET Core (Web API, Entity Framework) middle-tier, and an AngularJS client-side app.',
            duties: [
                'Served as the LAACO ISO 9001 Quality Management System (QMS) Quality Representative.',
                'Conducted office metrics program.',
                'Completed research project, reviewing federal policy and guidance (the relevant Parts of 14 Code of Federal Regulations, FAA Orders, etc.) to produce flowchart depicting the entirety of the aircraft certification process (utilized Microsoft Vizio).',
                'Provided local ad - hoc IT support for office staff',
                'Managed several SharePoint sites.'
            ]
        },
        {
            id: 4,
            header: "Policy Analyst",
            summary: 'In my final position in D.C., I served in the role of Management Analyst with the duties of a policy analyst and, ultimately, worked with a partner to assist in producing an update to the FAA’s Compliance Philosophy – federal-level, regulatory policy - for its Aircraft Certification Service.',
            duties: [
                'With a partner, led the development of online and in-person training to assist FAA staff in understanding new Compliance Philosophy.',
                'Conducted online webinars to introduce new policy to FAA Aircraft Certification Service workforce.'
            ]
        },
        {
            id: 5,
            header: "Communications",
            summary: 'In early 2012, I achieved my first promotion in the FAA, which provided me the opportunity to lead communication activities for the Safety Management Systems (SMS) branch, as a Program Analyst.',
            duties: [
                'Site owner for several SharePoint sites.',
                'Produced quarterly newsletter distributed to the FAA Aircraft Certification Service workforce (utilized Microsoft Publisher).',
                'Performed updates to several inter - and intra - net sites, using mostly the organization’s internal content management system.',
                'Conducted site reviews for compliance to accessibility (including 508) requirements.',
                'Produced PowerPoint presentations in support of management for briefings to federal executives and directors.'
            ]
        },
        {
            id: 6,
            header: "Management Assistant",
            summary: 'After graduating college, I was provided an opportunity in 2010 with the Federal Aviation Administration as a Management Assistant.  In the FAA, I was fortunate to be initially supervised by a progressive manager – to whom I am forever grateful! – who provided me responsibilities and challenges beyond the scope of my daily duties.',
            duties: [
                'Provided direct administrative support to several federal offices, including their managers and staff.',
                'Periodically provided administrative support to the FAA Aircraft Certification Service executive office.',
                'Reviewed payroll and submitted time / attendance for processing.',
                'Set - up travel arrangements for federal managers and executives.',
                'Entered country clearance requests, working with the US State Department to facilitate international travel.'
            ]
        },
        {
            id: 7,
            header: "University of South Florida",
            summary: 'From January of 2006 until graduating in May of 2009, I studied at the University of South Florida in Tampa. #GoBulls!  I graduated Magna Cum Laude, defended and published (locally, at the USF Library) an Honors College senior thesis, and completed courses on Hebrew and Arabic.',
            duties: [
                'Academic Tutor - USF Athletics Department;',
                'Dual majors: International Studies and Religious Studies;',
                'Cumulative GPA: 3.82;',
                'Brother, Sigma Phi Epsilon.'
            ]
        },
        {
            id: 8,
            header: "US Army (Active Duty)",
            summary: 'From 2002 until Oct., 2005, I served in the U.S. Army as a Fire Support Specialist, more commonly referred to as a “Forward Observer” (MOS: 13F).  I was promoted to the Army’s initial supervisory rank, Sergeant, as rapidly as policy permitted (24 months), and led soldiers during real-world missions before my 21st birthday.',
            duties: [
                'Two combat tours in support of Operation Iraqi Freedom.',
                'Graduate, Army Primary Leadership and Development Course.',
                'Planned and communicated mission operation orders in combat environments.',
                'Maintained platoon’s communication equipment, including tools for cryptologic security, and ensured successful radio and digital transmissions during year - long combat tour.',
                'Consistently achieved maximum score on Army Physical Fitness Tests.',
                'Stationed: Ft.Stewart, GA; Ft.Carson, CO; Camp Hovey, South Korea.',
                'Honorably Discharged.'

            ]
        }
    ];

module.exports = resumeData; 