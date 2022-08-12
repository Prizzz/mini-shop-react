import React from "react";

const CreateProduct = () => {
  const submitHandler = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <form onSubmit={submitHandler}>
      <input
        type="text"
        className="border rounded py-2 px-4 mb-2 w-full outline-0"
        placeholder="Enter product title..."
      />

      <button
        type="submit"
        className="py-2 px-4 border rounded bg-yellow-400 hover:bg-yellow-500 transition"
      >
        Create
      </button>
    </form>
  );
};

export default CreateProduct;
