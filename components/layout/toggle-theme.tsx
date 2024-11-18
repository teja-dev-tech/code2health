import { useTheme } from 'next-themes';
import { Button } from "../ui/button";
import { Sun, Moon } from "lucide-react";

export const ToggleTheme = () => {
    const { theme, setTheme } = useTheme();
    return (
        <Button onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            size="sm"
            variant="ghost"
            className="w-full justify-start"
        >
            {theme === 'dark' ?
                <div className='flex gap-2'><Sun /> <span>Light</span></div> : <div className='flex gap-2'><Moon /><span>Dark</span></div>}
        </Button>
    );

}