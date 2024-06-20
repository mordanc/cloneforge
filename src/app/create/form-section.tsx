"use client";

import { useState } from "react";
import GameForm from "./game-form";
import AddonForm from "./addon-form";
import CreateGameSelector from "./create-game-selector";

const FormSection = () => {
  const [creatingGame, setCreatingGame] = useState(true);

  return (
    <div>
      <div className="mb-12 flex space-x-3 text-2xl">
        <span>Create a </span>
        <div onClick={() => setCreatingGame(true)}>
          <CreateGameSelector active={creatingGame} text="Game" />
        </div>{" "}
        <span>/</span>{" "}
        <div onClick={() => setCreatingGame(false)}>
          <CreateGameSelector active={!creatingGame} text="Addon" />
        </div>
      </div>

      {creatingGame ? <GameForm /> : <AddonForm />}
    </div>
  );
};

export default FormSection;
