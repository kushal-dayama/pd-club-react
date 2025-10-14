import CommonCard from "../../components/common/CommonCardPage";
import { allBlogs } from "../../constants/blog-details";

export default function AllBlogs() {
    return <CommonCard entities={allBlogs} title="Blogs" />;
}
