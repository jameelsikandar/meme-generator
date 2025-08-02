import React, { useState } from "react";
import { useDraggable } from "@dnd-kit/core";

const Text = ({ id, x, y }) => {
  const { attributes, listeners, setNodeRef, transform } = useDraggable({ id });

  const [editMode, setEditMode] = useState(false);
  const [val, setVal] = useState("Double Click to edit");

  const style = {
    position: "absolute",
    cursor: editMode ? "text" : "grab",
    background: "#fff",
    padding: "4px 8px",
    border: "1px solid #ccc",
    borderRadius: "4px",
    userSelect: "none",
    transform: `translate3d(${x + (transform?.x || 0)}px, ${
      y + (transform?.y || 0)
    }px, 0)`,
    minWidth: "100px",
    zIndex: 10,
  };

  const handleDoubleClick = (e) => {
    e.stopPropagation(); // prevent drag start
    setEditMode(true);
  };

  const handleBlur = () => setEditMode(false);

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      setEditMode(false);
    }
  };

  return (
    <div
      ref={setNodeRef}
      style={style}
      {...(editMode ? {} : listeners)} // disable dragging when editing
      {...attributes}
      onDoubleClick={handleDoubleClick}
    >
      {editMode ? (
        <input
          type="text"
          autoFocus
          value={val}
          onChange={(e) => setVal(e.target.value)}
          onBlur={handleBlur}
          onKeyDown={handleKeyDown}
          style={{
            border: "none",
            outline: "none",
            width: "100%",
            fontSize: "inherit",
            background: "transparent",
          }}
        />
      ) : (
        val
      )}
    </div>
  );
};

export default Text;
