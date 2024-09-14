import { MdContentCopy } from "react-icons/md";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";

import { useState } from "react";

function Copy() {
  const [buttonText, setButtonText] = useState(<MdContentCopy />);
  const handleClick = () => {
    setButtonText(<IoMdCheckmarkCircleOutline />);

    setTimeout(() => {
      setButtonText(<MdContentCopy />);
    }, 2000);
  };

  return (
    <>
      <button
        onClick={handleClick}
        className="inline-flex h-12 items-center justify-center rounded-md bg-neutral-950 px-6 font-medium text-neutral-50 shadow-lg shadow-neutral-500/20 transition active:scale-95"
      >
        {buttonText}
      </button>
    </>
  );
}

export default Copy;
