import { GoArrowLeft } from "react-icons/go";
import { Link } from "react-router-dom";

const BackButton = () => {
  return (
    <button className="mb-10  rounded shadow bg-element text-sm hover:bg-element/80 transition-all duration-150">
      <Link to="/" className="flex items-center gap-2 px-4 py-2">
        <GoArrowLeft />
        Back
      </Link>
    </button>
  );
}
 
export default BackButton;