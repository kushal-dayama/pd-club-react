import { recentBlogs } from "../../constants/blog-details";
import CommonCard from "../common/CommonCardPage";

export default function RecentBlogs() {
    return <CommonCard entities={recentBlogs} showViewMore={true}/>;
}
