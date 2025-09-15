import { Question } from "@/components/QuestionCard";

export const assessmentSections = [
  {
    id: "communication",
    name: "Communication Intelligence",
    description: "Assess your clarity, listening style, tone awareness, and feedback handling"
  },
  {
    id: "collaboration", 
    name: "Collaboration Intelligence",
    description: "Evaluate team adaptability, trust-building, conflict management, and shared ownership"
  },
  {
    id: "contextual",
    name: "Contextual Social Intelligence",
    description: "Understand your effectiveness across different environments and communication contexts"
  },
  {
    id: "coach",
    name: "COACH Diagnostic",
    description: "Comprehensive analysis using our proprietary COACH framework"
  }
];

export const questions: Question[] = [
  // Communication Intelligence Section
  {
    id: "comm-1",
    type: "multiple-choice",
    section: "Communication Intelligence",
    trait: "Clarity",
    question: "You're presenting an idea in a team meeting. A colleague says, 'Sorry, can you clarify what you meant about that second point?'",
    description: "What do you most likely do?",
    options: [
      { id: "a", text: "Rephrase the point using simpler terms", value: 4 },
      { id: "b", text: "Repeat the same thing, slower", value: 2 },
      { id: "c", text: "Say, 'Let's move on and I'll email details'", value: 1 },
      { id: "d", text: "Ask, 'Which part was unclear?' and then clarify", value: 5 }
    ]
  },
  {
    id: "comm-2", 
    type: "multiple-choice",
    section: "Communication Intelligence",
    trait: "Tone Awareness",
    question: "You're writing a message to a teammate who missed a deadline. Choose the most effective tone:",
    options: [
      { id: "a", text: "You were late again — this keeps happening.", value: 1 },
      { id: "b", text: "Hey, just checking in. Everything okay with the deadline?", value: 5 },
      { id: "c", text: "I guess deadlines don't apply to you?", value: 1 },
      { id: "d", text: "Your delay caused issues. Please explain.", value: 3 }
    ]
  },
  {
    id: "comm-3",
    type: "slider",
    section: "Communication Intelligence", 
    trait: "Listening Style",
    question: "During conversations, I find myself mentally preparing what to say while the other person is speaking.",
    min: 0,
    max: 10,
    minLabel: "Never",
    maxLabel: "Always"
  },
  {
    id: "comm-4",
    type: "likert",
    section: "Communication Intelligence",
    trait: "Feedback Handling", 
    question: "When receiving constructive criticism, I remain calm and ask clarifying questions.",
    description: "Rate your agreement with this statement"
  },

  // Collaboration Intelligence Section
  {
    id: "collab-1",
    type: "multiple-choice",
    section: "Collaboration Intelligence",
    trait: "Conflict Management",
    question: "A team member disagrees with your plan in front of others. What's your first move?",
    options: [
      { id: "a", text: "Calmly ask them to elaborate their view", value: 5 },
      { id: "b", text: "Defend your plan with evidence immediately", value: 3 },
      { id: "c", text: "Say, 'Let's move this offline'", value: 4 },
      { id: "d", text: "Express frustration and shift topics", value: 1 }
    ]
  },
  {
    id: "collab-2",
    type: "likert", 
    section: "Collaboration Intelligence",
    trait: "Team Adaptability",
    question: "I can easily adapt my communication style to different team members.",
    description: "Rate your agreement with this statement"
  },
  {
    id: "collab-3",
    type: "multiple-choice",
    section: "Collaboration Intelligence", 
    trait: "Shared Ownership",
    question: "A project fails partially due to your oversight. How do you respond in the team debrief?",
    options: [
      { id: "a", text: "Own it openly and suggest learnings", value: 5 },
      { id: "b", text: "Stay silent and let it pass", value: 1 },
      { id: "c", text: "Emphasize others' roles too", value: 3 },
      { id: "d", text: "Say it wasn't your responsibility", value: 1 }
    ]
  },
  {
    id: "collab-4",
    type: "slider",
    section: "Collaboration Intelligence",
    trait: "Trust Building",
    question: "How consistently do you follow through on commitments made to teammates?",
    min: 1,
    max: 10,
    minLabel: "Rarely consistent",
    maxLabel: "Always consistent"
  },

  // Contextual Social Intelligence Section  
  {
    id: "context-1",
    type: "multiple-choice",
    section: "Contextual Intelligence",
    trait: "Conflict Navigation",
    question: "You feel defensive in a high-stress meeting. What helps you stay grounded?",
    options: [
      { id: "a", text: "Pause before speaking", value: 5 },
      { id: "b", text: "Speak louder to assert yourself", value: 1 },
      { id: "c", text: "Withdraw until it's over", value: 2 },
      { id: "d", text: "Match the other's energy to stay in control", value: 2 }
    ]
  },
  {
    id: "context-2",
    type: "slider",
    section: "Contextual Intelligence",
    trait: "Digital Communication",
    question: "When I disagree with someone over email or chat, I choose my words carefully to preserve tone.",
    min: 0,
    max: 10,
    minLabel: "Never",
    maxLabel: "Always"
  },
  {
    id: "context-3",
    type: "likert",
    section: "Contextual Intelligence", 
    trait: "Meeting Dynamics",
    question: "I contribute meaningfully to group discussions without dominating the conversation.",
    description: "Rate your agreement with this statement"
  },

  // COACH Diagnostic Section
  {
    id: "coach-1",
    type: "multiple-choice",
    section: "COACH Diagnostic",
    trait: "Alignment & Empathy", 
    question: "A teammate is visibly frustrated. What do you do?",
    options: [
      { id: "a", text: "Ask privately if they want to talk", value: 5 },
      { id: "b", text: "Focus on your tasks and avoid involvement", value: 1 },
      { id: "c", text: "Mention it casually to another colleague", value: 2 },
      { id: "d", text: "Say, 'Try not to bring that energy to the team'", value: 1 }
    ]
  },
  {
    id: "coach-2",
    type: "likert",
    section: "COACH Diagnostic",
    trait: "Openness & Feedback",
    question: "I actively seek feedback from colleagues to improve my collaboration skills.",
    description: "Rate your agreement with this statement"
  },
  {
    id: "coach-3",
    type: "slider",
    section: "COACH Diagnostic",
    trait: "Harmony & Follow-Through", 
    question: "How often do you check in with team members to ensure everyone feels heard and included?",
    min: 1,
    max: 10,
    minLabel: "Rarely",
    maxLabel: "Very frequently"
  }
];

export const getQuestionsBySection = (sectionId: string): Question[] => {
  return questions.filter(q => {
    const sectionName = assessmentSections.find(s => s.id === sectionId)?.name;
    return q.section === sectionName;
  });
};