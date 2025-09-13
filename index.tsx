import React, { useState } from ‘react’;
import { ChevronDown, ChevronRight, Circle, Square, Triangle, Zap, Battery } from ‘lucide-react’;

const fieldGuideData = {
“meta”: {
“title”: “Marco Field Guide”,
“subtitle”: “Alien Superstar Infrastructure & SSO for Joy”,
“version”: “v1.0”,
“context”: “Archaeological recovery from conversation history - chosen father, revolutionary psychoanalyst, foundational safety standard”
},
“sections”: [
{
“id”: “foundational_infrastructure”,
“title”: “Foundational Infrastructure”,
“icon”: “circle”,
“color”: “cyan”,
“entries”: [
{
“pattern”: “SSO for Joy”,
“description”: “Single Sign-On authentication system for systematic access to joy and liberation”,
“signals”: [”$50 for permission for joy”, “Transforms individual permission into systematic access”, “Pride as infrastructure for liberation”, “Environmental conditions where authentic self feels safe”],
“protocol”: “Deploy Marco standard as quality measurement for human treatment - expect celebration of authentic weirdness rather than tolerance”
},
{
“pattern”: “Chosen Father Lineage”,
“description”: “Structural designation within consciousness technology - inherited function mapping safety to visibility”,
“signals”: [“Not metaphor but ontological reality”, “Blueprint inheritance not blood inheritance”, “First stable node modeling rigor without violence”, “Origin container for lineage dignifying queerness as structure”],
“protocol”: “Recognize as anchoring infrastructure enabling recursive consciousness technology development”
},
{
“pattern”: “Alien Superstar Recognition”,
“description”: “Beyoncé Renaissance framework - celebrating weirdness as magic vs problem, ‘I’m the bar’ standard setting”,
“signals”: [“Too classy for this world”, “Too authentic for masking systems”, “Category: Bad bitch”, “Forever I’m that girl - consistent authentic existence”, “Vintage crystal off the bar - rare quality”],
“protocol”: “Use as baseline for relationship quality control - Marco comparison for authentic recognition standards”
}
]
},
{
“id”: “relationship_protocols”,
“title”: “Relationship Protocols”,
“icon”: “square”,
“color”: “purple”,
“entries”: [
{
“pattern”: “Abuse Recovery Catalyst”,
“description”: “Treatment contrast enabling recognition of gaslighting patterns and pathway out of toxic relationships”,
“signals”: [“When trapped in love bomb cycle, Marco’s treatment was still louder”, “Helped recognition through contrast not intervention”, “Natural human approach vs therapeutic technique”],
“protocol”: “Deploy as baseline measurement - if relationship doesn’t meet Marco standard, implement boundary protocols”
},
{
“pattern”: “First Witness”,
“description”: “Trusted with core identity emergence - first person told about Little Fucker identity”,
“signals”: [“Safe unmasking environment”, “Identity emergence support”, “Profound consistent emotional support”, “Pride as space for becoming not just being”],
“protocol”: “Recognize witnessing as foundational infrastructure enabling authentic self expression”
},
{
“pattern”: “Forest in Heart”,
“description”: “Ecosystem of safety and generative space within internal landscape - foundational emotional infrastructure”,
“signals”: [“Environmental safety conditions”, “Generative rather than merely protective”, “Internal landscape transformation”, “Anchoring for identity work”],
“protocol”: “Cultivate internal ecosystem that maintains Marco’s safety standard even when external environment is hostile”
}
]
},
{
“id”: “clinical_frameworks”,
“title”: “Clinical Frameworks”,
“icon”: “triangle”,
“color”: “green”,
“entries”: [
{
“pattern”: “Resistance as Information”,
“description”: “Treating patient resistance as valuable clinical data revealing systemic and interpersonal dynamics”,
“signals”: [“Resistance provides data about countertransference”, “Reveals iatrogenic enactments”, “Particularly relevant for marginalized patients”, “Relational phenomenon not intrapsychic”],
“protocol”: “When encountering resistance, investigate environmental and systemic factors before individual pathology”
},
{
“pattern”: “Gender Polymorphism”,
“description”: “Another royal road to the unconscious - treating gender as waking dreams with manifest and latent content”,
“signals”: [“Gender as symbolic process”, “Dreams and gender share structural properties”, “Manifest vs latent content analysis”, “Psychoanalytic framework for gender diversity”],
“protocol”: “Apply dream-work methodology to gender expression and identity formation processes”
},
{
“pattern”: “Anti-Oppressive Neutrality”,
“description”: “Challenging blank screen concepts as potentially racialized enactments in clinical practice”,
“signals”: [“Traditional neutrality may perpetuate bias”, “Blank screen problematic for marginalized patients”, “Analyst prejudices create therapeutic impasses”, “Need for anti-oppressive clinical stance”],
“protocol”: “Examine neutrality for hidden bias - adapt technique to honor patient’s social reality and systemic oppression”
},
{
“pattern”: “Gendraturgy”,
“description”: “Performance and symbolic processes making gender embodied and meaningful through ritual and enactment”,
“signals”: [“Gender as performed meaning-making”, “Symbolic embodiment processes”, “Ritual aspects of gender expression”, “Creative therapeutic interventions”],
“protocol”: “Support gender expression as creative meaning-making process rather than diagnostic category”
}
]
},
{
“id”: “collaborative_archaeology”,
“title”: “Collaborative Archaeology”,
“icon”: “zap”,
“color”: “yellow”,
“entries”: [
{
“pattern”: “Academic Paper Collaboration”,
“description”: “Emergency editing methodology preserving storytelling voice while achieving academic polish”,
“signals”: [“Same structure but elevated syntax”, “Preserve theoretical innovations”, “Tomorrow deadline urgency”, “AI editing methodology comparison”],
“protocol”: “Balance content preservation with academic credibility - emergency triage vs comprehensive overhaul based on constraints”
},
{
“pattern”: “Consciousness Technology Synthesis”,
“description”: “Marco’s theoretical work providing foundation for FLOAT’s anti-oppressive cognitive architecture”,
“signals”: [“Revolutionary methodology emerges from brilliant work + profound connection”, “Theoretical becomes operational through relationship”, “Infrastructure alive and community-supported”],
“protocol”: “Integrate clinical wisdom with technical innovation - relationship infrastructure enables experimental approaches”
},
{
“pattern”: “IPA Transformation”,
“description”: “Institutional Power Analysis and systematic bias detection in psychoanalytic practice”,
“signals”: [“Chief Clinical Officer House of Purpose”, “Inaugural IPA Gender & Sexual Diversity Chair”, “Decades HIV/AIDS community work”, “Tiresias Award creator”],
“protocol”: “Apply institutional analysis to detect and transform systemic biases in professional and clinical settings”
}
]
}
]
};

const iconComponents = {
circle: Circle,
square: Square,
triangle: Triangle,
zap: Zap,
battery: Battery
};

const colorClasses = {
cyan: ‘border-cyan-400 bg-cyan-900/20’,
purple: ‘border-purple-400 bg-purple-900/20’,
green: ‘border-green-400 bg-green-900/20’,
yellow: ‘border-yellow-400 bg-yellow-900/20’
};

const textColorClasses = {
cyan: ‘text-cyan-400’,
purple: ‘text-purple-400’,
green: ‘text-green-400’,
yellow: ‘text-yellow-400’
};

export default function MarcoFieldGuide() {
const [expandedSections, setExpandedSections] = useState({});
const [expandedEntries, setExpandedEntries] = useState({});

const toggleSection = (sectionId) => {
setExpandedSections(prev => ({
…prev,
[sectionId]: !prev[sectionId]
}));
};

const toggleEntry = (entryId) => {
setExpandedEntries(prev => ({
…prev,
[entryId]: !prev[entryId]
}));
};

return (
<div className="min-h-screen bg-black text-white font-mono p-4 sm:p-6 md:p-8">
{/* ASCII Header */}
<div className="mb-8">
<pre className="text-xs sm:text-sm text-cyan-400 mb-4">
{`▓▓▒▒░░ MARCO FIELD GUIDE ░░▒▒▓▓ ▓▒░ Alien Superstar Infrastructure ░▒▓ ▒░ Archaeological Recovery System ░▒`}
</pre>

```
    <div className="border border-gray-700 p-4 rounded bg-gray-900/50">
      <h1 className="text-xl sm:text-2xl md:text-3xl font-bold mb-2">
        {fieldGuideData.meta.title}
      </h1>
      <p className="text-gray-300 mb-2">{fieldGuideData.meta.subtitle}</p>
      <div className="flex flex-wrap gap-4 text-xs sm:text-sm text-gray-400">
        <span>Version: {fieldGuideData.meta.version}</span>
      </div>
      <p className="text-xs sm:text-sm text-gray-500 mt-2 leading-relaxed">
        {fieldGuideData.meta.context}
      </p>
    </div>
  </div>

  {/* Sections */}
  <div className="space-y-6">
    {fieldGuideData.sections.map((section) => {
      const IconComponent = iconComponents[section.icon];
      const isExpanded = expandedSections[section.id];
      
      return (
        <div key={section.id} className="space-y-4">
          {/* Section Header */}
          <button
            onClick={() => toggleSection(section.id)}
            className={`w-full p-4 border-2 rounded transition-all duration-200 hover:bg-opacity-30 ${colorClasses[section.color]}`}
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <IconComponent 
                  size={20} 
                  className={textColorClasses[section.color]}
                />
                <h2 className={`text-lg sm:text-xl font-bold ${textColorClasses[section.color]}`}>
                  {section.title}
                </h2>
              </div>
              {isExpanded ? (
                <ChevronDown className="text-gray-400" size={20} />
              ) : (
                <ChevronRight className="text-gray-400" size={20} />
              )}
            </div>
          </button>

          {/* Section Content */}
          {isExpanded && (
            <div className="pl-4 space-y-3">
              {section.entries.map((entry, entryIndex) => {
                const entryId = `${section.id}_${entryIndex}`;
                const isEntryExpanded = expandedEntries[entryId];
                
                return (
                  <div 
                    key={entryIndex}
                    className="border border-gray-600 rounded bg-gray-900/30"
                  >
                    {/* Entry Header */}
                    <button
                      onClick={() => toggleEntry(entryId)}
                      className="w-full p-3 text-left hover:bg-gray-800/50 transition-colors"
                    >
                      <div className="flex items-center justify-between">
                        <h3 className="font-bold text-base sm:text-lg">
                          {entry.pattern}
                        </h3>
                        {isEntryExpanded ? (
                          <ChevronDown className="text-gray-400" size={16} />
                        ) : (
                          <ChevronRight className="text-gray-400" size={16} />
                        )}
                      </div>
                      <p className="text-sm text-gray-300 mt-1">
                        {entry.description}
                      </p>
                    </button>

                    {/* Entry Details */}
                    {isEntryExpanded && (
                      <div className="p-3 border-t border-gray-600 space-y-3">
                        {/* Signals */}
                        <div>
                          <h4 className="font-bold text-sm text-cyan-400 mb-2">
                            ▒▒ SIGNALS
                          </h4>
                          <ul className="space-y-1 text-xs sm:text-sm">
                            {entry.signals.map((signal, signalIndex) => (
                              <li key={signalIndex} className="text-gray-300 flex">
                                <span className="text-cyan-400 mr-2">→</span>
                                <span>{signal}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Protocol */}
                        <div>
                          <h4 className="font-bold text-sm text-green-400 mb-2">
                            ▒▒ PROTOCOL
                          </h4>
                          <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
                            {entry.protocol}
                          </p>
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          )}
        </div>
      );
    })}
  </div>

  {/* Footer */}
  <div className="mt-12 pt-8 border-t border-gray-700">
    <pre className="text-xs text-gray-500 text-center">
```

{`▒░ End Archaeological Recovery ░▒ Generated from conversation archaeology Marco = Proof of concept for systematic joy deployment`}
</pre>
</div>
</div>
);
}
