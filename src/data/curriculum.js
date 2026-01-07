// SOMBA Kickstart 12-Week Curriculum Data Structure
export const curriculum = [
    {
        id: 1,
        title: "Fundamentals",
        subtitle: "Laying the Foundation",
        description: "Define your ideal client and create your survey to understand their needs.",
        steps: [
            {
                id: "1-1",
                title: "Create Your Survey Sentence",
                type: "input",
                description: "Define the problem from your client's perspective. This sentence will be the foundation of your survey.",
                inputField: {
                    key: "surveySentence",
                    label: "Survey Sentence",
                    placeholder: "I help [ideal client] overcome [problem] so they can [desired result]...",
                    type: "textarea",
                    required: true
                },
                aiPrompt: "Help me write a Survey Sentence for my coaching business. I want to reach [your niche]."
            },
            {
                id: "1-2",
                title: "Privacy Policy Setup",
                type: "input",
                description: "Create or link your privacy policy for data collection compliance.",
                inputField: {
                    key: "privacyPolicyUrl",
                    label: "Privacy Policy URL",
                    placeholder: "https://yourwebsite.com/privacy-policy",
                    type: "url",
                    required: true
                },
                aiPrompt: "What should I include in my privacy policy for a coaching survey?"
            },
            {
                id: "1-3",
                title: "Promote Your Survey",
                type: "checklist",
                description: "Share your survey across all your channels to gather responses.",
                checklist: [
                    { key: "emailList", label: "Sent to Email List" },
                    { key: "facebook", label: "Posted on Facebook" },
                    { key: "instagram", label: "Shared on Instagram" },
                    { key: "linkedIn", label: "Posted on LinkedIn" },
                    { key: "groups", label: "Shared in Groups/Communities" }
                ],
                requiredCount: 3,
                aiPrompt: "Write me a social media post to promote my survey about [survey topic]."
            }
        ]
    },
    {
        id: 2,
        title: "Design",
        subtitle: "Crafting Your Offer",
        description: "Interview your ideal clients and design your irresistible course offer.",
        steps: [
            {
                id: "2-1",
                title: "Ideal Client Interview Findings",
                type: "input",
                description: "Document key insights from your ideal client interviews.",
                inputField: {
                    key: "interviewFindings",
                    label: "Interview Key Findings",
                    placeholder: "What are the top 3 problems your ideal clients face? What words do they use?",
                    type: "textarea",
                    required: true
                },
                contextKeys: ["surveySentence"],
                aiPrompt: "Based on my survey results about {surveySentence}, help me create interview questions."
            },
            {
                id: "2-2",
                title: "Course Name & Big Promise",
                type: "input",
                description: "Create a compelling course name and your big promise to clients.",
                inputField: {
                    key: "courseName",
                    label: "Course Name",
                    placeholder: "The [Transformation] Method for [Ideal Client]",
                    type: "text",
                    required: true
                },
                additionalFields: [
                    {
                        key: "bigPromise",
                        label: "Big Promise",
                        placeholder: "In X weeks, you will [specific transformation]...",
                        type: "textarea",
                        required: true
                    }
                ],
                contextKeys: ["surveySentence", "interviewFindings"],
                aiPrompt: "Help me create a course name based on: {surveySentence} and findings: {interviewFindings}"
            }
        ]
    },
    {
        id: 3,
        title: "Promotion",
        subtitle: "Launch Preparation",
        description: "Create your signup page and submit to the competition.",
        steps: [
            {
                id: "3-1",
                title: "Create Signup Page",
                type: "input",
                description: "Build your landing page to capture course signups.",
                inputField: {
                    key: "signupPageUrl",
                    label: "Signup Page URL",
                    placeholder: "https://yourdomain.com/signup",
                    type: "url",
                    required: true
                },
                contextKeys: ["courseName", "bigPromise"],
                aiPrompt: "Write compelling copy for my signup page for {courseName}. Promise: {bigPromise}"
            },
            {
                id: "3-2",
                title: "Submit to Competition",
                type: "checklist",
                description: "Submit your course details to the SOMBA Kickstart competition.",
                checklist: [
                    { key: "formSubmitted", label: "Competition form submitted" },
                    { key: "screenshotUploaded", label: "Signup page screenshot uploaded" },
                    { key: "socialProof", label: "Social proof collected (testimonials, signups)" }
                ],
                requiredCount: 2,
                aiPrompt: "What makes a winning SOMBA Kickstart competition entry?"
            }
        ]
    },
    {
        id: 4,
        title: "Execution",
        subtitle: "Content Creation",
        description: "Create and schedule your social media content to build anticipation.",
        steps: [
            {
                id: "4-1",
                title: "Social Media Content Plan",
                type: "input",
                description: "Plan your content strategy for the next 4 weeks.",
                inputField: {
                    key: "contentPlan",
                    label: "Content Themes",
                    placeholder: "Week 1: Problem awareness\nWeek 2: Solution teaser\nWeek 3: Social proof\nWeek 4: Launch",
                    type: "textarea",
                    required: true
                },
                contextKeys: ["courseName", "bigPromise", "surveySentence"],
                aiPrompt: "Create 3 Facebook posts promoting my course: {courseName}. Target audience from: {surveySentence}"
            }
        ]
    },
    {
        id: 5,
        title: "Module 1",
        subtitle: "Course Creation",
        description: "Record your first course module and gather initial feedback.",
        steps: [
            {
                id: "5-1",
                title: "Record Module 1",
                type: "checklist",
                description: "Complete and upload your first course module.",
                checklist: [
                    { key: "outlineCreated", label: "Module outline created" },
                    { key: "videoRecorded", label: "Video/audio recorded" },
                    { key: "uploaded", label: "Content uploaded to platform" },
                    { key: "feedbackRequested", label: "Requested feedback from beta users" }
                ],
                requiredCount: 3,
                aiPrompt: "Help me outline Module 1 for my course {courseName}."
            }
        ]
    },
    {
        id: 6,
        title: "Module 2",
        subtitle: "Deepening Content",
        description: "Build on Module 1 with deeper content and implementation steps.",
        steps: [
            {
                id: "6-1",
                title: "Record Module 2",
                type: "checklist",
                description: "Complete and upload your second course module.",
                checklist: [
                    { key: "outlineCreated", label: "Module outline created" },
                    { key: "videoRecorded", label: "Video/audio recorded" },
                    { key: "uploaded", label: "Content uploaded to platform" },
                    { key: "feedbackGathered", label: "Gathered Module 1 feedback" }
                ],
                requiredCount: 3,
                aiPrompt: "Help me outline Module 2 for my course {courseName}, building on Module 1."
            }
        ]
    },
    {
        id: 7,
        title: "Module 3",
        subtitle: "Advanced Strategies",
        description: "Introduce advanced concepts and strategies.",
        steps: [
            {
                id: "7-1",
                title: "Record Module 3",
                type: "checklist",
                description: "Complete and upload your third course module.",
                checklist: [
                    { key: "outlineCreated", label: "Module outline created" },
                    { key: "videoRecorded", label: "Video/audio recorded" },
                    { key: "uploaded", label: "Content uploaded to platform" },
                    { key: "liveQA", label: "Hosted live Q&A session" }
                ],
                requiredCount: 3,
                aiPrompt: "Help me outline Module 3 for my course {courseName}."
            }
        ]
    },
    {
        id: 8,
        title: "Module 4",
        subtitle: "Implementation",
        description: "Focus on implementation and action steps for your students.",
        steps: [
            {
                id: "8-1",
                title: "Record Module 4",
                type: "checklist",
                description: "Complete and upload your fourth course module.",
                checklist: [
                    { key: "outlineCreated", label: "Module outline created" },
                    { key: "videoRecorded", label: "Video/audio recorded" },
                    { key: "uploaded", label: "Content uploaded to platform" },
                    { key: "worksheetsCreated", label: "Worksheets/resources created" }
                ],
                requiredCount: 3,
                aiPrompt: "Help me create implementation worksheets for Module 4 of {courseName}."
            }
        ]
    },
    {
        id: 9,
        title: "Delivery",
        subtitle: "Live Sessions",
        description: "Deliver your course and engage with students.",
        steps: [
            {
                id: "9-1",
                title: "Host Celebration Call",
                type: "checklist",
                description: "Celebrate your students' progress and gather testimonials.",
                checklist: [
                    { key: "callScheduled", label: "Celebration call scheduled" },
                    { key: "callHosted", label: "Call hosted successfully" },
                    { key: "testimonialsCollected", label: "Testimonials collected" },
                    { key: "resultsDocumented", label: "Student results documented" }
                ],
                requiredCount: 3,
                aiPrompt: "Help me plan questions for my celebration call to gather great testimonials."
            }
        ]
    },
    {
        id: 10,
        title: "Feedback",
        subtitle: "Iteration",
        description: "Collect feedback and iterate on your course content.",
        steps: [
            {
                id: "10-1",
                title: "Course Feedback Analysis",
                type: "input",
                description: "Document the key feedback and improvements for your course.",
                inputField: {
                    key: "courseFeedback",
                    label: "Key Feedback & Improvements",
                    placeholder: "What worked well? What needs improvement? What will you change for the next cohort?",
                    type: "textarea",
                    required: true
                },
                aiPrompt: "Help me analyze my course feedback and prioritize improvements for {courseName}."
            }
        ]
    },
    {
        id: 11,
        title: "Upsell",
        subtitle: "Next Level Offer",
        description: "Create your upsell offer for graduating students.",
        steps: [
            {
                id: "11-1",
                title: "Design Upsell Offer",
                type: "input",
                description: "Create a compelling next-level offer for your students.",
                inputField: {
                    key: "upsellOffer",
                    label: "Upsell Offer Description",
                    placeholder: "What's the next step for students who complete your course? What transformation will they get?",
                    type: "textarea",
                    required: true
                },
                contextKeys: ["courseName", "bigPromise", "courseFeedback"],
                aiPrompt: "Help me create an upsell offer for students completing {courseName}."
            }
        ]
    },
    {
        id: 12,
        title: "Scale",
        subtitle: "Future Growth",
        description: "Plan your scaling strategy and next launch.",
        steps: [
            {
                id: "12-1",
                title: "Scaling Strategy",
                type: "input",
                description: "Document your plan for scaling and growing your course business.",
                inputField: {
                    key: "scalingPlan",
                    label: "Scaling Plan",
                    placeholder: "How will you scale? Evergreen? Live launches? Group programs? One-on-one?",
                    type: "textarea",
                    required: true
                },
                contextKeys: ["courseName", "upsellOffer"],
                aiPrompt: "Help me create a scaling strategy for {courseName} and my coaching business."
            },
            {
                id: "12-2",
                title: "Program Completion",
                type: "checklist",
                description: "Celebrate completing the SOMBA Kickstart program!",
                checklist: [
                    { key: "courseCreated", label: "Course fully created and delivered" },
                    { key: "salesMade", label: "Made your first course sales" },
                    { key: "testimonialsGathered", label: "Gathered student testimonials" },
                    { key: "nextLaunchPlanned", label: "Next launch date planned" },
                    { key: "celebrated", label: "Celebrated your success! 🎉" }
                ],
                requiredCount: 4,
                aiPrompt: "I completed SOMBA Kickstart! Help me plan my next launch for {courseName}."
            }
        ]
    }
];

// Helper function to get total steps across all weeks
export const getTotalSteps = () => {
    return curriculum.reduce((total, week) => total + week.steps.length, 0);
};

// Helper function to get step by week and step index
export const getStep = (weekIndex, stepIndex) => {
    const week = curriculum[weekIndex];
    if (!week) return null;
    return week.steps[stepIndex] || null;
};
