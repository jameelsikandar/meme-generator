import React, { useState, useRef } from "react";
import { useSearchParams } from "react-router";
import Button from "react-bootstrap/Button";
import { DndContext } from "@dnd-kit/core";
import Text from "../components/Text";
import { toJpeg } from "html-to-image";
import download from "downloadjs";

const EditPage = () => {
  const [params] = useSearchParams();
  const [texts, setTexts] = useState([]);
  const imageUrl = params.get("url");

  const addText = () => {
    const newId = `text-${texts.length}`;
    setTexts([...texts, { id: newId, x: 0, y: 0 }]);
  };

  const handleDragEnd = (event) => {
    const { delta, active } = event;
    setTexts((prev) =>
      prev.map((item) =>
        item.id === active.id
          ? {
              ...item,
              x: item.x + delta.x,
              y: item.y + delta.y,
            }
          : item
      )
    );
  };

  const memeRef = useRef();

  const handleDownload = () => {
    if (memeRef.current) {
      toJpeg(memeRef.current, { quality: 0.95 })
        .then((dataUrl) => {
          download(dataUrl, "meme.jpeg");
        })
        .catch((err) => {
          console.error("Export failed", err);
        });
    }
  };

  return (
    <DndContext onDragEnd={handleDragEnd}>
      <div ref={memeRef} style={{ position: "relative", minHeight: "400px" }}>
        <img
          src={imageUrl}
          alt="meme"
          width="300px"
          style={{ display: "block", marginBottom: "10px" }}
        />

        {/* Render each draggable text with position */}
        {texts.map((text) => (
          <Text key={text.id} id={text.id} x={text.x} y={text.y} />
        ))}
      </div>

      <Button
        onClick={addText}
        variant="primary"
        size="lg"
        className="rounded-pill px-4 mt-3"
      >
        Add Text
      </Button>

      <Button
        variant="primary"
        size="lg"
        className="rounded-pill px-4 mt-3 ml-3"
        onClick={handleDownload}
      >
        Download Meme
      </Button>
    </DndContext>
  );
};

export default EditPage;
