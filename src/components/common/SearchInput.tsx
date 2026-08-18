import { Search } from 'lucide-react';

type SearchInputProps ={
  text:string,
  search:string,
  onChange:(str:string)=> void
}

export default function SearchInput({text , search,  onChange}:SearchInputProps) {
    
  return (
    <div className="w-full lg:w-100 bg-background px-4 py-2 border border-input rounded-md flex items-center gap-3">
        <Search className="text-muted-foreground" size={20} />
        <input type="text" value={search} className="w-full outline-0 bg-transparent text-foreground placeholder:text-muted-foreground placeholder:text-sm" onChange={(e)=>onChange(e.target.value)} placeholder={text} />
      </div>
  )
}
