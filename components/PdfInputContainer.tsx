"use client";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import pdfToText from "react-pdftotext";
import TextContainer from "./TextContainer";

function PdfInputContainer() {
  const [displayText, setDisplayText] = useState("");

  const extractTextFromPdf = async (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const file = event.target.files?.[0];

    if (!file) {
      console.error("No file selected");
      return;
    }

    try {
      const text = await pdfToText(file);
      console.log(text);
      setDisplayText(text);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <section>
      <div className='flex flex-col items-center gap-y-2 min-h-screen'>
        <h1 className='head-1'>pdf to text extract</h1>
        <div className='flex flex-col items-start justify-center px-8 py-10 rounded-md gap-4 mt-8 h-60 w-full max-w-2xl border-2 border-[#f2f2f2] shadow-lg'>
          <Label htmlFor='pdf' className='head-6'>
            Upload PDF File
          </Label>
          <Input
            type='file'
            id='pdf'
            name='pdf'
            required
            accept='application/pdf'
            onChange={extractTextFromPdf}
          />
        </div>
        <TextContainer displayText={displayText} />
      </div>
    </section>
  );
}

export default PdfInputContainer;
