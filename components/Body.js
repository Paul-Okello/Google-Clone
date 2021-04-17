import Image from "next/image";
import { MicrophoneIcon } from "@heroicons/react/solid";
import { SearchIcon } from "@heroicons/react/outline";
import { useRef } from "react";
import { useRouter } from "next/router";

function Body() {
  const searchInputRef = useRef(null);
  const router = useRouter();
  const search = (e) => {
    e.preventDefault();

    const term = searchInputRef.current.value;
    if (!term) return;
    router.push(`/search?term=${term}`);
  };
  return (
    <form className="flex flex-col items-center mt-44 flex-grow w-4/5">
      <Image
        src="https://www.google.co.uk/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png"
        height={100}
        width={300}
      />
      <div className="flex w-full mt-5 hover:shadow-lg focus-within:shadow-lg max-w-md rounded-full border-gray-200 px-5 py-3 items-center sm:max-w-xl lg:max-w-2xl">
        <SearchIcon className="h-5 mr-3 text-gray-500" />
        <input
          ref={searchInputRef}
          type="text"
          className="focus:outline-none flex-grow"
        />
        <MicrophoneIcon className="h-5" />
      </div>
      <div className="flex flex-col w-1/2 space-y-2 justify-center mt-8 sm:space-y-0 sm:flex-row">
        <button onClick={search} class="btn">
          Google Search
        </button>
        <button onClick={search} class="btn">
          I'm feeling lucky.
        </button>
      </div>
    </form>
  );
}

export default Body;
