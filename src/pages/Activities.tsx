import CommonCard from "../components/common/CommonCardPage";
import { activities } from "../constants/activities";

export default function Activities() {
    return <CommonCard entities={activities} showViewMore={false} title="Our Activities"/>;
}
