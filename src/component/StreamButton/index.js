"use client";

export default function StreamButton() {
  const aLERTIT = () => {
    alert("ON PROGRES DAWG");
  };

  return (
    <button
      className="p-3 bg-purple-400 rounded-2xl my-5"
      onClick={aLERTIT}
    >
      STREAM NOW
    </button>
  );
}