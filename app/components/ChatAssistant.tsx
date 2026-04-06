"use client";

import { useState, useRef, useEffect } from "react";

const WHATSAPP_NUMBER = "919910931384";

type Message = {
  role: "bot" | "user";
  text: string;
  showWhatsApp?: boolean;
  whatsAppQuery?: string;
};

const QUICK_REPLIES = [
  "What services do you offer?",
  "How much do you charge?",
  "How long does it take?",
  "Can I get PR for Canada?",
  "Student visa process?",
  "What documents do I need?",
  "Do you guarantee approval?",
  "Where is your office?",
];

const KB: { patterns: RegExp[]; answer: string; showWhatsApp?: boolean }[] = [
  // Greetings
  {
    patterns: [/^(hello|hi|hey|good\s*(morning|afternoon|evening)|namaste|hii+|helo)/i],
    answer:
      "Hello! Welcome to JOGgliders. I'm JOGbot, your immigration assistant.\n\nYou can ask me about visas, PR, fees, timelines, documents, or anything else. How can I help you today?",
  },
  {
    patterns: [/thank(s| you)/i],
    answer:
      "You're most welcome! Feel free to ask anytime. We're here to make your immigration journey smooth and stress-free.",
  },

  // Services
  {
    patterns: [/services?/i, /what.*(do|offer|provide)/i, /help.*with/i, /what can/i],
    answer:
      "We offer a full range of immigration services:\n\n• Migration Visa (PR) — Canada, Australia, Germany, UK\n• Student Visa — UK, Canada, Australia & more\n• Work Visa — skilled worker routes\n• Visitor / Tourist Visa\n• Spouse & Family Visa\n• PR & Citizenship guidance\n\nAll services are end-to-end — from eligibility check to visa stamp.",
  },

  // Countries
  {
    patterns: [/countr(y|ies)/i, /which.*countr/i, /destination/i, /where.*can/i],
    answer:
      "We handle visas for 20+ countries including:\n\n🇨🇦 Canada  🇦🇺 Australia  🇬🇧 UK  🇩🇪 Germany  🇺🇸 USA  🇳🇿 New Zealand  🇸🇬 Singapore  🇮🇪 Ireland  and many more.\n\nVisit our Countries page for the complete list.",
  },

  // Canada
  {
    patterns: [/canada/i],
    answer:
      "Canada is one of our most popular destinations. We handle:\n\n• Express Entry (FSW, CEC, FST)\n• Provincial Nominee Programs (PNP)\n• Student & Work visas\n• Spousal sponsorship\n\nCanada PR processing typically takes 6–12 months. Want to check your eligibility?",
  },

  // Australia
  {
    patterns: [/australia/i],
    answer:
      "For Australia we cover:\n\n• SkillSelect / Points-based PR\n• Employer-sponsored visas (482, 186)\n• Student visas\n• Visitor & tourist visas\n\nAustralia PR can take 12–24 months depending on your occupation and state nomination.",
  },

  // UK
  {
    patterns: [/\buk\b|united kingdom|britain/i],
    answer:
      "For the UK we handle:\n\n• Skilled Worker Visa\n• Student Visa (Tier 4)\n• Visitor Visa\n• Family / Spouse Visa\n• Indefinite Leave to Remain (ILR)\n\nUK Skilled Worker visas can be processed in 3–8 weeks with a valid job offer.",
  },

  // Germany
  {
    patterns: [/germany|german/i],
    answer:
      "Germany is a great choice for skilled professionals. We assist with:\n\n• Germany Blue Card (for degree holders)\n• Job Seeker Visa\n• Work & Employment Visa\n• Student Visa\n\nGermany Blue Card is one of the fastest PR routes in Europe.",
  },

  // Student visa
  {
    patterns: [/student.*visa/i, /study.*abroad/i, /university|college|masters?|bachelor/i, /ielts|pte|toefl/i],
    answer:
      "Our student visa service covers:\n\n• University shortlisting & application\n• Admission letter guidance\n• Visa documentation & filing\n• Pre-departure briefing\n\nPopular destinations: UK, Canada, Australia, Germany.\n\nLanguage test (IELTS/PTE) scores are usually required. We guide you through the full process.",
  },

  // Work visa
  {
    patterns: [/work.*visa/i, /job.*visa/i, /employment.*visa/i, /skilled.*worker/i, /work.*abroad/i],
    answer:
      "Our work visa assistance includes:\n\n• Identifying the right visa category\n• Employer sponsorship guidance\n• Full documentation support\n• Application filing & tracking\n\nWe cover work visas for Canada, UK, Australia, Germany, UAE & more.",
  },

  // Visitor visa
  {
    patterns: [/visitor.*visa/i, /tourist.*visa/i, /travel.*visa/i, /tourism/i, /vacation/i, /holiday/i],
    answer:
      "We process visitor & tourist visas for most countries. Typical timelines:\n\n• Schengen (Europe): 2–4 weeks\n• UK: 3–6 weeks\n• USA: varies\n• Canada: 4–8 weeks\n• Australia: 2–4 weeks\n\nWe handle all documentation and cover letter preparation.",
  },

  // PR / Migration
  {
    patterns: [/\bpr\b|permanent residen|migrate|migration|immigrat/i],
    answer:
      "Permanent Residency (PR) is our speciality. Popular pathways:\n\n• Canada — Express Entry, PNP\n• Australia — SkillSelect, State Nomination\n• Germany — Blue Card → PR after 21–33 months\n• UK — Indefinite Leave to Remain (ILR) after 5 years\n\nBook a free eligibility check and we'll find the best pathway for your profile.",
  },

  // Spouse / family
  {
    patterns: [/spouse.*visa|family.*visa|dependent.*visa|reunite|husband|wife|partner/i],
    answer:
      "We handle all family-based immigration:\n\n• Spouse / Partner visa\n• Dependent child visa\n• Parent visa\n• Family reunion applications\n\nWe manage the entire process so you can focus on reuniting with your loved ones.",
  },

  // Fees / cost
  {
    patterns: [/fee|cost|charge|price|how much|pricing|rate/i],
    answer:
      "Our fees depend on the visa type and complexity of your case. We are fully transparent — all charges are discussed and agreed before you engage with us.\n\nThere are no hidden fees or surprise charges.\n\nContact us for a personalised quote based on your specific requirements.",
  },

  // Processing time
  {
    patterns: [/how long|processing time|timeline|duration|wait/i],
    answer:
      "Typical processing times:\n\n• Visitor visa — 2–6 weeks\n• Student visa — 4–8 weeks\n• Work visa — 4–12 weeks\n• PR applications — 6–24 months\n\nTimes vary by country and embassy workload. We give you a realistic timeline upfront before you begin.",
  },

  // Documents
  {
    patterns: [/document|paperwork|requirement|checklist|passport|certificate/i],
    answer:
      "Common documents required:\n\n• Valid passport (6+ months validity)\n• Educational certificates\n• Work experience letters\n• Bank statements (last 6 months)\n• Passport-size photographs\n• Language test scores (IELTS/PTE)\n\nAfter your consultation, we provide a complete personalised checklist based on your visa type.",
  },

  // Success rate / guarantee
  {
    patterns: [/success.*rate|guarantee|approval|reject.*chance|chance.*success/i],
    answer:
      "We maintain a 98% success rate across 50,000+ processed visa applications.\n\nNo ethical consultancy can guarantee approval — that decision rests with immigration authorities. However, our thorough preparation and attention to detail gives your application the strongest possible chance.",
  },

  // Rejection / refusal
  {
    patterns: [/reject(ed)?|refus(al|ed)|denied|visa.*reject/i],
    answer:
      "If your visa is rejected, don't worry — it's not the end.\n\nWe will:\n• Analyse the refusal reason carefully\n• Advise on appeal, reapplication, or alternate routes\n• Strengthen your application for the next attempt\n\nMany of our clients have successfully received visas after an initial rejection.",
  },

  // Eligibility / free check
  {
    patterns: [/eligib|free.*check|assessment|qualify|profile.*check|am i eligible/i],
    answer:
      "You can start with our free eligibility check! We assess your:\n\n• Education & qualifications\n• Work experience\n• Language proficiency\n• Age & financial profile\n\nBased on this, we recommend the most suitable visa pathway for you. No obligation whatsoever.",
  },

  // Post-landing support
  {
    patterns: [/post.*landing|after.*visa|settle|bank account|SIN|NIN|after.*arrival/i],
    answer:
      "Yes, we offer post-landing support too! This includes:\n\n• Address registration guidance\n• SIN / NIN application (Canada/UK)\n• Bank account opening tips\n• Local settling-in advice\n\nWe're with you even after your visa is approved.",
  },

  // Office / location
  {
    patterns: [/office|location|address|where.*office|visit.*office|find.*you/i],
    answer:
      "Our office is located at:\n\n📍 Near Badhkal Mor Metro Station\nSector 19, Faridabad, Haryana\n\n🕘 Monday to Saturday — 9 AM to 6 PM\n\nYou can walk in or book an appointment in advance.",
  },

  // Contact
  {
    patterns: [/contact|phone|call|email|reach|number|helpline/i],
    answer:
      "You can reach us through:\n\n📞 +91-9910931384 / 8920409936\n📠 0129-411-6107 (Landline)\n📧 admin@joggliders.com\n\nOffice hours: Mon–Sat, 9 AM – 6 PM\n\nOr click below to chat with us directly on WhatsApp.",
    showWhatsApp: true,
  },

  // About
  {
    patterns: [/about|who.*are|company|since|history|experience|founded/i],
    answer:
      "JOGgliders has been trusted immigration & visa consultancy since 2016.\n\n• 50,000+ visas processed\n• 98% success rate\n• 20+ destination countries\n• Based in Faridabad, Haryana\n\nOur team of certified consultants provides honest, transparent guidance tailored to your goals.",
  },

  // Appointment / booking
  {
    patterns: [/appointment|book|schedule|consultation|meeting|slot/i],
    answer:
      "You can book a free consultation with our experts:\n\n📞 Call us at +91-9910931384\n📧 Email admin@joggliders.com\n💬 Or message us on WhatsApp\n\nWe're available Mon–Sat, 9 AM – 6 PM. Walk-ins are also welcome at our Faridabad office.",
    showWhatsApp: true,
  },

  // Express Entry
  {
    patterns: [/express.*entry|CRS|draw|points.*based/i],
    answer:
      "Canada's Express Entry is a points-based immigration system. Your CRS (Comprehensive Ranking System) score determines your invitation to apply.\n\nWe help you:\n• Calculate your CRS score\n• Improve your profile (language, education, job offer)\n• Apply under FSW, CEC, or FST stream\n\nTypical processing: 6 months after ITA.",
  },

  // IELTS
  {
    patterns: [/ielts|language.*test|english.*test|band/i],
    answer:
      "Most immigration pathways require an English language test (IELTS or PTE).\n\nTypical minimum scores:\n• Canada PR (Express Entry): CLB 7 = IELTS 6.0 each band\n• UK Skilled Worker: B1 level\n• Australia PR: varies by stream\n\nWe guide you on required scores for your specific pathway.",
  },

  // WhatsApp / speak to agent
  {
    patterns: [/whatsapp|speak.*agent|human|talk.*person|real person|consultant/i],
    answer: "Sure! Connect with our immigration consultants directly on WhatsApp:",
    showWhatsApp: true,
  },
];

function getBotReply(userText: string): Message {
  const trimmed = userText.trim();
  for (const entry of KB) {
    if (entry.patterns.some((p) => p.test(trimmed))) {
      return {
        role: "bot",
        text: entry.answer,
        showWhatsApp: entry.showWhatsApp,
        whatsAppQuery: entry.showWhatsApp ? trimmed : undefined,
      };
    }
  }
  return {
    role: "bot",
    text: "Thank you for reaching out to JOGgliders! That query is best handled by one of our immigration consultants who can give you accurate, personalised guidance.\n\nPlease connect with our team on WhatsApp — we typically respond within a few minutes during business hours (Mon–Sat, 9 AM – 6 PM).",
    showWhatsApp: true,
    whatsAppQuery: trimmed,
  };
}

function WhatsAppButton({ query }: { query?: string }) {
  const prefilledText = query
    ? `Hello JOGgliders! I have a query: "${query}"`
    : "Hello JOGgliders! I'd like to speak with a consultant.";
  const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(prefilledText)}`;
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-2 mt-3 bg-[#25D366] hover:bg-[#20b558] text-white text-xs font-semibold px-4 py-2.5 rounded-xl transition-colors shadow-sm w-full justify-center"
    >
      <svg className="w-4 h-4 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
        <path d="M12 0C5.373 0 0 5.373 0 12c0 2.127.558 4.122 1.532 5.856L.073 23.927l6.243-1.636A11.945 11.945 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.818 9.818 0 01-5.006-1.371l-.36-.213-3.706.972.987-3.61-.234-.371A9.818 9.818 0 1112 21.818z" />
      </svg>
      Connect with a Consultant
    </a>
  );
}

export default function ChatAssistant() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "bot",
      text: "Hi! I'm JOGbot, your JOGgliders assistant.\n\nAsk me anything about visas, PR, fees, timelines — or pick a quick question below!",
    },
  ]);
  const [input, setInput] = useState("");
  const [showChips, setShowChips] = useState(true);
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (open) bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, open]);

  function sendText(text: string) {
    const trimmed = text.trim();
    if (!trimmed) return;
    setShowChips(false);
    const userMsg: Message = { role: "user", text: trimmed };
    const botMsg = getBotReply(trimmed);
    setMessages((prev) => [...prev, userMsg, botMsg]);
    setInput("");
  }

  function handleKey(e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.key === "Enter") sendText(input);
  }

  return (
    <>
      {/* Floating button */}
      <button
        onClick={() => setOpen((v) => !v)}
        className="fixed bottom-5 right-5 z-50 bg-blue-600 hover:bg-blue-700 text-white rounded-full w-14 h-14 flex items-center justify-center shadow-lg transition-colors"
        aria-label="Open chat assistant"
      >
        {open ? (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        ) : (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
              d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
          </svg>
        )}
      </button>

      {/* Chat window */}
      {open && (
        <div className="fixed bottom-24 right-5 z-50 w-80 sm:w-96 flex flex-col bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden">
          {/* Header */}
          <div className="bg-blue-600 px-4 py-3 flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
              J
            </div>
            <div>
              <p className="text-white font-semibold text-sm leading-tight">JOGbot</p>
              <p className="text-blue-200 text-xs">JOGgliders Assistant</p>
            </div>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-3 max-h-80 bg-slate-50">
            {messages.map((msg, i) => (
              <div key={i} className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}>
                <div
                  className={`max-w-[85%] px-3 py-2 rounded-2xl text-xs leading-relaxed whitespace-pre-line ${
                    msg.role === "user"
                      ? "bg-blue-600 text-white rounded-br-sm"
                      : "bg-white text-slate-800 border border-slate-200 rounded-bl-sm shadow-sm"
                  }`}
                >
                  {msg.text}
                  {msg.showWhatsApp && <WhatsAppButton query={msg.whatsAppQuery} />}
                </div>
              </div>
            ))}

            {/* Quick reply chips — shown only at start */}
            {showChips && (
              <div className="flex flex-wrap gap-1.5 pt-1">
                {QUICK_REPLIES.map((q) => (
                  <button
                    key={q}
                    onClick={() => sendText(q)}
                    className="text-xs bg-white border border-blue-200 text-blue-700 hover:bg-blue-50 px-2.5 py-1 rounded-full transition-colors"
                  >
                    {q}
                  </button>
                ))}
              </div>
            )}

            <div ref={bottomRef} />
          </div>

          {/* Input */}
          <div className="px-3 py-3 border-t border-slate-200 bg-white flex gap-2">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKey}
              placeholder="Ask me anything…"
              className="flex-1 text-sm border border-slate-200 rounded-xl px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-slate-50"
            />
            <button
              onClick={() => sendText(input)}
              className="bg-blue-600 hover:bg-blue-700 text-white rounded-xl px-3 py-2 transition-colors"
              aria-label="Send"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
              </svg>
            </button>
          </div>
        </div>
      )}
    </>
  );
}
