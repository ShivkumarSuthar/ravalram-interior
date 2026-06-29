import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";
import { MessageSquare, X, Send, Sparkles, User, ArrowRight, CornerDownLeft, MapPin } from "lucide-react";

// Initial preset messages from Julian
const INITIAL_MESSAGES = [
  {
    id: "init-1",
    sender: "assistant",
    text: "Welcome to Antra Studio. I'm Julian, Lead Spatial Architect. How may I assist in clarifying your design aspirations today?",
    time: "Now"
  }
];

// Preset queries and their respective answers
const PRESETS = [
  {
    trigger: "How can I book a private consultation?",
    keywords: ["book", "consultation", "appointment", "consult", "call", "schedule"],
    answer: "You can book an exclusive consultation instantly by clicking the 'Book Consultation' button in our header, or by filling out the form at the bottom of our page. We will verify availability and arrange a private session in 1-2 hours.",
    actionText: "Book Now",
    actionType: "modal"
  },
  {
    trigger: "What are your spatial design rates?",
    keywords: ["price", "cost", "rates", "pricing", "budget", "fee", "estimate"],
    answer: "Every spatial masterpiece we forge is bespoke. We formulate custom fee structures based on square footage, material selections, and physical complexity. Our standard comprehensive design phases begin at $15,000.",
    actionText: "Request callback",
    actionType: "contact"
  },
  {
    trigger: "What is your typical project timeline?",
    keywords: ["timeline", "time", "long", "weeks", "months", "durations"],
    answer: "Our premium residential builds typically take between 12 to 24 weeks. This includes detailed floorplan drafting, global material sourcing, custom furniture cabinetry, and the final high-fashion installation.",
    actionText: "View our workflow",
    actionType: "scroll-workflow"
  },
  {
    trigger: "Where do you source your materials?",
    keywords: ["source", "materials", "stone", "marble", "fabric", "wood", "crafted"],
    answer: "We source authentic, rare materials directly from elite global quarries and artisan workshops. This includes premium Italian Carrara marble slab cuts, tailored hand-brushed bronzes from Venice, and native French oak timbers.",
    actionText: "View design logs",
    actionType: "scroll-blog"
  }
];

export default function LuxuryChatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState(INITIAL_MESSAGES);
  const [inputValue, setInputValue] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [showNotification, setShowNotification] = useState(false);

  const messagesEndRef = useRef(null);

  // Trigger a subtle greeting notification on load
  useEffect(() => {
    const timer = setTimeout(() => {
      if (!isOpen) {
        setShowNotification(true);
      }
    }, 4000);
    return () => clearTimeout(timer);
  }, []);

  // Scroll to bottom on new messages
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isTyping]);

  const handleOpenToggle = () => {
    setIsOpen(!isOpen);
    setShowNotification(false);
  };

  const addMessage = (text, sender) => {
    const newMsg = {
      id: `msg-${Date.now()}-${Math.random()}`,
      sender,
      text,
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };
    setMessages((prev) => [...prev, newMsg]);
  };

  // Automated smart response engine
  const triggerBotReply = (userQuery) => {
    setIsTyping(true);

    // Dynamic timeout for natural response feeling
    setTimeout(() => {
      setIsTyping(false);
      
      const queryLower = userQuery.toLowerCase();
      
      // Look for preset keywords
      let matchedPreset = null;
      for (const preset of PRESETS) {
        if (preset.keywords.some(keyword => queryLower.includes(keyword))) {
          matchedPreset = preset;
          break;
        }
      }

      if (matchedPreset) {
        addMessage(matchedPreset.answer, "assistant");
      } else {
        // Default sophisticated conversational response
        addMessage(
          "That sounds like a fascinating vision. As all of our architectural work is highly customized, I recommend arranging a quick expert session. I can immediately notify our team to initiate a personalized callback for you.",
          "assistant"
        );
      }
    }, 1500);
  };

  const handleSend = (e) => {
    if (e) e.preventDefault();
    if (!inputValue.trim()) return;

    const userText = inputValue;
    addMessage(userText, "user");
    setInputValue("");

    triggerBotReply(userText);
  };

  const handlePresetClick = (preset) => {
    addMessage(preset.trigger, "user");
    setIsTyping(true);

    setTimeout(() => {
      setIsTyping(false);
      addMessage(preset.answer, "assistant");
    }, 1200);
  };

  const handleBotAction = (actionType) => {
    setIsOpen(false);
    if (actionType === "modal") {
      // Simulate booking modal trigger or scroll to Header Book Consultation
      const headerBtn = document.getElementById("header-cta-btn");
      if (headerBtn) {
        headerBtn.click();
      } else {
        document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
      }
    } else if (actionType === "contact") {
      document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
    } else if (actionType === "scroll-workflow") {
      document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
    } else if (actionType === "scroll-blog") {
      document.getElementById("blog")?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 font-sans" id="luxury-chatbot-container">
      
      {/* GREETING TOAST (discreet bubble notification) */}
      <AnimatePresence>
        {showNotification && !isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.85, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.85, y: 15 }}
            className="absolute bottom-20 right-0 w-72 bg-stone-900 border border-gold-500/30 text-white p-4 shadow-xl z-20"
          >
            <button 
              onClick={() => setShowNotification(false)}
              className="absolute top-2 right-2 text-stone-400 hover:text-white transition-colors cursor-pointer"
            >
              <X size={12} />
            </button>
            <div className="flex items-start space-x-3 pr-4">
              <div className="w-8 h-8 rounded-full bg-gold-500/10 border border-gold-500 flex items-center justify-center shrink-0 mt-0.5 text-gold-500 text-xs font-serif italic">
                J
              </div>
              <div className="space-y-1">
                <p className="text-[10px] uppercase font-bold tracking-widest text-gold-500">Lead Architect</p>
                <p className="text-stone-300 text-xs font-light leading-relaxed">
                  Hi, Julian here. Seeking quiet luxury interior guidance? Let's chat.
                </p>
              </div>
            </div>
            <div className="mt-3 flex justify-end">
              <button 
                onClick={handleOpenToggle}
                className="text-[10px] tracking-widest font-bold text-gold-500 hover:text-white transition-colors uppercase inline-flex items-center space-x-1 cursor-pointer"
              >
                <span>Initiate Chat</span>
                <ArrowRight size={10} />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* FLOAT ACTION BUTTON */}
      <motion.button
        onClick={handleOpenToggle}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className={`w-14 h-14 rounded-full flex items-center justify-center shadow-2xl border transition-all duration-300 cursor-pointer ${
          isOpen 
            ? "bg-gold-500 border-gold-500 text-stone-950" 
            : "bg-stone-950 border-white/10 text-gold-500 hover:border-gold-500 hover:bg-stone-900"
        }`}
        aria-label="Toggle chat"
        id="chatbot-toggle-btn"
      >
        <AnimatePresence mode="wait">
          {isOpen ? (
            <motion.div
              key="close"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <X size={20} />
            </motion.div>
          ) : (
            <motion.div
              key="open"
              initial={{ rotate: 90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: -90, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="relative"
            >
              <MessageSquare size={20} />
              <span className="absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full bg-gold-500 border-2 border-stone-950 animate-ping" />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.button>

      {/* EXPANDED LUXURY CHAT DRAWER */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 30 }}
            transition={{ type: "spring", damping: 25, stiffness: 220 }}
            className="absolute bottom-20 right-0 w-[350px] md:w-[380px] h-[500px] md:h-[550px] bg-stone-950 text-stone-300 border border-white/10 shadow-2xl flex flex-col justify-between overflow-hidden"
            id="chatbot-drawer"
          >
            {/* Header */}
            <div className="bg-stone-900 border-b border-white/5 p-4 flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="relative">
                  <div className="w-10 h-10 rounded-full bg-stone-800 border border-gold-500/40 flex items-center justify-center text-gold-500 font-serif italic text-base">
                    J
                  </div>
                  <span className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-green-500 rounded-full border-2 border-stone-900" />
                </div>
                <div>
                  <div className="flex items-center space-x-1">
                    <h4 className="text-white text-xs font-bold uppercase tracking-wider">Julian Vance</h4>
                    <Sparkles size={10} className="text-gold-500" />
                  </div>
                  <p className="text-[10px] text-stone-400 font-light">Lead Architectural Consultant</p>
                </div>
              </div>
              
              <button 
                onClick={handleOpenToggle}
                className="p-1.5 text-stone-400 hover:text-white transition-colors cursor-pointer"
                aria-label="Close Chat"
              >
                <X size={16} />
              </button>
            </div>

            {/* Conversation Space */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4 scrollbar-thin bg-gradient-to-b from-stone-950 via-stone-950 to-stone-900">
              {messages.map((msg) => {
                const isBot = msg.sender === "assistant";
                return (
                  <div 
                    key={msg.id}
                    className={`flex items-start gap-2.5 ${!isBot ? "flex-row-reverse" : ""}`}
                  >
                    {isBot ? (
                      <div className="w-7 h-7 rounded-full bg-stone-800 border border-gold-500/20 flex items-center justify-center text-gold-500 text-[10px] font-serif italic shrink-0">
                        J
                      </div>
                    ) : (
                      <div className="w-7 h-7 rounded-full bg-gold-500/10 border border-gold-500/20 flex items-center justify-center text-gold-400 shrink-0">
                        <User size={12} />
                      </div>
                    )}

                    <div className="space-y-1 max-w-[75%]">
                      <div className={`p-3 text-xs leading-relaxed font-light select-none ${
                        isBot 
                          ? "bg-stone-900/80 text-stone-200 border border-white/5" 
                          : "bg-gold-500 text-stone-950 font-medium"
                      }`}>
                        {msg.text}
                      </div>
                      
                      <span className={`text-[9px] text-stone-500 block font-mono ${
                        !isBot ? "text-right" : ""
                      }`}>
                        {msg.time}
                      </span>
                    </div>
                  </div>
                );
              })}

              {/* Typing Animation dots */}
              {isTyping && (
                <div className="flex items-start gap-2.5">
                  <div className="w-7 h-7 rounded-full bg-stone-800 border border-gold-500/20 flex items-center justify-center text-gold-500 text-[10px] font-serif italic shrink-0">
                    J
                  </div>
                  <div className="bg-stone-900/80 border border-white/5 p-3 px-4 flex items-center space-x-1 max-w-[75%]">
                    <span className="w-1.5 h-1.5 rounded-full bg-gold-500/60 animate-bounce delay-100" />
                    <span className="w-1.5 h-1.5 rounded-full bg-gold-500/60 animate-bounce delay-200" />
                    <span className="w-1.5 h-1.5 rounded-full bg-gold-500/60 animate-bounce delay-300" />
                  </div>
                </div>
              )}
              
              <div ref={messagesEndRef} />
            </div>

            {/* Quick Auto Queries (presets selection) */}
            <div className="px-4 py-2 border-t border-white/5 bg-stone-950/80 overflow-x-auto whitespace-nowrap flex gap-2 no-scrollbar">
              {PRESETS.map((preset, idx) => (
                <button
                  key={idx}
                  onClick={() => handlePresetClick(preset)}
                  className="px-3 py-1.5 bg-stone-900 hover:bg-stone-800 text-gold-500 hover:text-white border border-white/5 hover:border-gold-500 text-[10px] font-mono tracking-wide uppercase transition-all cursor-pointer inline-block rounded-none shrink-0"
                >
                  {preset.keywords[0]} ?
                </button>
              ))}
            </div>

            {/* Message Input Form */}
            <form 
              onSubmit={handleSend}
              className="bg-stone-900 border-t border-white/5 p-3 flex items-center gap-2"
            >
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="Type your inquiry here..."
                className="flex-1 bg-stone-950 border border-white/5 focus:border-gold-500/50 px-3.5 py-2 text-xs text-stone-200 placeholder-stone-500 outline-none transition-colors duration-300 rounded-none"
              />
              <button
                type="submit"
                className="w-8 h-8 bg-gold-500 hover:bg-gold-600 text-stone-950 flex items-center justify-center transition-all duration-300 shrink-0 cursor-pointer"
                aria-label="Send query"
              >
                <Send size={12} />
              </button>
            </form>

            {/* Branded Footer accent */}
            <div className="bg-stone-950 py-1.5 px-4 border-t border-white/5 text-[9px] text-stone-600 font-mono tracking-widest uppercase flex items-center justify-between select-none">
              <span>Julian AI Advisor</span>
              <div className="flex items-center space-x-1 text-gold-500/60 font-serif lowercase">
                <span>antra</span>
                <span className="w-1 h-1 bg-gold-500 rounded-full" />
              </div>
            </div>

          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
}
