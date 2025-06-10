import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";


export default function Home() {

  return (
    <section className="alignment overflow-hidden max-h-screen">
      <main className="flex flex-col items-center justify-center gap-y-2 min-h-screen">
        <h1 className="head-1">pdf to text extract</h1>
        <div className="flex flex-col items-start justify-center px-8 py-10 rounded-md gap-4 mt-8 h-60 w-full max-w-2xl border-2 border-[#f2f2f2]">
        <Label htmlFor="pdf" className="head-6">Upload PDF File</Label>
        <Input type='file' id="pdf" name="pdf" accept='application/pdf' />
        
        </div>
      </main>
    </section>
  );
}

