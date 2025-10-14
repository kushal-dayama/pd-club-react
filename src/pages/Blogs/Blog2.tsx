import BlogDetail from "../../components/common/BlogDetail";

const blogContent = [
    {
        type: "paragraph" as const,
        text: "“We have controlled machines and uncontrolled men,” declares a slogan depicting the potential threat of global disaster due to the misuse of technology. It catches the tragic irony of modern society. The last century has seen amazing advances in science and technology, by which, “the world is at your finger-tips”, as some ads put it. Yet statistics expose the twentieth century as the most violent century in known human history. The book Ending Violent Conflict by Michael Renner states that three times more people died in wars in of the twentieth century than in the entire history of warfare between A.D. 1 and 1899.",
    },
    {
        type: "paragraph" as const,
        text: "Therefore, the question begs itself: where has modern society gone wrong? Despite extensive attempts at mass education, why has the advancement of knowledge not made people peaceful? Illiteracy can no longer be considered a reason since the best schools in the world have also witnessed violence in the last decade. The foundation of American society has been rocked by the repeated massacres by school children of their own peers and teachers for no good reason whatsoever. In many schools, metal detectors now screen every child before he enters ‘the modern temple of learning’.",
    },
    {
        type: "heading" as const,
        text: "Immorality Originates In Spiritual Bankruptcy",
    },
    {
        type: "paragraph" as const,
        text: "The Vedic texts, a vast body of profound knowledge coming down from ancient India, provide thought-provoking insights into this sorry state of affairs. In the Vedic paradigm, knowledge is exalted for its transformational power. “What you know” is not considered as important as “What is the effect on you of what you know”. In marked contrast, modern education swamps students with information, but sadly the information brings hardly any transformation in the students. It scarcely leads to the strengthening of character; many of the students indulge in self-destructive habits like smoking, alcoholism and drug abuse; and even the best of them considers earning maximum money as their most important value. “Information, information, information, but no transformation” is the plight of the modern educational system.",
    },
    {
        type: "paragraph" as const,
        text: "Of course, many curricula worldwide do have some sort of value education, but that value education mostly serves a cosmetic purpose; it is ineffectual in actually building the character of the students. The Vedic texts assert unequivocally that morality has to be founded on spirituality; otherwise, it soon becomes a mere lip-service. Unless one has an understanding of God and His laws, the call to ethics has little weight. After all, what is there in an atheist’s worldview to impel him to stick to morality, especially if he thinks that the primary goal of life is the pursuit of bodily pleasure and that he can get away with whatever he does, provided he just does it cleverly enough?",
    },
    {
        type: "paragraph" as const,
        text: "Further, if a person doesn’t understand his real identity as an eternal soul, if he thinks that this life is all that he has for enjoyment, what will stop him from sacrificing morality at the altar of bodily pleasure? “Beg, borrow, steal, kill, but enjoy” – that will become the motto of such a spiritually bankrupt person.",
    },
    {
        type: "heading" as const,
        text: "State-Funded Atheistic Indoctrination",
    },
    {
        type: "paragraph" as const,
        text: "Modern scientific (read ‘atheistic’) education is significantly responsible for this spiritual and social decay. Eminent scientists like Newton, Copernicus, Faraday, Kelvin, Max Planck, Maxwell and Einstein, to name a few, have stated that their scientific study has led them to the conclusion that, behind the marvels of nature, is a super-intelligent being, God. Many influential leaders of the West including US Presidents like Benjamin Franklin and John Adams, philosophers like Socrates and Ralph Waldo Emerson, business magnates like Henry Ford, psychologists like Carl Jung and C P Dupey, and Nobel-Prize winning authors like Herman Hesse and Isaac Bashevis Singer have expressed their belief in the reincarnation of the soul. Even those scientists, who are not spiritually-minded, readily admit that spiritual subjects such as the existence of the soul and God are simply beyond their scope. But unfortunately, science textbooks worldwide portray dubious theories such as the big bang theory and evolution theory as proven facts, thus forcing the naïve and innocent students to embrace atheism as the only “scientific” way of looking at the world. Many eminent scientists have openly challenged the scientific validity of these theories. When such theories are far from being truths, presenting them to students in textbooks as truths is not scientific education, but atheistic indoctrination. It’s not just ordinary indoctrination, but state-funded indoctrination. If we let our children be taught that they have come from monkeys, how can we expect them to not behave like monkeys? The notion that life is a result of chemical combination breeds a murderous mentality toward both subhumans and humans:",
    },
    {
        type: "quote" as const,
        text: "“If life is just a product of chemicals, then why can I not cut a bag of chemicals (an animal) and eat it, if it tastes good?\n\n“If there is nothing more to life than chemical activity, then why can I not destroy the lump of chemicals (a human being) if it obstructs my path to success?”\nWhen entire generations grow up with such perverted conceptions, is it strange that peace eludes humanity?",
    },
    {
        type: "heading" as const,
        text: "Empowerment by Spiritual Education",
    },
    {
        type: "paragraph" as const,
        text: "If we want our children to inherit a peaceful world, we have to teach them the spiritual truths that will engender that peace – within and without. To this end, the following universal spiritual principles need to be incorporated into the syllabus worldwide: God is the Supreme Father of everyone and the Supreme Owner and Controller of everything. We are accountable for all our actions to God (As you sow, so shall you reap). We are spirit souls, eternal children of God and our real happiness is not in material acquisition, but in spiritual realization, in lovingly harmonizing ourselves with nature and God.",
    },
    {
        type: "paragraph" as const,
        text: "These spiritual precepts do not contradict the principle of secularism because secularism should not be misunderstood or misinterpreted as atheism. Secularism basically implies impartiality toward different religions and the above precepts are the common underlying teachings of the major religions of the world. It will be most unfortunate if, in the name of secularism, we force people to stay in spiritual ignorance and thus court global disaster.",
    },
    {
        type: "paragraph" as const,
        text: "Great thinkers and spiritual leaders practically demonstrated the efficacy of spiritual education as a means to individual and social transformation during the period of the counterculture in the USA in the 1960s. Empowered by this divine knowledge, thousands of youths were able to break free from the shackles of all self-destructive habits and become selfless spiritual activists, dedicated to the holistic service of God and all living beings. Even today, it is a globally repeated and repeatable phenomenon that when an individual adopts genuine spirituality, he concomitantly develops character and compassion, which are the pre-requisites for sustained world peace.",
    },
    {
        type: "quote" as const,
        text: "“Without the awakening of divine consciousness within the individual, there is no use of crying for world peace.”",
    },
];

export default function Blog2() {
    return (
        <BlogDetail
            title="Is something missing in modern Education"
            author="Team PD Club"
            date="January 15, 2021"
            image="/img/blogs/blog-2.jpeg"
            content={blogContent}
        />
    );
}
