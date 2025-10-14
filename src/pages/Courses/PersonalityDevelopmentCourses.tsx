import CommonCard from "../../components/common/CommonCardPage";
import { personalityDevelopmentCourses } from "../../constants/courses";

export default function PersonalityDevelopmentCourses() {
    return <CommonCard entities={personalityDevelopmentCourses} showViewMore={false} title="Personality Development Courses" />;
}
