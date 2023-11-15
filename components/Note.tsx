"use client";
import React, { useState, useEffect } from "react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { CheckSquare, Plus, StickyNote, Trash2, Edit } from "lucide-react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { ScrollArea } from "./ui/scroll-area";
import { cn } from "@/lib/utils";

interface NoteItem {
  text: string;
  isDone: boolean;
}

const Note: React.FC = () => {
  const [input, setInput] = useState<string>("");
  const [data, setData] = useState<NoteItem[]>(
    JSON.parse(localStorage.getItem("data") || "[]")
  );
  const [editingIndex, setEditingIndex] = useState<number | null>(null);

  useEffect(() => {
    localStorage.setItem("data", JSON.stringify(data));
  }, [data]);

  const addData = () => {
    if (input !== "") {
      setData((prevData) => [{ text: input, isDone: false }, ...prevData]);
      setInput("");
    }
  };

  const removeData = (index: number) => {
    setData((prevData) => prevData.filter((_, i) => i !== index));
  };

  const toggleIsDone = (index: number) => {
    setData((prevData) =>
      prevData.map((item, i) =>
        i === index ? { ...item, isDone: !item.isDone } : item
      )
    );
  };

  const startEditing = (index: number) => {
    setEditingIndex(index);
    setInput(data[index].text);
  };

  const finishEditing = () => {
    if (editingIndex !== null) {
      setData((prevData) =>
        prevData.map((item, i) =>
          i === editingIndex ? { ...item, text: input } : item
        )
      );
      setEditingIndex(null);
      setInput("");
    }
  };

  const cancelEditing = () => {
    setEditingIndex(null);
    setInput("");
  };

  return (
    <div>
      <Popover>
        <PopoverTrigger>
          <div className="p-3 bg-white rounded-full hover:bg-[#F3B664] transition-colors ease-in-out duration-300">
            <StickyNote />
          </div>
        </PopoverTrigger>
        <PopoverContent>
          <div className="flex items-center gap-2">
            <Input
              placeholder="Note"
              className="h-10"
              value={input}
              onChange={(e) => setInput(e.target.value)}
            />
            {editingIndex !== null ? (
              <>
                <Button onClick={finishEditing}>
                  <CheckSquare size={20} />
                </Button>
                <Button onClick={cancelEditing}>
                  <Trash2 size={20} />
                </Button>
              </>
            ) : (
              <Button onClick={addData}>
                <Plus size={20} />
              </Button>
            )}
          </div>
          <ScrollArea className="h-40 mt-2 flex flex-col gap-2">
            {data.length === 0 && (
              <span>
                No notes yet. Click the{" "}
                <Plus size={20} className="inline-block" /> icon to add one.
              </span>
            )}
            {data.length > 0 &&
              data.map((item, index) => (
                <div key={index} className="bg-gray-100 p-2 rounded-md mt-2">
                  <div className="flex items-center gap-3 mb-2">
                    <CheckSquare
                      size={20}
                      onClick={() => toggleIsDone(index)}
                      className={cn(
                        item.isDone ? "text-green-500" : "",
                        "cursor-pointer"
                      )}
                    />
                    <Trash2
                      onClick={() => removeData(index)}
                      size={20}
                      className="cursor-pointer"
                    />
                    <Edit
                      onClick={() => startEditing(index)}
                      size={20}
                      className="cursor-pointer"
                    />
                  </div>
                  <label
                    htmlFor={`note-${index + 1}`}
                    className={`${item.isDone ? "line-through" : ""} ${
                      editingIndex === index ? "bg-blue-100" : ""
                    }`}
                  >
                    {editingIndex === index ? (
                      <Input
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                      />
                    ) : (
                      item.text
                    )}
                  </label>
                </div>
              ))}
          </ScrollArea>
        </PopoverContent>
      </Popover>
    </div>
  );
};

export default Note;
