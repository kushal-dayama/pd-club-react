import CommonCard from "../../components/common/CommonCardPage";
import { technicalCourses } from "../../constants/courses";

export default function TechnicalCourses() {
    return <CommonCard entities={technicalCourses} showViewMore={false} title="Technical Courses" />;
}
