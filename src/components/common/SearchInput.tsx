import { Search } from 'lucide-react';

export default function SearchInput({text}:{text:string}) {
    
  return (
    <div className="w-full max-w-md bg-background px-4 py-2 border border-input rounded-xl flex items-center gap-3">
        <Search className="text-muted-foreground" size={20} />
        <input type="text" className="outline-0 bg-transparent text-foreground placeholder:text-muted-foreground" placeholder={text} />
      </div>
  )
}
