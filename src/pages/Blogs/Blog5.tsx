import BlogDetail from "../../components/common/BlogDetail";

const blogContent = [
    {
        type: "paragraph" as const,
        text: "Long ago, there lived a King. This King should have been content with his life, given all the riches and luxuries he had. However, this was not the case! The King always found himself wondering why he just never seemed content with his life. Sure, he had the attention of everyone wherever he went, attended fancy dinners and parties, but somehow, he still felt something was lacking and he couldn't put his finger on it.",
    },
    {
        type: "paragraph" as const,
        text: "One day, the King had woken up earlier than usual and decided to stroll around his palace. He entered his huge living room and came to a stop when he heard someone happily singing away. Following this singing, he saw that one of the servants was singing and had a very content look on his face. This fascinated the King and he summoned this man to his chambers. The man, his servant, entered the King's chambers as ordered. The King asked why he was so happy. To this the man replied: 'Your Majesty, I am nothing but a servant, but I make enough of a living to keep my wife and children happy. We don’t need too much, a roof over our head and warm food to fill our tummy. My wife and children are our inspiration; they are content with whatever little I bring home. I am happy because my family is happy.'",
    },
    {
        type: "paragraph" as const,
        text: "Hearing this, the King dismissed the servant and summoned his Personal Assistant to his chambers. The King related his personal anguish about his feelings and then related the story of the servant to his Personal Assistant, hoping that somehow he would be able to come up with some reasoning that here was a King who could have anything he wished for at a snap of his fingers and yet was not content, whereas his servant, having so little, was extremely content. The Personal Assistant listened attentively and came to a conclusion. He said, 'Your Majesty, I believe that the servant has not been made part of The 99 Club.' 'The 99 Club? And what exactly is that?' the King inquired. To which the Assistant replied, 'Your Majesty, to truly know what The 99 Club is, you will have to do the following... place 99 Gold Coins in a bag and leave it at this servant's doorstep; you will then understand what The 99 Club is.' That very same evening, the King arranged for 99 Gold coins to be placed in a bag at the servant's doorstep. Although he was slightly hesitant and thought he should have put 100 Gold Coins in the bag, since his assistant had advised him to put 99, that is what he did.",
    },
    {
        type: "paragraph" as const,
        text: "The servant was just stepping out of his house when he saw a bag at his doorstep. Wondering about its contents, he took it into his house and opened the bag. When he opened the bag he let out a great big shout of joy... Gold Coins... so many of them. He could hardly believe it. He called his wife to show her the coins and they were beside themselves. He then took the bag to a table and emptied it out and began to count the coins. Doing so, he realized that there were 99 coins and he thought it was an odd number, so he counted again and again, only to come to the same conclusion... 99 Gold Coins. He began to wonder, what could have happened to that last 1 coin? For no one would leave 99 coins. He began to search his entire house, looked around his backyard for hours, not wanting to lose out on that one coin. Finally, exhausted, he decided that he was going to have to work harder than ever to make up for that 1 Gold coin to make his entire collection an even 100 Gold Coins.",
    },
    {
        type: "paragraph" as const,
        text: "He got up the next morning in an extremely horrible mood, shouting at the children and his wife for his delay, not realizing that he had spent most of the night conjuring ways of working hard so that he had enough money to buy himself that gold coin. He went to work as usual, only not in his usual best mood, singing happily and whistling all day. He didn't even seem to notice that the King was watching him as he grumpily did his daily errands. Seeing the man's attitude change so drastically, the King was puzzled. He promptly summoned his assistant to his chambers. The King related his thoughts about the servant, and once again, his assistant listened. The King could not believe that the servant who until yesterday had been singing away and was happy and content with his life had taken a sudden change of attitude, even though he should have been happier after receiving the gold coins.",
    },
    {
        type: "paragraph" as const,
        text: "To this the assistant replied, 'Ah, but your Majesty, the servant has now officially joined The 99 Club.' He explained: 'The 99 Club is just a name given to those people who have everything but yet are never content, therefore they are always working hard and striving for that extra 1 to round it out to 100! We have so much to be thankful for and we can live with very little in our lives, but the minute we are given something bigger and better, we want even more! We are not the same happy contented person we used to be, we want more and more, and by wanting more and more, we don't realize the price we pay for it. We lose our sleep, our happiness; we hurt the people around us just as a price to pay for our growing needs and desires. That is what joining The 99 Club is all about.'",
    },
    {
        type: "paragraph" as const,
        text: "Hearing this, the King decided that from that day onwards, he was going to start appreciating all the little things in life.",
    },
];

export default function Blog5() {
    return <BlogDetail title="The 99 Club" author="Team PD Club" date="March 10, 2021" image="/img/blogs/blog-5.jpg" content={blogContent} />;
}
