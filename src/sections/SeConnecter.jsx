import { BsPeopleFill } from "react-icons/bs";

const SeConnecter = () => {
  return (
    <>
      <div className="text-sm h-40 w-64  relative border ">
        <div className="inline-flex">
          <BsPeopleFill />
          SeConnecter
        </div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis
          eaque veritatis velit cumque quis aliquid perspiciatis?
        </p>
        <button className="bg-gray-500 absolute bottom-2 right-1">
          connexion
        </button>
      </div>
    </>
  );
};

export default SeConnecter;
