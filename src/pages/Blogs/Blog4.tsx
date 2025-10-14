import BlogDetail from "../../components/common/BlogDetail";

const blogContent = [
    {
        type: "paragraph" as const,
        text: "Imagine a symbiotic factory setup, involving two hypothetical factories A and B. Suppose the two factories could be arranged such that the waste product of factory A would serve as the raw material for factory B and the waste product of factory B would serve as the raw material for factory A. Then the factory setup would be able to run perpetually with zero expenditure and unlimited profit! However, the raw materials for a factory are generally quite expensive to obtain and the waste products are generally not only useless, but expensive to even dispose off. Thus, the symbiotic factory is nothing more than a scientific fantasy.",
    },
    {
        type: "paragraph" as const,
        text: "Amazingly enough, a symbiotic factory setup is not only possible, but already operational in nature: respiration and photosynthesis. At every moment, we breathe in oxygen (O2) and give out carbon dioxide (CO2). O2 is life-sustaining and CO2 is life-destroying, if present in excessive quantity. Therefore, respiration by itself would diminish the supply of O2 and increase CO2 in the atmosphere, soon making the atmosphere and the planet inhabitable for all O2-breathing creatures. But there is a magnificent balance system in nature, which exactly takes in the waste product of respiration CO2 and gives out the raw material for respiration O2 – plant photosynthesis. Isn’t it remarkable that what the best scientists on the planet could do nothing more than dream about is already realized in nature. No wonder Albert Einstein remarked, “There are two ways to live life. One is to see nothing as a miracle and the other is to see everything as a miracle.”",
    },
    { type: "heading" as const, text: "Does Nature Work Automatically?" },
    {
        type: "paragraph" as const,
        text: "Some people claim that nature certainly works remarkably, but its working is automatic and more or less governed by chance. They argue that seeing any divinity or God controlling nature is just a sentimental longing coming from an unscientific mentality. However, the word ‘automatically’ used in this context is somewhat misleading because ‘automatically’ doesn’t indicate the absence of a controller, but rather the absence of knowledge of the controller. When we say that a machine works automatically, what it means is that the machine doesn’t require continuous interaction with the operator. But still there is an operator who activates the machine and monitors its working.",
    },
    {
        type: "paragraph" as const,
        text: "For example, if you want to have fun with a child, then you might get an automatic toy. While staying out of view of the child, you release the toy and it comes moving into the view of the child. Seeing the toy moving automatically, the child becomes astounded and thinks that the toy is working by itself. But you as a wise person will never be misled into the same conclusion as this inexperienced child. For you know that even if the toy appears to be moving by itself, it is still programmed by you.",
    },
    {
        type: "paragraph" as const,
        text: "Similarly, the magnificent phenomena in nature are not occurring by themselves, as uninformed people, like the naïve child, may imagine. All natural phenomena are working under the expert, though remote and therefore invisible programming of God, as has been the conclusion throughout history of many wise people – both religious and scientific. Thus it is that the famous physicist Lord Kelvin asserted, “If you think deeply enough, you will be forced by science to believe in God.”",
    },
];

export default function Blog4() {
    return (
        <BlogDetail
            title="The Unparalleled Story"
            author="Team PD Club"
            date="July 1, 2021"
            image="/img/blogs/blog-4.jpeg"
            content={blogContent}
        />
    );
}
