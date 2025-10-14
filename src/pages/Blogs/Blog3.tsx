import BlogDetail from "../../components/common/BlogDetail";

const blogContent = [
    {
        type: "paragraph" as const,
        text: "Modern science operates on the principle of reductionism, that is, reducing all phenomena in the universe including human behavior, to the interactions of subatomic particles acting according to natural laws and impersonal forces.",
    },
    {
        type: "paragraph" as const,
        text: "Eminent scientists have expressed that this basic scientific methodology of reductionism is itself inadequate for understanding life in its completeness. Consider the statements of two Nobel Laureate Scientists:",
    },
    {
        type: "list" as const,
        items: [
            "“I am very astonished that the scientific picture of the real world around me is very deficient. It gives a lot of factual information, puts all our experience in a magnificently consistent order, but it is ghastly silent about all and sundry that is really near to our heart, that really matters to us. It cannot tell us a word about red and blue, bitter and sweet, physical pain and physical delight; it knows nothing of beautiful and ugly, good or bad, God and eternity. Science sometimes pretends to answer questions in these domains, but the answers are very often so silly that we are not inclined to take them seriously.” – Physicist Erwin Schrodinger",
            "“I maintain that the human mystery is incredibly demeaned by scientific reductionism, with its claim in promissory materialism to account eventually for all the spiritual world in terms of patterns of neuronal activity. This belief must be classed as a superstition. … We have to recognize that we are spiritual beings with souls existing in a spiritual world as well as material beings with bodies and brains existing in a material world.” – Brain researcher John Eccles",
        ],
    },
    { type: "heading" as const, text: "Consequences On Human Values" },
    {
        type: "paragraph" as const,
        text: "This incompleteness of the reductionistic approach has grave consequences on the entire worldview of modern human society; it is set to erode all that we cherish as humane and valuable.",
    },
    {
        type: "list" as const,
        items: [
            "“The most beautiful and most profound emotion we can experience is in the sensation of the mystical. It is a shower of all true science…. That deeply emotional conviction of the presence of a superior reasoning power which is revealed in the comprehensible universe forms my idea of God.” – Albert Einstein",
            "“But now for many years I cannot endure to read a line of poetry: I have tried lately to read Shakespeare and found it so intolerably dull that it nauseated me. I have also almost lost my taste for pictures or music… The loss of these tastes is a loss of happiness, and may possibly be injurious to the intellect, and more probably to the moral character, by enfeebling the emotional part of our nature.” – Charles Darwin",
            "“Man may be able to program his own cells with synthetic information long before he’ll be able to access adequately the long-term consequences of such alterations, long before he’ll be able to formulate goals and long before he can resolve the ethical and moral problems which will be raised.” – Nobel Laureate Geneticist Marshall Nirenberg",
            "“The legal issue of ‘responsibility’ seems to imply that there is indeed, within each of us, some kind of an independent ‘self’ with its own responsibilities – and by implications, rights – whose actions are not attributable to inheritance, environment, or chance.” – Physicist Sir Roger Penrose",
            "“We may well reach the point in not too distant future where the parables and images of the old religions will have lost their persuasive force even for the average person; when that happens, I am afraid that all the old ethics will collapse like a house of cards and that unimaginable horrors will be perpetrated.” – Nobel Laureate in Physics Wolfgang Pauli. Unless one has an understanding of God as the Supreme Controller, the call to ethics has no weight.",
        ],
    },
    { type: "heading" as const, text: "Paradigm Shift in Science" },
    {
        type: "paragraph" as const,
        text: "Due to these ominous trends, intellectual trend-setters worldwide have started questioning the validity and utility of indiscriminate scientific and technological “advancement.” What is the purpose of scientific research? Human happiness. But if that is not being achieved, has science erred? Where? What can be done about it?",
    },
    {
        type: "paragraph" as const,
        text: "Maybe it’s time for science to set its priorities right as was recommended by Michael Faraday centuries ago: “We ought to value the privilege of knowing God’s truth far beyond anything we can have in this world.” Science may add years to our life, but only spirituality will add life to our years. Without spirituality, we have no answers to fundamental questions of value, purpose and meaning – all of which are critical for satisfaction and fulfillment.",
    },
    {
        type: "paragraph" as const,
        text: "Moreover, the reductionistic non-spiritual paradigm of modern science has not been proven, but presumed. This presumption was questioned by eminent scientist Louis Pasteur centuries ago: “You pass from matter to life because your intelligence of today… cannot conceive things otherwise. How do you know that in ten thousand years one will not consider it more likely that matter has emerged from life?” Open-minded questioning has become vital for human happiness and even survival itself.",
    },
    {
        type: "paragraph" as const,
        text: "Science needs to harmonize itself with the supreme scientist God, as recommended by Albert Einstein, “I believe in God – who reveals himself in the orderly harmony of the Universe. I believe that intelligence is manifested throughout all Nature. The basis of scientific work is the conviction that the world is an ordered and comprehensible entity and not a thing of Chance. When I sit here and watch the mighty ocean, I can imagine the treasures hidden below the bed of the sea, when I see the clear blue sky above, I feel sky is the limit. When I cast my eyes around I see the wonders and beauties of Nature. Science must learn to live in Harmony with all these magnificent gifts of God to Humanity.”",
    },
    { type: "heading" as const, text: "Vedic Value-Based Spirituality" },
    {
        type: "paragraph" as const,
        text: "“It is already becoming clear that a chapter which had a Western beginning will have to have an Indian ending if it is not to end in the self-destruction of the human race. At this supremely dangerous moment in history, the only way of salvation for mankind is the Indian Way.” This remark of Dr Arnold Toynbee indicates that the best contribution of India to the world should not be in the form of software engineers, but in the form of spiritual engineers.",
    },
    {
        type: "paragraph" as const,
        text: "If we want intellectually satisfying spiritual alternatives to the materialistic worldview offered by reductionistic science, India is our best hope. Many Western thinkers have acknowledged the glory of Vedic spiritual wisdom.",
    },
    {
        type: "list" as const,
        items: [
            "“In religion, India is the only millionaire……the one land that all men desire to see, and having seen once, by even a glimpse, would not give that glimpse for all the shows of all the rest of the globe combined.” – Mark Twain",
            "“Whenever I have read any part of the Vedas, I have felt that some unearthly and unknown light illuminated me. In the great teaching of the Vedas, there is no touch of sectarianism. It is of all ages, climbs, and nationalities and is the royal road for the attainment of the Great Knowledge.” – Henry David Thoreau",
            "“The marvel of the Bhagavad-Gita is its truly beautiful revelation of life’s wisdom which enables philosophy to blossom into religion.” – Herman Hesse",
            "“Best of books – containing a wisdom blander and far more sane than that of the Hebrews, whether in the mind of Moses or of Him of Nazareth. Were I a preacher, I would venture sometimes to take from its texts the motto and moral of my discourse. It would be healthful and invigorating to breathe some of this mountain air into the lungs of Christendom.” – Amos Bronson Alcott",
            "“The message of the Gita is a universal call to Democracy, liberty for the peoples, liberty for each individual. The great affirmation of the Bhagavad Gita is that every individual, whatever he may be, rich or poor, can and must raise himself on life’s path and that he has a right to his emancipation, social, intellectual, and spiritual.” – Louis Revel",
        ],
    },
    {
        type: "paragraph" as const,
        text: "The glory of Vedic wisdom was seen in the caliber of its followers. When we become devoted to Supreme Intelligent, we become spiritual. This was the basis of the theistic Vedic social order. Moreover, another cardinal principle was: real human progress is measured not by the development of technological facilities, but by the development of spiritual qualities. The glorious social order as present in India (before its spiritual foundation was destroyed by the British imperial rule) was noted by British statesman Edmund Burke...",
    },
    {
        type: "paragraph" as const,
        text: "Great leaders of Vedic knowledge have stated that the foundation for real peace can be established only by spiritual wisdom, “Unless there is an awakening of divine consciousness in the individual, there is no use of crying for world peace.” We need not mistake genuine devotion to be the irrational religious fanaticism seen in some parts of the world today. It can be analysed that the failings of such so-called religion are as follows: “Religion without philosophy is sentimentalism or sometimes fanaticism, Philosophy without religion is mental speculation.” If there is systematic philosophical education, then spirituality far from leading to fanaticism will lead to real harmony with nature and the master of nature.",
    },
    { type: "heading" as const, text: "India as a Global Spiritual Leader" },
    {
        type: "paragraph" as const,
        text: "The Swiss professor Dr. Richard Ernst – the 1999 Nobel prize winner in chemistry – when projecting the impact of science in this millennium, took special note of India’s past and her present intellectual potential for shaping humanity’s future...",
    },
    {
        type: "paragraph" as const,
        text: "Eminent thinkers throughout the world, including leading scientists such as Nobel Laureate Richard R. Ernst, peace workers such as Nobel Laureates Oscar Arias Sanchez and Betty Williams, and spiritualists such as Nobel Laureate the Dalai Lama, firmly believe that only a synthesis of science and spirituality can lead the world out of the present troubled times.",
    },
    {
        type: "paragraph" as const,
        text: "The youth of India have a unique position in the world. By virtue of birth in the holy land of India, they inherit the priceless wealth of spiritual knowledge expounded in the Vedic texts. And by virtue of their education and training, they have developed the scientific spirit of rational inquiry...",
    },
];

export default function Blog3() {
    return (
        <BlogDetail
            title="Science of Values"
            author="Team PD Club"
            date="May 19, 2021"
            image="/img/blogs/blog-3.jpeg"
            content={blogContent}
        />
    );
}
