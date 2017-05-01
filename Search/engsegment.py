# -*- coding:utf-8 -*-
import nltk
from nltk.corpus import stopwords
import json
comments = ['I am not fond of shopping. But when i got there in saw the affordable and a lot of clothes to choose and made me wants to shop. This mall will also test your bargaining skills. The only problem is the mall close at 8pm. It is quite early though. Outside the mall are a lot of food stalls. It...',
            "If you can't go to Chatuchak Weekend Market, Platinum Mall is best option..It's wholesale mall & you’ll save more if buying in larger quantities ( fashion clothing and accessories )Fun shopping with nice foodcourt @ 4th floor; crowded, but really enjoy the atmosphere",
            "we actually wanted to go to chatuchak weekend market . my friend recommended we go to Platinum instead as it's air conditioned . was delighted to be here . plenty of handicrafts store on level 4. men's clothing was very cheap as well as accessories . the food court was awesome too. there is a huge KFC in the food...",
            "This Mall is located in the Pratunam Area and you can access it directly from the Central World through the newly constructed Walk Way.It has six floors of clothes and accessories and each floor is named after the six famous International shopping districts: Soho,Oxford,Orchard,Camden,Ginza and Nathan.The complex also contains a Novotel Hotel,food court and various other eating options like Black..."]


def extract_tags(comments):
    idf = {}
    temp = []
    if not comments:
        return []
    for comment in comments:
        comment = json.loads(comment)
        content = comment['content']
        words = nltk.word_tokenize(content.decode('utf8'))
        clean_words = [w for w in words if (w not in stopwords.words('english'))]
        tag_words = nltk.pos_tag(clean_words, tagset='universal')
        result = [w[0] for w in tag_words if w[1] in [u'NOUN', u'ADV', u'ADJ', u'ADP']]
        tf = {}
        for r in result:
            if tf.has_key(r):
                tf[r] += 1
            else:
                tf[r] = 1
        for key, value in tf.iteritems():
            tf[key] = float(value) / len(result)
        temp.append(tf)
        result = set(result)
        for r in result:
            if idf.has_key(r):
                idf[r] += 1
            else:
                idf[r] = 1
    for key, value in idf.iteritems():
        idf[key] = len(comments) / (value + 1)
    result = []
    for tf in temp:
        for key, value in tf.iteritems():
            tf[key] = value * idf[key]
        result += (sorted(tf.items(), key=lambda d: d[1], reverse=True)[:3])
    result = sorted(result, key=lambda d: d[1], reverse=True)
    result = [term[0] for term in result[:3]]
    return result

# print extract_tags(comments)