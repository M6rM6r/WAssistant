"""
INTJ: NLP Service for smart message parsing and entity extraction
OCPD: Deterministic text analysis with measurable accuracy
"""
import re
from typing import Dict, List, Optional, Tuple
from dataclasses import dataclass
from enum import Enum

class MessageIntent(Enum):
    """Message intent classification"""
    GREETING = "greeting"
    BUSINESS = "business"
    SALES = "sales"
    SUPPORT = "support"
    PERSONAL = "personal"
    URGENT = "urgent"
    MEETING = "meeting"
    UNKNOWN = "unknown"

@dataclass
class ExtractedEntity:
    """Named entity extraction result"""
    type: str
    value: str
    start: int
    end: int
    confidence: float

@dataclass
class MessageAnalysis:
    """Complete message analysis result"""
    intent: MessageIntent
    entities: List[ExtractedEntity]
    sentiment: float  # -1.0 to 1.0
    language: str
    is_question: bool
    urgency_score: float  # 0.0 to 1.0
    suggested_template: Optional[str]

class NlpService:
    """INTJ: Natural language processing for message intelligence"""
    
    # Intent detection patterns
    INTENT_PATTERNS = {
        MessageIntent.GREETING: [
            r"\b(hi|hello|hey|greetings|good morning|good afternoon|good evening)\b"
        ],
        MessageIntent.BUSINESS: [
            r"\b(business|company|work|office|corporate|enterprise|organization)\b"
        ],
        MessageIntent.SALES: [
            r"\b(price|cost|buy|purchase|order|discount|deal|offer|sale|quote)\b"
        ],
        MessageIntent.SUPPORT: [
            r"\b(help|support|issue|problem|error|bug|fix|troubleshoot|assist)\b"
        ],
        MessageIntent.URGENT: [
            r"\b(urgent|asap|emergency|immediately|critical|priority|rush)\b"
        ],
        MessageIntent.MEETING: [
            r"\b(meeting|call|zoom|teams|schedule|appointment|discuss|chat)\b"
        ],
    }
    
    # Entity extraction patterns
    ENTITY_PATTERNS = {
        "phone": [
            r"\+?\d{1,3}[-.\s]?\(?\d{1,4}\)?[-.\s]?\d{1,4}[-.\s]?\d{1,9}",
            r"\b\d{3}[-.]\d{3}[-.]\d{4}\b",
        ],
        "email": [
            r"\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}\b"
        ],
        "url": [
            r"https?://(?:[-\w.])+(?:[:\d]+)?(?:/(?:[\w/_.])*(?:\?(?:[\w&=%.])*)?(?:#(?:[\w.])*)?)?"
        ],
        "name": [
            r"(?:Mr\.?|Mrs\.?|Ms\.?|Dr\.?|Prof\.?)\s+[A-Z][a-zA-Z]+",
            r"\b[A-Z][a-z]+\s+[A-Z][a-zA-Z]+\b",
        ],
        "date": [
            r"\b\d{1,2}[/-]\d{1,2}[/-]\d{2,4}\b",
            r"\b(?:today|tomorrow|yesterday|next week|next month)\b",
        ],
        "time": [
            r"\b\d{1,2}:\d{2}(?::\d{2})?\s*(?:AM|PM|am|pm)?\b"
        ],
        "money": [
            r"[$€£¥]\s*\d+(?:\.\d{2})?",
            r"\d+(?:\.\d{2})?\s*(?:USD|EUR|GBP|dollars?|euros?|pounds?)"
        ],
    }
    
    # Template suggestions based on intent
    TEMPLATE_SUGGESTIONS = {
        MessageIntent.GREETING: [
            "Hello! How can I help you today?",
            "Hi there! Thanks for reaching out.",
            "Good day! What can I do for you?"
        ],
        MessageIntent.SALES: [
            "Thank you for your interest! Our pricing starts at {price}.",
            "I'd be happy to provide a quote. Could you share more details?",
            "Great choice! This item is available for {price}."
        ],
        MessageIntent.SUPPORT: [
            "I'm sorry to hear you're experiencing issues. Let me help you troubleshoot.",
            "Thank you for reporting this. Our team will investigate.",
            "I understand your concern. Here's how we can resolve this:"
        ],
        MessageIntent.MEETING: [
            "I'd be happy to schedule a meeting. What time works for you?",
            "Can we connect on {platform} at {time}?",
            "Looking forward to our discussion on {date}."
        ],
    }
    
    def analyze_message(self, text: str) -> MessageAnalysis:
        """OCPD: Comprehensive message analysis"""
        if not text or not text.strip():
            return MessageAnalysis(
                intent=MessageIntent.UNKNOWN,
                entities=[],
                sentiment=0.0,
                language="unknown",
                is_question=False,
                urgency_score=0.0,
                suggested_template=None
            )
        
        cleaned_text = text.strip()
        
        # Detect intent
        intent = self._detect_intent(cleaned_text)
        
        # Extract entities
        entities = self._extract_entities(cleaned_text)
        
        # Analyze sentiment
        sentiment = self._analyze_sentiment(cleaned_text)
        
        # Detect language (simplified)
        language = self._detect_language(cleaned_text)
        
        # Check if question
        is_question = self._is_question(cleaned_text)
        
        # Calculate urgency
        urgency_score = self._calculate_urgency(cleaned_text, intent)
        
        # Suggest template
        suggested_template = self._suggest_template(intent, entities)
        
        return MessageAnalysis(
            intent=intent,
            entities=entities,
            sentiment=sentiment,
            language=language,
            is_question=is_question,
            urgency_score=urgency_score,
            suggested_template=suggested_template
        )
    
    def _detect_intent(self, text: str) -> MessageIntent:
        """INTJ: Intent classification with priority ranking"""
        text_lower = text.lower()
        scores = {}
        
        for intent, patterns in self.INTENT_PATTERNS.items():
            score = 0
            for pattern in patterns:
                matches = len(re.findall(pattern, text_lower, re.IGNORECASE))
                score += matches
            scores[intent] = score
        
        # Return highest scoring intent, default to PERSONAL if no match
        if max(scores.values()) > 0:
            return max(scores, key=scores.get)
        return MessageIntent.PERSONAL
    
    def _extract_entities(self, text: str) -> List[ExtractedEntity]:
        """INTJ: Named entity extraction"""
        entities = []
        
        for entity_type, patterns in self.ENTITY_PATTERNS.items():
            for pattern in patterns:
                for match in re.finditer(pattern, text, re.IGNORECASE):
                    entity = ExtractedEntity(
                        type=entity_type,
                        value=match.group(),
                        start=match.start(),
                        end=match.end(),
                        confidence=self._calculate_entity_confidence(
                            entity_type, match.group()
                        )
                    )
                    entities.append(entity)
        
        # Sort by start position
        entities.sort(key=lambda x: x.start)
        return entities
    
    def _calculate_entity_confidence(self, entity_type: str, value: str) -> float:
        """Calculate confidence score for extracted entity"""
        confidence = 0.8  # Base confidence
        
        # Boost confidence based on validation
        if entity_type == "phone":
            digits = re.sub(r"\D", "", value)
            if len(digits) >= 10:
                confidence = 0.95
            elif len(digits) >= 7:
                confidence = 0.85
            else:
                confidence = 0.6
        
        elif entity_type == "email":
            if re.match(r"^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}$", value):
                confidence = 0.98
        
        return confidence
    
    def _analyze_sentiment(self, text: str) -> float:
        """INTJ: Simple sentiment analysis"""
        positive_words = [
            "good", "great", "excellent", "amazing", "wonderful", "fantastic",
            "love", "like", "happy", "pleased", "satisfied", "perfect", "best",
            "awesome", "brilliant", "outstanding", "superb", "thank", "thanks"
        ]
        
        negative_words = [
            "bad", "terrible", "awful", "horrible", "hate", "dislike",
            "angry", "frustrated", "disappointed", "worst", "poor", "fail",
            "broken", "error", "issue", "problem", "bug", "crash", "wrong"
        ]
        
        text_lower = text.lower()
        words = re.findall(r"\b\w+\b", text_lower)
        
        positive_count = sum(1 for word in words if word in positive_words)
        negative_count = sum(1 for word in words if word in negative_words)
        
        total = positive_count + negative_count
        if total == 0:
            return 0.0
        
        # Normalize to -1.0 to 1.0 range
        return (positive_count - negative_count) / max(total, 1)
    
    def _detect_language(self, text: str) -> str:
        """INTJ: Language detection (simplified)"""
        # Simplified language detection based on character patterns
        # In production, use langdetect or similar library
        
        # Check for common non-Latin scripts
        if re.search(r"[\u4e00-\u9fff]", text):
            return "zh"  # Chinese
        elif re.search(r"[\u3040-\u309f\u30a0-\u30ff]", text):
            return "ja"  # Japanese
        elif re.search(r"[\uac00-\ud7af]", text):
            return "ko"  # Korean
        elif re.search(r"[\u0600-\u06ff]", text):
            return "ar"  # Arabic
        elif re.search(r"[\u0400-\u04ff]", text):
            return "ru"  # Russian
        
        return "en"  # Default to English
    
    def _is_question(self, text: str) -> bool:
        """Detect if message is a question"""
        question_patterns = [
            r"^\s*(?:what|how|when|where|why|who|which|whose|whom)",
            r"\?\s*$",
            r"\b(can you|could you|would you|will you|do you|did you|are you|is it)\b"
        ]
        
        for pattern in question_patterns:
            if re.search(pattern, text, re.IGNORECASE):
                return True
        
        return False
    
    def _calculate_urgency(self, text: str, intent: MessageIntent) -> float:
        """INTJ: Urgency scoring with multi-factor analysis"""
        urgency_score = 0.0
        
        # Base urgency from intent
        if intent == MessageIntent.URGENT:
            urgency_score += 0.8
        elif intent == MessageIntent.SUPPORT:
            urgency_score += 0.3
        elif intent == MessageIntent.SALES:
            urgency_score += 0.2
        
        # Boost for time-sensitive words
        urgent_words = [
            "now", "immediately", "asap", "urgent", "emergency", "critical",
            "deadline", "today", "hour", "minute", "quick", "fast", "rush"
        ]
        
        text_lower = text.lower()
        for word in urgent_words:
            if word in text_lower:
                urgency_score += 0.1
        
        # Cap at 1.0
        return min(urgency_score, 1.0)
    
    def _suggest_template(self, intent: MessageIntent, entities: List[ExtractedEntity]) -> Optional[str]:
        """INTJ: Smart template suggestion based on context"""
        templates = self.TEMPLATE_SUGGESTIONS.get(intent)
        if not templates:
            return None
        
        # Find money entity for price-related templates
        money_entity = next((e for e in entities if e.type == "money"), None)
        
        if money_entity and intent == MessageIntent.SALES:
            return templates[0].replace("{price}", money_entity.value)
        
        # Default to first template
        return templates[0] if templates else None
    
    def extract_phone_numbers(self, text: str) -> List[str]:
        """Extract and normalize phone numbers from text"""
        analysis = self.analyze_message(text)
        phones = [
            e.value for e in analysis.entities 
            if e.type == "phone" and e.confidence > 0.8
        ]
        
        # Normalize phone numbers
        normalized = []
        for phone in phones:
            digits = re.sub(r"\D", "", phone)
            if len(digits) >= 7:
                normalized.append(digits)
        
        return normalized
    
    def quick_reply_suggestions(self, message: str, max_suggestions: int = 3) -> List[str]:
        """Generate quick reply suggestions based on message analysis"""
        analysis = self.analyze_message(message)
        suggestions = []
        
        if analysis.is_question:
            suggestions.append("Yes, I can help with that.")
            suggestions.append("Let me look into this for you.")
        
        if analysis.intent == MessageIntent.GREETING:
            suggestions.append("Hello! How can I assist you today?")
            suggestions.append("Hi there! What can I do for you?")
        
        if analysis.intent == MessageIntent.SUPPORT:
            suggestions.append("I understand the issue. Let me help.")
            suggestions.append("Thanks for reporting. We're on it.")
        
        return suggestions[:max_suggestions]

# Global NLP service instance
nlp_service = NlpService()
