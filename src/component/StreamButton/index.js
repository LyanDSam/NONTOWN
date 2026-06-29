"use client";

export default function StreamButton() {
  const aLERTIT = () => {
    alert("ON PROGRES DAWG");
  };

  return (
    <button
      className="p-3 bg-secondary rounded-md my-5 cursor-pointer"
      onClick={aLERTIT}
    >
      STREAM NOW
    </button>
  );
}