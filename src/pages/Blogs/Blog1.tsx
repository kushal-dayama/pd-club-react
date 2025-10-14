import BlogDetail from "../../components/common/BlogDetail";

const blogContent = [
    {
        type: "paragraph" as const,
        text: "We live in the age of technology. We commute by automobiles and airplanes and communicate by emails and mobiles. The media and the Internet provide us the latest information from all over the world. Movies filled with hi-tech special effects entertain us. Air conditioners and room heaters keep our life comfortable despite climatic inconveniences…. The list goes on. Technology has transformed almost every aspect of our lives. Of course, a few of us may have concerns about the pollution and environmental problems that technology has led to. But overall most people feel that technology has benefited us immensely. Where is technology taking us?",
    },
    {
        type: "paragraph" as const,
        text: "The razzle-dazzle of comforts, luxuries and hi-tech gadgets make it appear that technology has led to progress in human society. But has the quality of life of people in the modern technology-centered society improved?",
    },
    {
        type: "list" as const,
        items: [
            "In the past people would leave the doors of their homes open and still be fearless. Now moderns lock, bolt, chain and buzzer-alarm their doors and are still fearful. Is this progress?",
            "Most moderns are proud of their posh houses, fast cars, smooth roads and skyscraper offices, but they can’t even sleep without a pill. Can a society be considered progressed if it makes its people struggle to get the simple and essential pleasure of sleeping?",
            "The technological worldview being materialistic gives rise to selfishness, competition and exploitation. Most moderns, despite the show of romantic love, can’t trust their own spouses – what then to speak of parents and children or bosses and colleagues. Do alienated, suspicious people comprise a progressive society?",
            "Mechanized factories can never offer as much employment as the farms did in the past. So a large number of people have to suffer or fear unemployment. For subsistence some of the unemployed turn to begging and others to crime. And overall the modernized industrial environment is so agitating to the mind that self-destructive addictions become the only solace for most people. Are unemployment, criminality and addictions indicators of progress?",
            "Technology provides comforts, but the high-speed high-stress technology-centered lifestyle takes away the peace of mind necessary to enjoy the comforts. A software engineer has an AC in his office, but still he sweats – not due to heat, but due to tension. Thus, technology makes us comfortably miserable.",
            "Medical technology may have eradicated a few diseases and may offer cures to some more. But far more people need medical attention today than in the past due to unhealthy congested city living, sedentary lifestyles and polluted air, water and food. This is evident from the ever-increasing number of clinics, hospitals and medicine shops. Moreover, many of the sophisticated medical treatments, unlike the traditional herbal cures, are prohibitively expensive.",
            "Most moderns can hardly imagine life without television, movies and myriad other forms of hi-tech entertainment. And they pity their ancestors who did not have all this enjoyment. But people in the past knew how to find joy in the simple things of life – like sharing and caring in joint families, observing and learning from nature and hearing and chanting the names and glories of the Supreme Lord. Consequently, they did not find life boring. On the contrary, it is we who have divorced ourselves from simple natural pleasures by our infatuation with technology.",
            "Technology intoxicates us with the feeling of being the controller. Just by pressing a switch, we can cause huge machines to perform complex actions. Just by clicking a key, we can summon information from any part of the world. By constantly working with machines, we become habituated to controlling them and expect everything and everyone to be similarly controlled. When people refuse to be controlled like machines, we end up with all sorts of relationship conflicts ranging from domestic cold wars to marital ruptures, from quarrels to murders.",
        ],
    },
    { type: "divider" as const },
    { type: "heading" as const, text: "Technology – Ancient And Modern" },
    {
        type: "paragraph" as const,
        text: "Many of us may have been led to believe that we moderns possess the most advanced technology in the history of our planet. However, the pyramids in Egypt, the Stonehenge monoliths in the UK and the non-rusting iron pillars in India are some tell-tale products of an ancient technology that was amazingly superior to our modern technology. In fact, the Vedic texts describe even more intriguing technologies – Vimanas, Brahmastras, and astonishingly potent Ayurvedic healing methods.",
    },
    {
        type: "paragraph" as const,
        text: "These examples show that the Vedic attitude is not opposed to technology per se. But it cautions us about infatuation with material technology leading to neglecting or forgetting the spiritual goal of life.",
    },
    { type: "divider" as const },
    { type: "heading" as const, text: "Spiritualizing Modern Technology" },
    {
        type: "paragraph" as const,
        text: "We don’t have to give up technology; but we do have to give up the illusion that technology can make us happy. If we are diseased, we don’t have to give up the painkiller; but we do have to give up the illusion that the painkiller can cure our disease. We have to adopt the cure of spirituality for attaining real happiness.",
    },
    {
        type: "paragraph" as const,
        text: "The Vedic principle of yukta-vairagya — devotional renunciation — teaches that without being attached to material things for personal enjoyment, we can use them in the service of God. Modern spiritual teachers encourage using the same technology that distracts humanity, to spread spiritual awareness instead.",
    },
    {
        type: "list" as const,
        items: [
            "Spiritual organisations use animatronics, robotics and multimedia theaters to kindle the interest of people in spiritual teachings.",
            "They offer devotionally-oriented toys, games and media that nurture virtue instead of vice.",
            "Modern preachers and teachers use slides, videos and online platforms to share timeless spiritual wisdom — just as you’re reading this article online now!",
        ],
    },
    {
        type: "paragraph" as const,
        text: "Thus, spirituality and technology can harmoniously coexist — if technology serves the spiritual goal rather than replacing it. Blending Western material progress with Indian spiritual wisdom can truly uplift humanity.",
    },
    {
        type: "quote" as const,
        text: "It’s not technology that fails us — it’s forgetting the purpose of life that does.",
    },
];

export default function Blog1() {
    return (
        <BlogDetail
            title="Where Technology Falls Short"
            author="Team PD Club"
            date="February 05, 2021"
            image="/img/blogs/blog-1.jpeg"
            content={blogContent}
        />
    );
}
