import { ArrowRight, Search } from "lucide-react";
import { Input } from "../input";
import { useState, ChangeEvent } from "react";

interface ScenepackSearchBarProps {
    filterScenePacks: (query: string) => void;
}

const ScenepackSearchBar: React.FC<ScenepackSearchBarProps> = ({
    filterScenePacks,
}) => {
    const [query, setQuery] = useState('');
    const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setQuery(value);
        filterScenePacks(value);
    }
    return (
        <div className="relative bg-white rounded-md">
            <Search className="absolute h-4 w-4 left-4 top-2 bg-white"/>
            <Input placeholder="Search.." className="pl-10" value={query} onChange={handleSearch}/>
        </div>
    );
}

export default ScenepackSearchBar;