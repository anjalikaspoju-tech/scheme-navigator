import spacy
nlp = spacy.load("en_core_web_sm")

def extract_land(text):
    doc = nlp(text)
    for token in doc:
        if token.like_num:
            return float(token.text)
