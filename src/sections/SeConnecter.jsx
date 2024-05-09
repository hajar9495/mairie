import { BsPeopleFill } from "react-icons/bs";

const SeConnecter = () => {
  return (
    <>
      <div className="text-sm h-40 w-64  relative border bg-grisForm">
        <div className="flex items-stretch bg-bleuForm text-white w-full text-lg">
          <BsPeopleFill className="self-center" />
          <p className="uppercase pl-2 ">Se Connecter</p>
        </div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis
          eaque veritatis velit cumque quis aliquid perspiciatis?
        </p>
        <button className="bg-gray-200 absolute bottom-3 right-1">
          creer son espace perso
        </button>
      </div>
    </>
  );
};

export default SeConnecter;
