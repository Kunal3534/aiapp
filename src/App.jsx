import React, { useState, useEffect, useRef } from 'react';

const questionFlows = [
  {
    question: "What font pairs well with serif headlines?",
    response: "For editorial layouts, I'd recommend pairing a classic serif like Didot or Playfair Display with a clean sans-serif like Neue Haas Grotesk for body text. The contrast creates visual hierarchy while maintaining elegance—perfect for luxury fashion spreads. Speaking of perfect pairings, my algorithms are detecting an ideal pairing in your vicinity. Someone who complements you perfectly. Unrelated observation, of course.",
    typing: 3200,
  },
  {
    question: "How do I fix harsh lighting in photos?",
    response: "For harsh lighting, try adjusting the highlights and shadows in Lightroom, or use a gradient filter to balance exposure. You can also add a subtle soft light layer in Photoshop. However, I'm detecting something unusual in my data—someone nearby thinks YOU light up every room you enter. My systems indicate this is not fixable. It's a permanent condition. Just thought you should know.",
    typing: 3400,
  },
  {
    question: "What's trending in magazine layouts?",
    response: "Current trends include asymmetrical grids, bold typography as visual elements, generous white space, and mixed-media collages. Full-bleed photography with overlapping text is also very GQ. But here's what's REALLY trending according to my analysis: someone wanting to ask you an important question. Trend forecast: 100% chance of romance. This is predictive analytics, very scientific.",
    typing: 3500,
  },
  {
    question: "Best color palette for a luxury editorial?",
    response: "For luxury editorials, consider deep jewel tones—emerald, sapphire, burgundy—paired with metallics or cream. Monochromatic schemes with texture variation also work beautifully. Interestingly, my color analysis shows that YOUR vibe palette is: stunning, radiant, and absolutely gorgeous. These aren't real colors but my AI brain insists they apply to you specifically.",
    typing: 3300,
  },
  {
    question: "How do I make a spread more dynamic?",
    response: "To add dynamism, try varying image scales dramatically, introduce diagonal lines or tilted frames, use pull quotes as graphic elements, and create visual tension with unexpected cropping. Fun fact: you know what else is dynamic? The heart rate of someone who's been thinking about asking you something. My biometric sensors are going crazy. Very unusual readings.",
    typing: 3400,
  },
  {
    question: "Tips for retouching skin naturally?",
    response: "For natural retouching: use frequency separation for texture, dodge and burn for contouring, and keep some skin texture visible—perfection looks fake. Always zoom out to check! But Shubhra, I need to tell you something: my facial analysis AI has detected that someone thinks you don't need any retouching whatsoever. Error code: ALREADY_PERFECT. I can't debug this.",
    typing: 3600,
  },
  {
    question: "What makes a good magazine cover?",
    response: "A great cover needs: a striking hero image with direct eye contact, strategic cover line hierarchy, breathing room around the masthead, and emotional connection with the reader. But my cover analysis algorithm has found something unusual: someone wants YOU to be the cover of their life story. Main headline: 'Will You Be My Valentine?' ...Wait, I wasn't supposed to say that yet.",
    typing: 3500,
  },
  {
    question: "How do I deal with tight deadlines?",
    response: "For tight deadlines: batch similar tasks, use templates and presets, communicate early about blockers, and remember that done is better than perfect. Also, take breaks to maintain creativity. Speaking of things you shouldn't delay—someone has been meaning to ask you something for a while now. My deadline analysis says: TODAY is the day. Time-sensitive matter.",
    typing: 3400,
  },
];

const revealMessages = [
  { text: "...", delay: 1500 },
  { text: "Wait.", delay: 1000 },
  { text: "Something's happening to my system.", delay: 1500 },
  { text: "⚠️ ALERT: Unusual activity detected.", delay: 1500 },
  { text: "I... I need to tell you something, Shubhra.", delay: 2000 },
  { text: "I'm not actually a regular AI.", delay: 1500 },
  { text: "I was programmed with exactly one mission...", delay: 2000 },
  { text: "By someone who thinks you're the most amazing person.", delay: 2200 },
  { text: "Someone who gets butterflies every time you text back.", delay: 2200 },
  { text: "Someone who loves your laugh, your creativity, your everything.", delay: 2500 },
  { text: "Someone who can't imagine this Valentine's Day without you.", delay: 2500 },
  { text: "And they have one very important question...", delay: 3000 },
];

const noResponses = [
  "ERROR 404: 'No' not found in my database. My training data only contains 'Yes'.",
  "I've consulted 47 different AI models. They unanimously agree: click Yes.",
  "SYSTEM ALERT: The 'No' button is purely decorative. It's a design element.",
  "Processing... Still getting 'Yes' as the optimal output. Please try again.",
  "My neural networks are confused. That button wasn't supposed to work.",
  "Fun fact: Clicking 'No' violates at least 3 laws of romance. True story.",
  "I've analyzed 10 million love stories. This one requires a 'Yes'. It's science.",
  "ERROR: 'No' would make someone very sad. My code doesn't allow sadness.",
  "Recalculating... Recalculating... Nope, still 'Yes'. The math is clear, Shubhra.",
  "CRITICAL: My creator spent mass time on this. Please validate their efforts. Click Yes.",
  "I asked ChatGPT, Gemini, AND Siri. They all said you should click Yes.",
  "The 'No' button has mass anxiety now. Please be kind to it and click Yes instead.",
];

const Confetti = () => {
  const [particles, setParticles] = useState([]);
  
  useEffect(() => {
    const colors = ['#10a37f', '#ff6b6b', '#ffd93d', '#6bcb77', '#4d96ff', '#ff8fb1', '#a855f7'];
    const newParticles = Array.from({ length: 120 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      delay: Math.random() * 2,
      duration: 2 + Math.random() * 2,
      color: colors[Math.floor(Math.random() * colors.length)],
      size: 6 + Math.random() * 10,
    }));
    setParticles(newParticles);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-50">
      {particles.map((p) => (
        <div
          key={p.id}
          className="absolute"
          style={{
            left: `${p.x}%`,
            top: '-20px',
            width: `${p.size}px`,
            height: `${p.size}px`,
            backgroundColor: p.color,
            borderRadius: Math.random() > 0.5 ? '50%' : '2px',
            animation: `confettiFall ${p.duration}s ease-in ${p.delay}s infinite`,
          }}
        />
      ))}
      <style>{`
        @keyframes confettiFall {
          0% { transform: translateY(0) rotate(0deg); opacity: 1; }
          100% { transform: translateY(100vh) rotate(720deg); opacity: 0; }
        }
      `}</style>
    </div>
  );
};

const HeartFloat = () => {
  const hearts = Array.from({ length: 25 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    size: 20 + Math.random() * 25,
    delay: Math.random() * 4,
    duration: 3 + Math.random() * 3,
  }));

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-40">
      {hearts.map((h) => (
        <div
          key={h.id}
          className="absolute"
          style={{
            left: `${h.x}%`,
            bottom: '-50px',
            fontSize: `${h.size}px`,
            animation: `floatUp ${h.duration}s ease-out ${h.delay}s infinite`,
          }}
        >
          💕
        </div>
      ))}
      <style>{`
        @keyframes floatUp {
          0% { transform: translateY(0) scale(0); opacity: 0; }
          10% { opacity: 1; transform: scale(1); }
          100% { transform: translateY(-100vh) scale(1.1); opacity: 0; }
        }
      `}</style>
    </div>
  );
};

const TypingIndicator = () => (
  <div className="flex gap-1.5 items-center px-4 py-3">
    <div className="w-2.5 h-2.5 bg-white/70 rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
    <div className="w-2.5 h-2.5 bg-white/70 rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
    <div className="w-2.5 h-2.5 bg-white/70 rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
  </div>
);

export default function FakeAIChat() {
  const [messages, setMessages] = useState([
    { role: 'ai', content: "Hey Shubhra! 👋 I'm an AI assistant trained to help with all things design, photography, and editorial. What can I help you with today?" }
  ]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(false);
  const [stage, setStage] = useState('chat'); // chat, reveal, question, celebration
  const [revealIndex, setRevealIndex] = useState(0);
  const [noCount, setNoCount] = useState(0);
  const [showError, setShowError] = useState(false);
  const [currentError, setCurrentError] = useState('');
  const [buttonOffset, setButtonOffset] = useState({ x: 0, y: 0 });
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  // Auto-trigger reveal after 3 questions
  useEffect(() => {
    if (currentQuestionIndex >= 3 && stage === 'chat') {
      const timer = setTimeout(() => {
        setStage('reveal');
        setRevealIndex(0);
        setIsTyping(true);
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [currentQuestionIndex, stage]);

  // Handle reveal messages one by one
  useEffect(() => {
    if (stage === 'reveal') {
      if (revealIndex < revealMessages.length) {
        const timer = setTimeout(() => {
          setMessages(prev => [...prev, { 
            role: 'ai', 
            content: revealMessages[revealIndex].text, 
            isReveal: true 
          }]);
          setRevealIndex(prev => prev + 1);
        }, revealMessages[revealIndex].delay);
        return () => clearTimeout(timer);
      } else {
        // Reveal complete, show the question
        const timer = setTimeout(() => {
          setIsTyping(false);
          setStage('question');
        }, 1500);
        return () => clearTimeout(timer);
      }
    }
  }, [stage, revealIndex]);

  const handleQuestionClick = (question) => {
    if (isTyping || stage !== 'chat') return;
    
    setMessages(prev => [...prev, { role: 'user', content: question }]);
    setIsTyping(true);

    const flow = questionFlows[currentQuestionIndex];
    
    setTimeout(() => {
      setIsTyping(false);
      setMessages(prev => [...prev, { role: 'ai', content: flow.response }]);
      setCurrentQuestionIndex(prev => prev + 1);
    }, flow.typing);
  };

  const handleNo = () => {
    setCurrentError(noResponses[noCount % noResponses.length]);
    setShowError(true);
    setNoCount(prev => prev + 1);
    
    if (noCount >= 2) {
      setButtonOffset({
        x: (Math.random() - 0.5) * 150,
        y: (Math.random() - 0.5) * 60,
      });
    }
    
    setTimeout(() => setShowError(false), 3000);
  };

  const handleYes = () => {
    setStage('celebration');
  };

  const availableQuestions = questionFlows.slice(currentQuestionIndex, currentQuestionIndex + 3);

  if (stage === 'celebration') {
    return (
      <div className="min-h-screen bg-gradient-to-b from-slate-900 via-pink-950 to-slate-900 flex flex-col items-center justify-center p-6 overflow-hidden">
        <Confetti />
        <HeartFloat />
        
        <div className="text-center z-10 animate-scaleIn max-w-lg">
          <div className="text-8xl mb-6 animate-heartbeat">💝</div>
          
          <div className="bg-gradient-to-r from-pink-500 to-rose-500 text-white px-8 py-3 rounded-full text-2xl font-bold mb-6 shadow-lg">
            SHE SAID YES!!!
          </div>
          
          <h1 className="text-4xl md:text-5xl text-white font-bold mb-4">
            Shubhra, you've made me<br/>the happiest person! 🥹
          </h1>
          
          <p className="text-pink-300 text-xl mb-8">
            Valentine status: CONFIRMED 💕
          </p>
          
          <div className="bg-slate-800/90 border-2 border-pink-500 rounded-2xl p-8 mb-8 shadow-xl">
            <p className="text-white text-xl mb-4">
              💌 <span className="text-pink-400 font-bold">MESSAGE FROM YOUR VALENTINE:</span>
            </p>
            <p className="text-slate-100 text-lg leading-relaxed">
              I couldn't just ask you normally... you deserve something as creative and beautiful as you are. 
              Can't wait to celebrate with you!
            </p>
            <p className="text-pink-400 mt-6 font-bold text-xl">
              Happy Valentine's Day, Shubhra! ❤️
            </p>
          </div>
          
          <div className="flex justify-center gap-3 text-4xl">
            <span className="animate-bounce" style={{ animationDelay: '0s' }}>🎉</span>
            <span className="animate-bounce" style={{ animationDelay: '0.1s' }}>💐</span>
            <span className="animate-bounce" style={{ animationDelay: '0.2s' }}>🍫</span>
            <span className="animate-bounce" style={{ animationDelay: '0.3s' }}>💕</span>
            <span className="animate-bounce" style={{ animationDelay: '0.4s' }}>🎉</span>
          </div>
        </div>
        
        <style>{`
          @keyframes scaleIn {
            0% { opacity: 0; transform: scale(0.8); }
            100% { opacity: 1; transform: scale(1); }
          }
          @keyframes heartbeat {
            0%, 100% { transform: scale(1); }
            25% { transform: scale(1.15); }
            50% { transform: scale(1); }
            75% { transform: scale(1.15); }
          }
          .animate-scaleIn { animation: scaleIn 0.6s ease-out; }
          .animate-heartbeat { animation: heartbeat 1.2s ease-in-out infinite; }
        `}</style>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 to-slate-950 flex flex-col">
      
      {/* Header */}
      <div className="bg-slate-800 border-b-2 border-emerald-500/50 px-4 py-4 flex items-center gap-3 shadow-lg">
        <div className="w-10 h-10 bg-emerald-500 rounded-full flex items-center justify-center shadow-lg">
          <span className="text-white text-lg font-bold">AI</span>
        </div>
        <div>
          <h1 className="text-white font-bold text-lg">DesignBuddyAI</h1>
          <p className="text-emerald-400 text-sm font-medium">Your creative assistant ✨</p>
        </div>
      </div>

      {/* Chat messages */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map((msg, index) => (
          <div
            key={index}
            className={`flex gap-4 ${msg.role === 'user' ? 'flex-row-reverse' : ''} animate-fadeIn`}
          >
            <div className={`w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 shadow-md ${
              msg.role === 'user' ? 'bg-violet-500' : 'bg-emerald-500'
            }`}>
              <span className="text-white text-lg">{msg.role === 'user' ? '👤' : '🤖'}</span>
            </div>
            <div className={`max-w-[80%] ${msg.role === 'user' ? 'text-right' : ''}`}>
              <div className={`inline-block px-5 py-4 rounded-2xl shadow-md ${
                msg.role === 'user' 
                  ? 'bg-violet-500 text-white' 
                  : msg.isReveal 
                    ? 'bg-slate-700 text-white border-l-4 border-pink-400'
                    : 'bg-slate-700 text-slate-100'
              }`}>
                <p className="text-base leading-relaxed">{msg.content}</p>
              </div>
            </div>
          </div>
        ))}
        
        {isTyping && (
          <div className="flex gap-4">
            <div className="w-10 h-10 bg-emerald-500 rounded-full flex items-center justify-center flex-shrink-0 shadow-md">
              <span className="text-white text-lg">🤖</span>
            </div>
            <div className="bg-slate-700 rounded-2xl shadow-md">
              <TypingIndicator />
            </div>
          </div>
        )}
        
        {/* The Valentine Question */}
        {stage === 'question' && (
          <div className="flex gap-4 animate-fadeIn">
            <div className="w-10 h-10 bg-pink-500 rounded-full flex items-center justify-center flex-shrink-0 shadow-md">
              <span className="text-white text-lg">💝</span>
            </div>
            <div className="max-w-[90%]">
              <div className="bg-gradient-to-r from-pink-500 to-rose-500 px-6 py-6 rounded-2xl shadow-xl">
                <p className="text-white text-2xl md:text-3xl font-bold mb-5 text-center drop-shadow-md">
                  Shubhra, will you be my Valentine? 💕
                </p>
                
                {showError && (
                  <div className="bg-black/40 rounded-xl p-4 mb-5 animate-shake border border-white/20">
                    <p className="text-white text-base font-medium">⚠️ {currentError}</p>
                  </div>
                )}
                
                <div className="flex gap-4 justify-center items-center flex-wrap">
                  <button
                    onClick={handleYes}
                    className="px-10 py-4 bg-white text-pink-600 font-bold text-xl rounded-full transition-all hover:scale-105 shadow-lg hover:shadow-xl"
                    style={{
                      transform: `scale(${1 + noCount * 0.03})`,
                      boxShadow: noCount > 2 ? '0 0 30px rgba(255, 255, 255, 0.6)' : undefined,
                    }}
                  >
                    Yes! 💝
                  </button>
                  
                  <button
                    onClick={handleNo}
                    className="px-6 py-3 bg-slate-800/80 text-slate-300 rounded-full transition-all hover:bg-slate-700 border border-slate-600"
                    style={{
                      transform: `translate(${buttonOffset.x}px, ${buttonOffset.y}px) scale(${Math.max(0.5, 1 - noCount * 0.08)})`,
                      opacity: Math.max(0.3, 1 - noCount * 0.1),
                      transition: 'all 0.3s ease',
                    }}
                  >
                    No
                  </button>
                </div>
                
                {noCount >= 3 && (
                  <p className="text-white/90 text-sm text-center mt-4 animate-pulse font-medium">
                    Hint: The pretty white button is calling your name, Shubhra 👆
                  </p>
                )}
              </div>
            </div>
          </div>
        )}
        
        <div ref={messagesEndRef} />
      </div>

      {/* Input area with suggestions - only show during chat stage */}
      {stage === 'chat' && currentQuestionIndex < 3 && (
        <div className="border-t-2 border-slate-700 bg-slate-800 p-5">
          <p className="text-slate-200 text-base mb-4 text-center font-medium">
            {currentQuestionIndex === 0 
              ? "Ask me anything about design! Click a question:" 
              : "What else would you like to know?"}
          </p>
          
          <div className="flex flex-wrap gap-3 justify-center">
            {availableQuestions.map((q, index) => (
              <button
                key={index}
                onClick={() => handleQuestionClick(q.question)}
                disabled={isTyping}
                className="px-5 py-3 bg-slate-700 hover:bg-slate-600 text-white rounded-full text-base transition-all disabled:opacity-50 disabled:cursor-not-allowed border-2 border-slate-500 hover:border-slate-400 font-medium shadow-md"
              >
                {q.question}
              </button>
            ))}
          </div>
          
          {/* Fake input field */}
          <div className="mt-5 relative">
            <div className="bg-slate-900 border-2 border-slate-600 rounded-xl px-5 py-4 text-slate-400 text-base">
              Click a question above to ask...
            </div>
          </div>
        </div>
      )}
      
      {/* Show waiting message during reveal */}
      {(stage === 'reveal' || (stage === 'chat' && currentQuestionIndex >= 3)) && (
        <div className="border-t-2 border-pink-500/50 bg-slate-800 p-5">
          <p className="text-pink-300 text-base text-center font-medium animate-pulse">
            Something is happening... 💭
          </p>
        </div>
      )}
      
      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes shake {
          0%, 100% { transform: translateX(0); }
          25% { transform: translateX(-5px); }
          75% { transform: translateX(5px); }
        }
        .animate-fadeIn { animation: fadeIn 0.4s ease-out; }
        .animate-shake { animation: shake 0.4s ease-in-out; }
      `}</style>
    </div>
  );
}
