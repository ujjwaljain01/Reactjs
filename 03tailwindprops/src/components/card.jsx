import React from "react";

function card({username='hello',hello = {},arr = []}) {
    return (
        <>
        <div className="max-w-xs rounded-md shadow-md bg-black text-gray-100">
        <img
          src="https://avatars.githubusercontent.com/u/117667329?v=4"
          alt=""
          className="object-cover object-center w-full rounded-t-md h-52 bg-gray-500"
        />
        <div className="flex flex-col justify-between p-6 space-y-8">
          <div className="space-y-2">
            <h2 className="text-3xl font-semibold tracking-wide">{username}</h2>
            <p className="text-gray-400">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quas temporibus dolorum earum ipsum perspiciatis placeat est reprehenderit ut! Quasi, totam. Culpa asperiores, maiores sequi architecto eius pariatur molestias quis repudiandae!
              {arr}
            </p>
          </div>
          <button
            type="button"
            className="flex items-center justify-center w-full p-3 font-semibold tracking-wide rounded-md bg-gray-800 text-gray-200"
          >
            {hello.age}
          </button>
        </div>
      </div>
      </>
    )
}

export default card