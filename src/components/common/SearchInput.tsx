import { Search } from 'lucide-react';

type Props ={
  text:string,
  state:string,
  setState:(str:string)=> void
}

export default function SearchInput({text , state,  setState}:Props) {
    
  return (
    <div className="w-full max-w-md bg-background px-4 py-2 border border-input rounded-xl flex items-center gap-3">
        <Search className="text-muted-foreground" size={20} />
        <input type="text" value={state} className="outline-0 bg-transparent text-foreground placeholder:text-muted-foreground" onChange={(e)=>setState(e.target.value)} placeholder={text} />
      </div>
  )
}
